import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-4xl font-PoppinsBold">
        Edit app/index.tsx to edit this screen.
      </Text>
      <Link className="text-4xl text-lime-400" href={"/pagamento"}>
        <Text className="font-ReadexProBold">pague o aluguel</Text>
      </Link>
    </View>
  );
}
