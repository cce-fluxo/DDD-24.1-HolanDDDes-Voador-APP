import BotaoPagamento from "@/components/BotaoPagamento";
import Header from "@/components/header";
import ResumoCompra from "@/components/ResumoCompra";
import { router } from "expo-router";
import { View, Image } from "react-native";

export default function ConfirmarPagamentoBoleto() {
  return (
    <View className="flex-1 bg-fundo">
      <View className="flex items-center justify-center gap-60">
        <Header titulo="Confirmar compra" />
        <ResumoCompra />

        <View className="w-11/12">
          <BotaoPagamento
            texto="Boleto"
            onPress={() => router.push("/(pagamentos)/pagamento-boleto")}
          >
            <Image
              source={require("@/assets/images/barcode.png")}
              className="h-5 w-5"
              resizeMode="contain"
            />
          </BotaoPagamento>
        </View>
      </View>
    </View>
  );
}
