import BotaoPagamento from "@/components/BotaoPagamento";
import ResumoCompra from "@/components/ResumoCompra";
import Header from "@/components/header";
import { router } from "expo-router";
import { View, Image } from "react-native";

export default function ConfirmarPagamentoCredito() {
  return (
    <View className="flex-1 items-center justify-center bg-fundo gap-60">
      <Header titulo="Confirmar compra" />
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
  );
}
