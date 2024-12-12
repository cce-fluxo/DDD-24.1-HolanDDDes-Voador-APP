import { View, Text } from "react-native";
import BotaoCopiarCodigo from "@/components/BotaoCopiarCodigo";
import Button from "@/components/botao";

const handlePressCopiarCodigo = () => {
  return;
};

const handlePressBaixarBoleto = () => {
  return;
};

export default function PagamentoBoleto() {
  return (
    <View className="flex gap-8 items-center">
      <View className="flex gap-4 mx-10 mt-4">
        <Text className="font-PoppinsMedium text-preto text-sm text-center">
          Você tem 3 dias para pagar. O pagamento é aprovado em 1 ou 2 dias
          úteis.
        </Text>
        <Text className="font-PoppinsRegular text-preto text-sm text-center">
          Pague agora coma numeração do código de barras via internet Banking ou
          imprima o boleto para pagamento
        </Text>
      </View>
      <View className="bg-cinza-0 mx-10 flex gap-3 items-center py-5">
        <Text className="font-PoppinsMedium text-sm text-cinza-3 text-center">
          Numeração do código de barras
        </Text>
        <Text className="font-PoppinsMedium text-sm text-preto text-center">
          10498.50223 18000.100844 23412.251532 1 83450000192800
        </Text>
        <BotaoCopiarCodigo onPress={handlePressCopiarCodigo} />
      </View>
      <Button
        text="Baixar boleto"
        colorBotao="border border-rosa-4"
        colorTexto="text-rosa-4 text-sm"
        onPress={handlePressBaixarBoleto}
        fonteTexto="font-PoppinsMedium"
      />
    </View>
  );
}
