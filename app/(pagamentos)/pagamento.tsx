import BotaoPagamento from "@/components/BotaoPagamento";
import ResumoCompra from "@/components/ResumoCompra";
import { router } from "expo-router";
import { View, Text, Image } from "react-native";

export default function Pagamento() {
  return (
    <View className="flex-1 items-center bg-fundo">
      <View className="flex items-center my-4">
        <Image
          source={require("@/assets/images/logo.png")}
          className="w-12 h-12"
          resizeMode="contain"
        />
        <Text className="text-center font-PoppinsMedium text-preto text-xl">
          Torne-se VIP
        </Text>
      </View>
      <ResumoCompra />
      <View className="flex gap-4 my-8 w-11/12">
        <Text className="text-xl text-preto font-PoppinsMedium">Pagamento</Text>
        <View className="flex-row items-center gap-2">
          <View className="rounded-full bg-cinza-6 w-14 h-14 flex justify-center items-center">
            <Image
              source={require("@/assets/images/payments.png")}
              className="w-7"
              resizeMode="contain"
            />
          </View>
          <View className="flex">
            <Text className="text-base text-preto font-PoppinsRegular">
              Formas de pagamento
            </Text>
            <Text className="text-sm text-cinza-3">Escolha uma opção</Text>
          </View>
        </View>
      </View>
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
