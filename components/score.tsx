import { View, Image, Text } from "react-native";
import Estrelas from "./estrelas";

export default function Score() {
    return (
        <View className="flex gap-6">
            <View className="flex-row w-11/12 justify-between">
                <View className="flex-row items-center gap-2">
                    <Image  source={require("../assets/images/limpeza.png")} width={17} height={17}/>
                    <Text className="text-preto font-bold text-base">Limpeza (4,6)</Text>
                </View>
                <Estrelas/>
            </View>

            <View className="flex-row w-11/12 justify-between">
                <View className="flex-row items-center gap-2">
                    <Image  source={require("../assets/images/atendimento.png")} width={17} height={17}/>
                    <Text className="text-preto font-bold text-base">Atendimento (5.0)</Text>
                </View>
                <Estrelas/>
            </View>

            <View className="flex-row w-11/12 justify-between">
                <View className="flex-row items-center gap-2">
                    <Image  source={require("../assets/images/custo.png")} width={17} height={17}/>
                    <Text className="text-preto font-bold text-base">Custo-benefício (4.5)</Text>
                </View>
                <Estrelas/>
            </View>

            <View className="flex-row w-11/12 justify-between">
                <View className="flex-row items-center gap-2">
                    <Image  source={require("../assets/images/localizacao.png")} width={14} height={20}/>
                    <Text className="text-preto font-bold text-base">Localização (4.7)</Text>
                </View>
                <Estrelas/>
            </View>

            <View className="flex-row w-11/12 justify-between">
                <View className="flex-row items-center gap-2">
                    <Image  source={require("../assets/images/conforto.png")} width={22} height={20}/>
                    <Text className="text-preto font-bold text-base">Conforto (4.9)</Text>
                </View>
                <Estrelas/>
            </View>

            <View className="flex-row w-11/12 justify-between">
                <View className="flex-row items-center gap-2">
                    <Image  source={require("../assets/images/comida.png")} width={17} height={17}/>
                    <Text className="text-preto font-bold text-base">Comida (4.7)</Text>
                </View>
                <Estrelas/>
            </View>
        </View>
        
        
    )
}