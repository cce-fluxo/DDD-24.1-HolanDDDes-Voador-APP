import BotaoPagamento from "@/components/BotaoPagamento";
import ResumoCompra from "@/components/ResumoCompra";
import { router } from "expo-router";
import { View, Text, Image } from "react-native";

export default function Pagamento() {
  return (
    <View className="flex-1 items-center">
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
      <View className="flex">
        <BotaoPagamento
          texto="Pix"
          onPress={() => router.push("/(pagamentos)/pagamento-pix")}
        />
        <BotaoPagamento
          texto="Boleto"
          onPress={() => router.push("/(pagamentos)/pagamento-boleto")}
        />
        <BotaoPagamento
          texto="Cartão de crédito/débito"
          onPress={() => router.push("/(pagamentos)/pagamento-cartao")}
        />
      </View>
    </View>
  );
}
