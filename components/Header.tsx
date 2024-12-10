import { View, Text, Image, Pressable } from "react-native";
import { useRouter } from "expo-router";

interface HeaderProps {
  headerText: string;
}

export default function Header({ headerText }: HeaderProps) {
  const router = useRouter();
  return (
    <View>
      <Pressable onPress={() => router.back()}>
        <Image source={require("./assets/images/arrow_back_ios.png")} />
      </Pressable>
      <Text>{headerText}</Text>
    </View>
  );
}
