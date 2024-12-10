import ModalTornarseVip from "@/components/ModalTornarseVip";
import { useState } from "react";
import { View, Text, Pressable } from "react-native";

export default function ConfirmarPagamentoCredito() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <Text>ConfirmarPagamentoCredito</Text>
      <Pressable onPress={() => setModalVisible(true)}>
        <Text>Show Modal</Text>
      </Pressable>
      <ModalTornarseVip
        isVisible={modalVisible}
        aceitar={() => setModalVisible(!modalVisible)}
        onClose={() => setModalVisible(!modalVisible)}
      />
    </View>
  );
}
