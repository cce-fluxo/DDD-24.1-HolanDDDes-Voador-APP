import React, {
    createContext,
    useContext,
    useState,
    useCallback,
    useEffect,
    ReactNode,
  } from "react";
  import AsyncStorage from "@react-native-async-storage/async-storage";
  
  interface AuthContextData {
    signIn: any;
    signOut: any;
    saveUserInfo: any;
    token: string;
    user: object;
  }
  
  const AuthContext = createContext<AuthContextData>({
    signIn: () => {}, // Função vazia como fallback
    signOut: () => {},
    saveUserInfo: () => {},
    token: "",
    user: {},
  });
  
  export default function AuthContextProvider({ children }: {children: ReactNode}) {
    const [token, setToken] = useState("");
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true); // carregamento
  
    const loadStoragedData = useCallback(async () => {
      const [token, user, dataMot] = await AsyncStorage.multiGet([
        "@BonVoyage:token",
        "@BonVoyage:user",
      ]);
      if (token[1] && user[1]) {
        setToken(token[1]);
        setUser(JSON.parse(user[1]));
      }
      setLoading(false);
    }, []);
  
    const signIn = useCallback(async (token: string) => {
      await AsyncStorage.setItem("@BonVoyage:token", token);
      console.log("Token armazenado no storage");
  
      setToken(token);
    }, []);
  
    const signOut = useCallback(async () => {
      await AsyncStorage.multiRemove(["@BonVoyage:token", "@BonVoyage:user"]);
      setToken("");
    }, []);
  
    const saveUserInfo = useCallback(async (user: object) => {
      console.log("teste armazenar info usuário");
      await AsyncStorage.setItem("@BonVoyage:user", JSON.stringify(user));
      console.log("Usuário armazenado BonVoyage storage");
  
      setUser(user);
    }, []);

    useEffect(() => {
      loadStoragedData();
    }, []);
  
    return (
      <AuthContext.Provider
        value={{
          signIn,
          signOut,
          saveUserInfo,
          token,
          user,
        }}
      >
        {children}
      </AuthContext.Provider>
    );
  }
  
  export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
      throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
  }