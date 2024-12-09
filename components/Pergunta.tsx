import { View, Text } from "react-native";

interface PerguntaProps{
    titulo: string;
    texto: string;
}
export default function Pergunta({ titulo = "titulo", texto = "pergunta" }: PerguntaProps){
    return (
        <View className="flex gap-[22px] mt-[8px] w-full items-center">
            <View className="flex gap-[22px] w-11/12">
                <Text className="text-[#AB9C9F] text-base font-bold leading-6">{titulo}</Text>
                <Text className="text-[#333333] text-base font-medium">{texto}</Text>
            </View>
            <View className="bg-[#574A4D] w-full h-[1px]"/>
        </View>
        
    )
}