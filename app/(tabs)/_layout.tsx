import { Tabs } from "expo-router";
import { Image, View } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#333333",
          height: 60,
          display: "flex",
          flexDirection: "row",
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Image
              source={require("@/assets/images/tab-icon-home.png")}
              resizeMode="contain"
              className="w-6 h-6"
            />
          ),
        }}
      />

      <Tabs.Screen
        name="notificacoes"
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Image
              source={require("@/assets/images/tab-icon-notificacao.png")}
              resizeMode="contain"
              className="w-7 h-7"
            />
          ),
        }}
      />

      <Tabs.Screen
        name="perfil"
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Image
              source={require("@/assets/images/tab-icon-perfil.png")}
              resizeMode="contain"
              className="w-7 h-7"
            />
          ),
        }}
      />

      <Tabs.Screen
        name="reservas"
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Image
              source={require("@/assets/images/tab-icon-reservas.png")}
              resizeMode="contain"
              className="w-7 h-7"
            />
          ),
        }}
      />
    </Tabs>
  );
}
