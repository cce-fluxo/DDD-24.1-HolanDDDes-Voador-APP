import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center">
      <Link className="text-4xl text-lime-400" href={"/pagamento"}>
        <Text className="font-ReadexProBold">pague o aluguel</Text>
      </Link>
      <Link className="text-2xl text-blue-700" href={"/(auth)/cadastro-1"}>
        cadastro-1
      </Link>
      <Link className="text-2xl text-blue-700" href={"/(auth)/cadastro-2"}>
        cadastro-2
      </Link>
      <Link className="text-2xl text-blue-700" href={"/(auth)/cadastro-3"}>
        cadastro-3
      </Link>
      <Link className="text-2xl text-blue-700" href={"/(auth)/login"}>
        Login
      </Link>
      <Link
        className="text-2xl text-blue-700"
        href={"/(redefinir-senha)/redefinir-1"}
      >
        redefinir1
      </Link>
      <Link
        className="text-2xl text-blue-700"
        href={"/(redefinir-senha)/redefinir-2"}
      >
        redefinir2
      </Link>
      <Link
        className="text-2xl text-blue-700"
        href={"/(redefinir-senha)/redefinir-3"}
      >
        redefinir3
      </Link>
      <Link
        className="text-2xl text-blue-700"
        href={"/(perfil)/conta"}
      >
        conta
      </Link>
    </View>
  );
}
