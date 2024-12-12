import { Text, Pressable, Image } from "react-native";

interface BotaoCopiarCodigoProps {
  onPress: () => void;
}

export default function BotaoCopiarCodigo({ onPress }: BotaoCopiarCodigoProps) {
  return (
    <Pressable
      onPress={onPress}
      className="rounded-lg bg-rosa-5 flex-row items-center gap-1 h-12 w-40 justify-center"
    >
      <Image
        source={require("@/assets/images/content_copy.png")}
        alt="content_copy"
        className="w-6 h-6"
      />
      <Text className="text-sm font-PoppinsMedium text-rosa-4">
        Copiar código
      </Text>
    </Pressable>
  );
}
