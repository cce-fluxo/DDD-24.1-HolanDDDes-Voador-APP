import { useRouter } from "expo-router";
import { View, Text, Image, TouchableNativeFeedback, TouchableOpacity } from "react-native";


export default function TabBar() {

    const router = useRouter();

    return (
        <View className="w-screen bg-black flex-row items-center justify-between px-10 py-4 mt-auto">
            <TouchableOpacity onPress={() => { router.push("/(auth)/login") }}>
                <Image
                    source={require("@/assets/images/tab-icon-home.png")}
                    resizeMode="contain"
                    className="w-6 h-6"
                />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { router.push("/(notificacoes)/notificacoes") }}>
                <Image
                    source={require("@/assets/images/tab-icon-notificacao.png")}
                    resizeMode="contain"
                    className="w-6 h-6"
                />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { router.push("/(perfil)/conta") }}>
                <Image
                    source={require("@/assets/images/tab-icon-perfil.png")}
                    resizeMode="contain"
                    className="w-6 h-6"
                />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { router.push("/(auth)/login") }}>
                <Image
                    source={require("@/assets/images/tab-icon-reservas.png")}
                    resizeMode="contain"
                    className="w-6 h-6"
                />
            </TouchableOpacity>
            
        </View>
    )
}