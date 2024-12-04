import BotaoPagamento from "@/components/BotaoPagamento";
import ResumoCompra from "@/components/ResumoCompra";
import { router } from "expo-router";
import { View, Text, Image } from "react-native";

const handlePixClick = () => {
  router.navigate("/(pagamentos)/pagamento-pix");
};

const handleBoletoClick = () => {
  router.navigate("/(pagamentos)/pagamento-boleto");
};

const handleCartaoClick = () => {
  router.navigate("/(pagamentos)/pagamento-cartao");
};

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
          onPress={handlePixClick}
          icon={"@/assets/images/pix.png"}
        />
        <BotaoPagamento
          texto="Boleto"
          onPress={handleBoletoClick}
          icon="@/assets/images/barcode.png"
        />
        <BotaoPagamento
          texto="Cartão de crédito/débito"
          onPress={handleCartaoClick}
          icon="@/assets/images/mastercard.png"
        />
      </View>
    </View>
  );
}
