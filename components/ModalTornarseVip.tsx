import { View, Text, Modal, Pressable, Image } from "react-native";

interface Props {
  isVisible: boolean;
  aceitar: () => void;
  onClose: () => void;
}

export default function ModalTornarseVip({
  isVisible,
  aceitar,
  onClose,
}: Props) {
  return (
    <Modal
      transparent={true}
      animationType="slide"
      onRequestClose={() => onClose}
    >
      <View className="">
        <Image
          source={require("@/assets/images/modal-vip.png")}
          height={22}
          width={22}
          alt="imagem modal"
        />
        <View className="">
          <Text className="font-PoppinsBold text-base text-preto">
            Preste muita atenção
          </Text>
          <Text className="font-PoppinsMedium text-sm text-preto">
            Últimos dias!
          </Text>
        </View>
        <Text className="font-PoppinsRegular text-preto text-base">
          Deseja garantir cupons de descontos especiais? Clique aqui e torne-se
          VIP
        </Text>
        <View className="flex flex-row w-4/5">
          <Pressable
            onPress={onClose}
            className="rounded-lg border border-rosa-4 h-10 flex justify-center"
          >
            <Text className="font-PoppinsMedium text-sm text-rosa-4 text-center">
              Rejeitar
            </Text>
          </Pressable>
          <Pressable
            onPress={aceitar}
            className="bg-rosa-4 rounded-lg h-10 flex justify-center"
          >
            <Text className="font-PoppinsMedium text-sm text-white text-center">
              Aceitar
            </Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}
