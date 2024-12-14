import BotaoPagamento from "@/components/BotaoPagamento";
import ResumoCompra from "@/components/ResumoCompra";
import { router } from "expo-router";
import { View, Text, Image } from "react-native";

export default function Pagamento() {
  return (
    <View className="flex-1 items-center bg-white">
      <Image
        source={require("@/assets/images/logo.png")}
        className="w-12 h-12"
      />
      <Text className="text-center font-PoppinsMedium text-preto">
        Torne-se VIP
      </Text>
      <ResumoCompra />
      <Text className="text-xl text-preto font-PoppinsMedium">Pagamento</Text>
      <Text className="text-base text-preto font-PoppinsRegular">
        Formas de pagamento
      </Text>
      <Text className="text-sm text-cinza-3">Escolha uma opção</Text>
      <View className="flex w-11/12 gap-2">
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
        <BotaoPagamento
          texto="Cartão de crédito/débito"
          onPress={() => router.push("/(pagamentos)/confirmar-pag-credito")}
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
