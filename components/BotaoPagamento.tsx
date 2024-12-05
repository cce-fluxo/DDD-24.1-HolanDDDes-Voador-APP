import { Text, Pressable, Image } from "react-native";

interface BotaoPagamentoProps {
  texto: string;
  onPress: () => void;
}

export default function BotaoPagamento({
  texto,
  onPress,
}: BotaoPagamentoProps) {
  return (
    <Pressable onPress={onPress} className="rounded-3xl flex">
      <Image className="rounded-full" />
      <Text className="text-preto font-PoppinsRegular text-sm">{texto}</Text>
    </Pressable>
  );
}
