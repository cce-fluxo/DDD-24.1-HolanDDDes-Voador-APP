import { ReactNode } from "react";
import { Text, Pressable } from "react-native";

interface BotaoPagamentoProps {
  texto: string;
  onPress: () => void;
  children: ReactNode;
}

export default function BotaoPagamento({
  texto,
  onPress,
  children,
}: BotaoPagamentoProps) {
  return (
    <Pressable
      onPress={onPress}
      className="rounded-full flex-row items-center gap-3 w-full bg-cinza-6 p-4"
    >
      {children}
      <Text className="text-preto font-PoppinsRegular text-sm">{texto}</Text>
    </Pressable>
  );
}
