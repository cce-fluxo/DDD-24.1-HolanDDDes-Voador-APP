import { View, Text } from "react-native";

export default function Pagamento() {
  return (
    <View>
      <Text>Torne-se VIP</Text>
      <Text className="text-2xl text-preto">Resumo da compra</Text>
      <Text className="text-cinza3 text-base">
        Plano clube: <Text className="text-green1">30 dias grátis</Text>, depois
        pague R$ 55,00/mês
      </Text>
      <Text className="text-3xl text-preto">R$ 55,00</Text>
      <Text className="text-xl text-preto">Detalhes dos benefícios</Text>
      <Text className="text-sm text-gray2">
        Cupons de descontos de até 30% para usar em todos os hotéis
      </Text>
      <Text className="text-sm text-gray2">
        Fidelidade para suas próximas estadias
      </Text>
      <Text className="text-xl text-preto">Pagamento</Text>
      <Text className="text-base text-preto">Formas de pagamento</Text>
      <Text className="text-sm text-cinza3">Escolha uma opção</Text>
    </View>
  );
}
