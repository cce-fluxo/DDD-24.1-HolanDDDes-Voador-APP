import { View, Text } from "react-native";

export default function ResumoCompra() {
  return (
    <View className="flex w-11/12">
      <View className="flex gap-2">
        <Text className="text-2xl text-center text-preto font-PoppinsMedium">
          Resumo da compra
        </Text>
        <Text className="text-cinza3 text-base">
          Plano clube: <Text className="text-verde-1">30 dias grátis</Text>,
          depois pague R$ 55,00/mês
        </Text>
      </View>

      <Text className="text-3xl text-center text-preto font-PoppinsMedium flex my-6">
        R$ 55,00
      </Text>

      <View className="flex gap-6">
        <Text className="text-xl text-preto font-PoppinsMedium">
          Detalhes dos benefícios
        </Text>
        <Text className="text-sm font-PoppinsRegular text-gray-2 border-b border-b-branco-3">
          Cupons de descontos de até 30% para usar em todos os hotéis
        </Text>
        <Text className="text-sm text-gray-2 font-PoppinsRegular border-b border-b-branco-3">
          Fidelidade para suas próximas estadias
        </Text>
      </View>
    </View>
  );
}
