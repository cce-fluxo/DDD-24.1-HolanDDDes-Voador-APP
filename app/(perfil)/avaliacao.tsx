import Header from "@/components/header";
import Score from "@/components/score";
import { View, Text } from "react-native";

export default function Avaliacao(){
    return (
        <View className="w-screen h-screen bg-white flex items-center gap-[40px]">
            <Header titulo="Avaliações" className="w-full"/>
            <Text className="text-preto text-2xl font-medium">Hotel Aquamarine</Text>
            <Score/>
            <View className="w-11/12 h-[1px] bg-black"/>
            <View className="flex w-11/12">
                <Text className="text-preto text-xl font-medium">Adicionar Comentário</Text>
            </View>
            
        </View>
    )
}