import CardCartao from "@/components/cardCartao";
import { View, Text} from "react-native";
import { Svg, Path } from 'react-native-svg';

export default function Cartoes(){
    return (
        <View className="">
            <View className="flex-row gap-2 items-center">
                <Text className="text-[#333333] text-base font-medium ">Cartão de Crédito</Text>
                <Svg width="20" height="16" viewBox="0 0 20 16" fill="none">
                    <Path d="M18 0H2C0.89 0 0.00999999 0.89 0.00999999 2L0 14C0 15.11 0.89 16 2 16H18C19.11 16 20 15.11 20 14V2C20 0.89 19.11 0 18 0ZM18 14H2V8H18V14ZM18 4H2V2H18V4Z" fill="#333333"/>
                </Svg>
            </View>

            <CardCartao tipo="Crédito" bandeira="Mastercard" numero="1234" onDelete={() => {console.log("Deletando cartao")}}></CardCartao>
        </View>
        
    )
}