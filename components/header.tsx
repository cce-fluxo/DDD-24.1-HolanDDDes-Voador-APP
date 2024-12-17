import { router } from "expo-router";
import { View, Text, Pressable } from "react-native";
import Svg, { Path } from "react-native-svg";

interface HeaderProps {
  titulo: string;
  className?: string; //estilizações adicionais caso sejam necessarias
}

export default function Header({ titulo, className = "" }: HeaderProps) {
  return (
    <View className={`flex-row items-center gap-4 w-full ${className}`}>
      <Pressable
        onPress={() => {
          router.back();
        }}
        className="p-5"
      >
        <Svg width="12" height="20" viewBox="0 0 12 20" fill="none">
          <Path
            d="M11.835 1.8701L10.055 0.100098L0.165039 10.0001L10.065 19.9001L11.835 18.1301L3.70504 10.0001L11.835 1.8701Z"
            fill="#DC143B"
          />
        </Svg>
      </Pressable>
      <Text className="text-xl font-PoppinsMedium text-preto">{titulo}</Text>
    </View>
  );
}
