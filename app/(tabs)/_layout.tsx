import { Tabs } from "expo-router";
import { Image } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#333333",
          display: "flex",
          height: 60,
          flexDirection: "row",
          paddingTop: 10,
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
