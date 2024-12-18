import { View, Text } from "react-native";
import Svg, { Path } from "react-native-svg";
import Button from "./botao";

interface CupomCardProps {
    desconto: string;
    descricao: string;
}

export default function CupomCard( {desconto, descricao }: CupomCardProps) {

    function copiarCupom() {
        console.log("copiado")
    }

    return (
        <View className="w-11/12 bg-white rounded-lg py-6 flex gap-[16px] items-center border-b-2 border-b-[#DC143B]">
            <View className="flex-row gap-3 items-center">
                <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <Path d="M19.41 9.58L10.41 0.58C10.05 0.22 9.55 0 9 0H2C0.9 0 0 0.9 0 2V9C0 9.55 0.22 10.05 0.59 10.42L9.59 19.42C9.95 19.78 10.45 20 11 20C11.55 20 12.05 19.78 12.41 19.41L19.41 12.41C19.78 12.05 20 11.55 20 11C20 10.45 19.77 9.94 19.41 9.58ZM11 18.01L2 9V2H9V1.99L18 10.99L11 18.01Z" fill="#DC143B"/>
                    <Path d="M4.5 6C5.32843 6 6 5.32843 6 4.5C6 3.67157 5.32843 3 4.5 3C3.67157 3 3 3.67157 3 4.5C3 5.32843 3.67157 6 4.5 6Z" fill="#DC143B"/>
                </Svg>
                <Text className="text-sm font-semibold text-preto">{desconto} de desconto para hoteis selecionados</Text>
            </View>
            <Text className="text-sm font-normal text-center text-[#00000080]">{descricao}</Text>
            <Button text="Copiar Cupom" colorBotao="bg-[#DC143B]" colorTexto="text-white" onPress={ () => {copiarCupom()} }/>
        </View>
    )
}