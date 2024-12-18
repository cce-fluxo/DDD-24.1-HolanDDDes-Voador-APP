import CuponsPage from "@/components/cuponsPage";
import Header from "@/components/header";
import TabBar from "@/components/tabBar";
import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function Cupons() {

    const [ativo, setAtivo] = useState(true)

    return (
        <View className="w-screen h-screen bg-white">
            <Header titulo="Meus Cupons"/>
            <View className="w-screen flex-row">
                <TouchableOpacity  className={`w-1/2 flex pt-9 pb-3 ${ativo? "border-b-2 border-[#DC143B]" : ""}`} onPress={ () => { setAtivo(true) }}>
                    <Text className={`text-base font-medium text-center ${ativo? "text-[#DC143B]" : "text-[#33333380]"}`}>Ativos</Text>
                </TouchableOpacity>

                <TouchableOpacity className={`w-1/2 flex pt-9 pb-3 ${!ativo? "border-b-2 border-[#DC143B]" : ""}`} onPress={ () => { setAtivo(false) }}>
                    <Text className={`text-base font-medium text-center ${!ativo? "text-[#DC143B]" : "text-[#33333380]"}`}>Indisponíveis</Text>
                </TouchableOpacity>
            </View>
            <CuponsPage ativo={ativo}></CuponsPage>
            <TabBar></TabBar>
        </View>
    )
}