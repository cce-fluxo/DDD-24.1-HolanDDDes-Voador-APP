import CardCartao from "@/components/cardCartao";
import { View, Text, ScrollView } from "react-native";
import { Svg, Path } from "react-native-svg";
import Header from "@/components/header";
import AddCard from "@/components/addCard";

interface TituloProps {
  titulo: string;
}
function Titulo({ titulo }: TituloProps) {
  return (
    <View className="flex-row gap-2 items-center">
      <Text className="text-preto text-base font-medium ">{titulo}</Text>
      <Svg width="20" height="16" viewBox="0 0 20 16" fill="none">
        <Path
          d="M18 0H2C0.89 0 0.00999999 0.89 0.00999999 2L0 14C0 15.11 0.89 16 2 16H18C19.11 16 20 15.11 20 14V2C20 0.89 19.11 0 18 0ZM18 14H2V8H18V14ZM18 4H2V2H18V4Z"
          fill="#333333"
        />
      </Svg>
    </View>
  );
}

export default function Cartoes() {
  return (
    <View className="bg-white w-screen h-screen items-center">
      <Header titulo="Cartões Salvos" className="w-full" />

      <View className="Flex gap-[16px] pt-6 w-11/12">
        <Titulo titulo="Cartões de crédito" />

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ gap: 10 }}
          className="bg-white"
        >
          <CardCartao
            tipo="Crédito"
            bandeira="Mastercard"
            numero="1234"
            onDelete={() => {
              console.log("Deletando cartao");
            }}
          />
          <CardCartao
            tipo="Crédito"
            bandeira="Mastercard"
            numero="1234"
            onDelete={() => {
              console.log("Deletando cartao");
            }}
          />

          <AddCard />
        </ScrollView>

        <Titulo titulo="Cartões de débito" />

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ gap: 10 }}
          className="bg-white"
        >
          <CardCartao
            tipo="Débito"
            bandeira="Mastercard"
            numero="1234"
            onDelete={() => {
              console.log("Deletando cartao");
            }}
          />
          <CardCartao
            tipo="Débito"
            bandeira="Mastercard"
            numero="1234"
            onDelete={() => {
              console.log("Deletando cartao");
            }}
          />

          <AddCard />
        </ScrollView>
      </View>
    </View>
  );
}
