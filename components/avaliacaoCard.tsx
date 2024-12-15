import { View, Text, Image, TouchableOpacity} from "react-native";

interface AvaliacaoProps {
    hotel: string;
    endereco: string;
    estrelas?: number;
} 

export default function Avaliacao( { hotel, endereco, estrelas }: AvaliacaoProps) {
    return (
        <TouchableOpacity className="bg-white w-11/12 rounded-lg shadow-2xl p-4 flex-row justify-between items-center">
            <View className="flex-row gap-4">
                <View className="w-[73px] h-[73px] bg-slate-600"></View>
                <View className="flex gap-2">
                    <Text>{hotel}</Text>
                    <View className="flex-row gap-1">
                        <Image  source={require('../assets/images/EstrelaVazia.png')} width={17} height={17}/>
                        <Image  source={require('../assets/images/EstrelaVazia.png')} width={17} height={17}/>
                        <Image  source={require('../assets/images/EstrelaVazia.png')} width={17} height={17}/>
                        <Image  source={require('../assets/images/EstrelaVazia.png')} width={17} height={17}/>
                        <Image  source={require('../assets/images/EstrelaVazia.png')} width={17} height={17}/>
                    </View>
                    <View className="flex-row items-center gap-2">
                        <Image  source={require('../assets/images/location.png')} width={7} height={10}/>
                        <Text>{endereco}</Text>
                    </View>
                </View>

            </View>
            
            <Image  source={require('../assets/images/seta-direita.png')} width={17} height={17}/>

        </TouchableOpacity>
    )
}