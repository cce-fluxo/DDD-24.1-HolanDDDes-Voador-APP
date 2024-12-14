import { View, Text, TouchableOpacity } from "react-native";
import Svg, { Path } from "react-native-svg";
import { Image } from 'react-native';

interface CardCartaoProps {
    tipo: "Crédito" | "Débito";
    bandeira: string;
    numero: string;
    onDelete: () => void;
}
export default function CardCartao({ tipo, bandeira, numero, onDelete }: CardCartaoProps) {
    return (
        <View className="bg-white rounded-xl flex items-center p-3 w-[130px] h-[100px] shadow-md" style={{ marginHorizontal: 6, marginVertical:10}}>
            <View className="flex-row gap-2 items-center p-2">
                <Image source={require('../assets/images/mastercard.png')} width={15} height={9} />
                <Text className="text-[#191919] font-normal text-sm">{tipo}</Text>
                <TouchableOpacity onPress={onDelete}>
                    <Svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <Path d="M9 5.25V12.75H3V5.25H9ZM7.875 0.75H4.125L3.375 1.5H0.75V3H11.25V1.5H8.625L7.875 0.75ZM10.5 3.75H1.5V12.75C1.5 13.575 2.175 14.25 3 14.25H9C9.825 14.25 10.5 13.575 10.5 12.75V3.75Z" fill="#333333" />
                    </Svg>
                </TouchableOpacity>
            </View>
            <Text className="text-[#191919] font-normal text-sm px-2">
                {bandeira}
            </Text>
            <Text className="text-[#191919] font-normal text-sm px-2">
                {"**** " + numero}
            </Text>
        </View>
    );
}
