import { Text, Pressable, View  } from "react-native";

interface BotaoAvaliacaoProps {
  text: string;
  onPress: () => void;
}

export default function BotaoAvaliacao({ text, onPress }: BotaoAvaliacaoProps) {
  return (
    <Pressable
      onPress={onPress}
      className={`flex gap-[22px] w-10/12`}
    >
      <Text className="text-[#0D1110] text-base font-normal">{text}</Text>
      <View className="bg-[#574A4D] w-full h-[1px]"/>
    </Pressable>
  );
}
