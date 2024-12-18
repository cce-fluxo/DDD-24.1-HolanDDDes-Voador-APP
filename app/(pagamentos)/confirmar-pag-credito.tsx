import BotaoPagamento from "@/components/BotaoPagamento";
import ResumoCompra from "@/components/ResumoCompra";
import Header from "@/components/header";
import { router } from "expo-router";
import { View, Image } from "react-native";

export default function ConfirmarPagamentoCredito() {
  return (
    <View className="flex-1 bg-fundo">
      <Header titulo="Confirmar compra" />
      <View className="flex items-center mt-40 gap-40">
        <ResumoCompra />

        <View className="w-11/12">
          <BotaoPagamento
            texto="Cartão de crédito/débito"
            onPress={() => router.push("/(pagamentos)/adicionar-cartao")}
          >
            <Image
              source={require("@/assets/images/mastercard.png")}
              className="h-5 w-5"
              resizeMode="contain"
            />
          </BotaoPagamento>
        </View>
      </View>
    </View>
  );
}
