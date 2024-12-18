import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { Stack } from "expo-router";
import { useEffect } from "react";
import "../global.css";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import AuthContextProvider from "@/context/authContext";
import TabBar from "@/components/tabBar";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),

    "ReadexPro-Bold": require("../assets/fonts/ReadexPro-Bold.ttf"),
    "ReadexPro-SemiBold": require("../assets/fonts/ReadexPro-SemiBold.ttf"),
    "ReadexPro-Medium": require("../assets/fonts/ReadexPro-Medium.ttf"),
    "ReadexPro-Regular": require("../assets/fonts/ReadexPro-Regular.ttf"),
    "ReadexPro-Light": require("../assets/fonts/ReadexPro-Light.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AuthContextProvider>
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="(pagamentos)" />
        </Stack>
      </AuthContextProvider>
    </GestureHandlerRootView>
  );
}
