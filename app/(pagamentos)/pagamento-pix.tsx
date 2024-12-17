import BotaoCopiarCodigo from "@/components/BotaoCopiarCodigo";
import Header from "@/components/header";
import { useState } from "react";
import { View, Text, Image, Modal, Pressable, StyleSheet } from "react-native";

const handlePress = () => {
  return;
};

export default function PagamentoPix() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View className="flex-1 bg-fundo">
      <Header titulo="Pagar com Pix" />
      <View className="flex items-center justify-center">
        <Pressable onPress={() => setModalVisible(!modalVisible)}>
          <Text className="text-3xl text-preto">Abrir modal</Text>
        </Pressable>
        <View className="flex items-center gap-2 mt-4">
          <Text className="font-PoppinsMedium text-sm">
            Escaneie o QR Code:
          </Text>
          <Image
            source={require("@/assets/images/sample-qr-code-icon.png")}
            className="w-48 h-48"
          />
        </View>
        <View className="flex items-center my-8 gap-4">
          <Text className="font-PoppinsMedium text-rosa-4 text-sm">
            Código válido por 1 dia
          </Text>
          <Text className="font-PoppinsRegular text-preto text-sm text-center">
            Não aceitamos depósitos de terceiros, ou seja, o valor depositado
            deve vir de uma conta com o seu CPF/CNPJ.
          </Text>
        </View>
        <BotaoCopiarCodigo onPress={handlePress} />
        <View className="flex gap-8 mt-8 mx-4">
          <View className="flex-row items-center gap-2">
            <View className="rounded-2xl bg-rosa-4 w-8 h-8">
              <Text className="font-PoppinsBold text-base flex-row text-center text-white m-auto">
                1
              </Text>
            </View>
            <Text className="font-PoppinsRegular text-base text-preto">
              Acesse o app ou site do seu banco
            </Text>
          </View>

          <View className="flex-row items-center gap-2">
            <View className="rounded-2xl bg-rosa-4 w-8 h-8">
              <Text className="font-PoppinsBold text-base flex-row text-center text-white m-auto">
                2
              </Text>
            </View>
            <Text className="font-PoppinsRegular text-base text-preto">
              Busque a opção de pagar com Pix
            </Text>
          </View>

          <View className="flex-row items-center gap-2">
            <View className="rounded-2xl bg-rosa-4 w-8 h-8">
              <Text className="font-PoppinsBold text-base flex-row text-center text-white m-auto">
                3
              </Text>
            </View>
            <Text className="font-PoppinsRegular text-base text-preto">
              Leia o QR Code ou código Pix
            </Text>
          </View>

          <View className="flex-row items-center gap-2">
            <View className="rounded-2xl bg-rosa-4 w-8 h-8">
              <Text className="font-PoppinsBold text-base flex-row text-center text-white m-auto">
                4
              </Text>
            </View>
            <Text className="font-PoppinsRegular text-base text-preto">
              Pronto! Você verá a confirmação do pagamento
            </Text>
          </View>
        </View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View className="flex-1 items-center justify-center">
            <View
              style={styles.modalStyles}
              className="w-4/5 bg-fundo rounded-3xl flex items-center justify-center gap-4 py-8"
            >
              <Image
                source={require("@/assets/images/model-confirmar.png")}
                className="w-[220px] h-[220px]"
                resizeMode="contain"
              />
              <Text className="font-PoppinsBold text-base text-preto">
                Parabéns!
              </Text>
              <Text className="font-PoppinsRegular text-preto text-base">
                Você acaba de se tornar um usuário vip. Comece a utilizar seus
                benefícios.
              </Text>

              <Pressable
                onPress={() => setModalVisible(!modalVisible)}
                className="bg-rosa-4 rounded-lg h-10 flex justify-center px-6"
              >
                <Text className="font-PoppinsMedium text-sm text-white text-center">
                  Prosseguir
                </Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  modalStyles: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
