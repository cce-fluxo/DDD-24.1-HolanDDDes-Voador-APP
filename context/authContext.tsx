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
    user: User;
  }

  interface User {
    id: string;
    name: string;
    email: string;
  }
  
  
  const AuthContext = createContext<AuthContextData>({
    signIn: async () => {}, // Funções vazias como fallback
    signOut: async () => {},
    saveUserInfo: async () => {},
    token: "",
    user: {
      id: "",
      name: "",
      email: "",
    },
  });
  
  
  export default function AuthContextProvider({ children }: {children: ReactNode}) {
    const [token, setToken] = useState("");
    const [user, setUser] = useState<User>({
      id: "",
      name: "",
      email: "",
    });
    
    const [loading, setLoading] = useState(true); // carregamento
  
    const loadStoragedData = useCallback(async () => {
      try {
        const [token, user] = await AsyncStorage.multiGet([
          "@BonVoyage:token",
          "@BonVoyage:user",
        ]);
        if (token[1]) {
          console.log("Token recuperado:", token[1]);
          setToken(token[1]);
        } else {
          console.error("Token não encontrado");
        }
        if (user[1]) {
          console.log("Usuário recuperado:", user[1]);
          setUser(JSON.parse(user[1]) as User);
        } else {
          console.error("Usuário não encontrado");
        }
      } catch (error) {
        console.error("Erro ao recuperar dados do AsyncStorage:", error);
      }
      setLoading(false);
    }, []); 
       
    const signIn = useCallback(async (accessToken: string) => {
      try {
        if (!accessToken) {
          console.error("Token vazio recebido");
          return;
        }
    
        console.log("Armazenando token...");
        await AsyncStorage.setItem("@BonVoyage:token", accessToken);
        setToken(accessToken);
        console.log("Token armazenado:", accessToken);
      } catch (error) {
        console.error("Erro ao salvar o token:", error);
      }
    }, []);  
    
  
    const signOut = useCallback(async () => {
      await AsyncStorage.multiRemove(["@BonVoyage:token", "@BonVoyage:user"]);
      setToken("");
    }, []);
  
    const saveUserInfo = useCallback(async (user: User) => {
      try {
        console.log("Armazenando informações do usuário...");
    
        // Salvando no AsyncStorage
        await AsyncStorage.setItem("@BonVoyage:user", JSON.stringify(user));
        console.log("Usuário armazenado no AsyncStorage:", user);
    
        // Atualizando o estado
        setUser(user);
        console.log("Estado do usuário atualizado:", user);
      } catch (error) {
        console.error("Erro ao salvar informações do usuário:", error);
      }
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