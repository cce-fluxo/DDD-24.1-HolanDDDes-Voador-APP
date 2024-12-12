import BotaoCopiarCodigo from "@/components/BotaoCopiarCodigo";
import { View, Text, Image } from "react-native";

const handlePress = () => {
  return;
};

export default function PagamentoPix() {
  return (
    <View className="flex items-center mx-6">
      <View className="flex items-center gap-2 mt-4">
        <Text className="font-PoppinsMedium text-sm">Escaneie o QR Code:</Text>
        <Image
          source={require("@/assets/images/sample-qr-code-icon.png")}
          className="w-48 h-48"
        />
      </View>
      <View className="flex items-center my-8 gap-4">
        <Text className="font-PoppinsMedium text-rosa-4 text-sm">
          Código válido por 1 dia
        </Text>
        <Text className="font-PoppinsRegular text-preto text-sm text-center">
          Não aceitamos depósitos de terceiros, ou seja, o valor depositado deve
          vir de uma conta com o seu CPF/CNPJ.
        </Text>
      </View>
      <BotaoCopiarCodigo onPress={handlePress} />
      <View className="flex gap-8 mt-8 mx-4">
        <View className="flex-row items-center gap-2">
          <Text className="font-PoppinsBold text-base w-8 h-8 rounded-2xl bg-rosa-4 flex-row text-center text-white">
            1
          </Text>
          <Text className="font-PoppinsRegular text-base text-preto">
            Acesse o app ou site do seu banco
          </Text>
        </View>

        <View className="flex-row items-center gap-2">
          <Text className="font-PoppinsBold text-base w-8 h-8 rounded-2xl bg-rosa-4 flex-row text-center text-white">
            2
          </Text>
          <Text className="font-PoppinsRegular text-base text-preto">
            Busque a opção de pagar com Pix
          </Text>
        </View>

        <View className="flex-row items-center gap-2">
          <Text className="font-PoppinsBold text-base w-8 h-8 rounded-2xl bg-rosa-4 flex-row text-center text-white">
            3
          </Text>
          <Text className="font-PoppinsRegular text-base text-preto">
            Leia o QR Code ou código Pix
          </Text>
        </View>

        <View className="flex-row items-center gap-2">
          <Text className="font-PoppinsBold text-base w-8 h-8 rounded-2xl bg-rosa-4 flex-row text-center text-white">
            4
          </Text>
          <Text className="font-PoppinsRegular text-base text-preto">
            Pronto! Você verá a confirmação do pagamento
          </Text>
        </View>
      </View>
    </View>
  );
}
