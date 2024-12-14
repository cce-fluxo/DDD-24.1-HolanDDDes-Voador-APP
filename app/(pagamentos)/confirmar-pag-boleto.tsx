import BotaoPagamento from "@/components/BotaoPagamento";
import ResumoCompra from "@/components/ResumoCompra";
import { router } from "expo-router";
import { View, Image } from "react-native";

export default function ConfirmarPagamentoBoleto() {
  return (
    <View className="flex-1 items-center justify-center bg-fundo gap-60">
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
  );
}
