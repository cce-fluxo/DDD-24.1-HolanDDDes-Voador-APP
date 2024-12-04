import { View, Text } from "react-native";

export default function ResumoCompra() {
  return (
    <View className="flex bg-slate-500">
      <View>
        <Text className="text-2xl text-center text-preto font-PoppinsMedium">
          Resumo da compra
        </Text>
        <Text className="text-cinza3 text-base">
          Plano clube: <Text className="text-verde-1">30 dias grátis</Text>,
          depois pague R$ 55,00/mês
        </Text>
        <Text className="text-3xl text-center text-preto font-PoppinsMedium">
          R$ 55,00
        </Text>
        <Text className="text-xl text-preto">Detalhes dos benefícios</Text>
      </View>

      <View>
        <Text className="text-sm font-PoppinsRegular text-cinza-2">
          Cupons de descontos de até 30% para usar em todos os hotéis
        </Text>
        <Text className="text-sm text-cinza-2 font-PoppinsRegular">
          Fidelidade para suas próximas estadias
        </Text>
      </View>
    </View>
  );
}
