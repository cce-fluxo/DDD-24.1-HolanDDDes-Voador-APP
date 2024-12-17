import { View, Text, Modal, Pressable, Image, TextInput } from "react-native";
import { useState } from "react";
import { router } from "expo-router";
import Svg, { Path } from "react-native-svg";
import Button from "@/components/botao";
import Header from "@/components/header";

export default function AdicionarCartao() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View className="bg-fundo w-screen h-screen flex items-center gap-6">
      <Pressable onPress={() => setModalVisible(!modalVisible)}>
        <Text className="text-3xl text-preto">Abrir modal</Text>
      </Pressable>
      <Header titulo="Salvar Cartão" className="w-full" />
      <View className="w-11/12 flex">
        <View className="flex gap-8">
          <Text className="text-preto text-base font-PoppinsMedium">
            Adicionar cartão
          </Text>

          <View className="flex w-full">
            <View className="w-full h-[69px] p-4 flex-row items-center gap-2 border border-[#CEC6C7] rounded-t-3xl">
              <View className="w-11/12">
                <View className="flex-row">
                  <Text className="w-[110px] font-medium text-sm">
                    Número do Cartão
                  </Text>
                  <Svg width="9" height="13" viewBox="0 0 9 13" fill="none">
                    <Path
                      d="M7.75033 4.60417H7.20866V3.52083C7.20866 2.02583 5.99533 0.8125 4.50033 0.8125C3.00533 0.8125 1.79199 2.02583 1.79199 3.52083V4.60417H1.25033C0.654492 4.60417 0.166992 5.09167 0.166992 5.6875V11.1042C0.166992 11.7 0.654492 12.1875 1.25033 12.1875H7.75033C8.34616 12.1875 8.83366 11.7 8.83366 11.1042V5.6875C8.83366 5.09167 8.34616 4.60417 7.75033 4.60417ZM2.87533 3.52083C2.87533 2.62167 3.60116 1.89583 4.50033 1.89583C5.39949 1.89583 6.12533 2.62167 6.12533 3.52083V4.60417H2.87533V3.52083ZM7.75033 11.1042H1.25033V5.6875H7.75033V11.1042ZM4.50033 9.47917C5.09616 9.47917 5.58366 8.99167 5.58366 8.39583C5.58366 7.8 5.09616 7.3125 4.50033 7.3125C3.90449 7.3125 3.41699 7.8 3.41699 8.39583C3.41699 8.99167 3.90449 9.47917 4.50033 9.47917Z"
                      fill="#333333"
                    />
                  </Svg>
                </View>
                <TextInput placeholder="0000 0000 0000 0000"></TextInput>
              </View>
              <Svg width="20" height="16" viewBox="0 0 20 16" fill="none">
                <Path
                  d="M18 0H2C0.89 0 0.00999999 0.89 0.00999999 2L0 14C0 15.11 0.89 16 2 16H18C19.11 16 20 15.11 20 14V2C20 0.89 19.11 0 18 0ZM18 14H2V8H18V14ZM18 4H2V2H18V4Z"
                  fill="#333333"
                />
              </Svg>
            </View>

            <View className="flex-row">
              <View className="fle px-4 py-2 border border-[#CEC6C7] rounded-bl-3xl w-1/2">
                <Text>Validade</Text>
                <TextInput placeholder="MM/AA"></TextInput>
              </View>
              <View className="fle px-4 py-2 border border-[#CEC6C7] rounded-br-3xl w-1/2">
                <Text>CVV</Text>
                <TextInput placeholder="123"></TextInput>
              </View>
            </View>
          </View>

          <View>
            <TextInput
              placeholder="Nome"
              className="border border-[#CEC6C7] rounded-t-3xl px-4"
            />
            <TextInput
              placeholder="Sobrenome"
              className="border border-[#CEC6C7] px-4"
            />
            <TextInput
              placeholder="CPF"
              className="border border-[#CEC6C7] rounded-b-3xl px-4"
            />
          </View>

          <View className="border border-[#CEC6C7] rounded-3xl px-4 py-2">
            <Text className="text-preto text-sm font-medium ">País/Região</Text>
            <TextInput placeholder="Brasil" />
          </View>

          {/* Botoes */}
          <View className="gap-[16px] w-full items-center">
            <Button
              text={"Salvar"}
              colorBotao="bg-rosa-4"
              colorTexto="text-branco-total"
              onPress={() => router.push("/(pagamentos)/cartoes")}
              fonteTexto="font-PoppinsSemiBold"
            />

            <Button
              text={"Cancelar"}
              colorBotao="border-[#DC143B] border-[1px]"
              colorTexto="text-[#DC143B]"
              onPress={() => router.back()}
              fonteTexto="font-PoppinsSemiBold"
            />
          </View>
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
          <View className="w-4/5 bg-slate-200 rounded-3xl flex items-center justify-center">
            <Image
              source={require("@/assets/images/modal-vip.png")}
              className="w-4/5"
              resizeMode="contain"
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
              Deseja garantir cupons de descontos especiais? Clique aqui e
              torne-se VIP
            </Text>

            <View className="flex flex-row w-4/5 gap-2">
              <Pressable
                onPress={() => setModalVisible(!modalVisible)}
                className="rounded-lg border border-rosa-4 h-10 flex justify-center"
              >
                <Text className="font-PoppinsMedium text-sm text-rosa-4 text-center">
                  Rejeitar
                </Text>
              </Pressable>

              <Pressable
                onPress={() => setModalVisible(!modalVisible)}
                className="bg-rosa-4 rounded-lg h-10 flex justify-center"
              >
                <Text className="font-PoppinsMedium text-sm text-white text-center">
                  Aceitar
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
