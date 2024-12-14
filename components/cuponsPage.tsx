import { ScrollView, View, Image, Text } from "react-native";
import CupomCard from "./cuponModal";
import Button from "./botao";

interface CupomPageProps {
    ativo: boolean;
}

function Assinatura() {
    return (
        <View className="w-full items-center">
            <View className="flex-row w-11/12 bg-white rounded-lg p-4">
                <Image source={require('../assets/images/Hotel Booking.png')} width={15} height={9} />
                <View className="flex items-center w-[50%] gap-4">
                    <Text className="text-sm font-normal  text-[#372F30]">Deseja garantir cupons de descontos especiais? Clique aqui e torne-se VIP</Text>
                    <Button text="Assinar Clube" colorBotao="bg-[#DC143B]" colorTexto="text-white" onPress={ () => {console.log("clicado comprar")} }/>
                </View>
            </View>
        </View>
        
    )
}

export default function CuponsPage( { ativo }: CupomPageProps) {
    return (
        <View className="w-full h-full pt-6 bg-red-50">
            {ativo? <Assinatura/>: null }
            
            <ScrollView className="w-full h-full  flex pt-6" 
            style={{ flex: 1 }}
            contentContainerStyle={{
                alignItems: "center", 
                gap: 45, 
                paddingBottom: 30,
            }}>
            
            {ativo?
            <CupomCard desconto="10%" descricao="Válidos para pedidos a partir de R$600"/>: 
            <CupomCard desconto="10%" descricao="cupom invalido"/>}
        </ScrollView>

        
        </View>
        
    )
}