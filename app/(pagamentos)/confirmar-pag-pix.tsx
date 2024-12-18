import BotaoPagamento from "@/components/BotaoPagamento";
import ResumoCompra from "@/components/ResumoCompra";
import Header from "@/components/header";
import { router } from "expo-router";
import { View, Image, StyleSheet } from "react-native";

export default function ConfirmarPagamentoPix() {
  return (
    <View className="flex-1 bg-fundo">
      <Header titulo="Confirmar compra" />
      <View className="flex items-center mt-40 gap-40">
        <ResumoCompra />

        <View className="w-11/12">
          <BotaoPagamento
            texto="PIX"
            onPress={() => router.push("/(pagamentos)/pagamento-pix")}
          >
            <Image
              source={require("@/assets/images/pix.png")}
              className="h-5 w-5"
              resizeMode="contain"
            />
          </BotaoPagamento>
        </View>
      </View>
    </View>
  );
}
