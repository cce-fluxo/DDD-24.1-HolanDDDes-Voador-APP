import Avaliacao from "@/components/avaliacaoCard";
import Header from "@/components/header";
import { ScrollView, View } from "react-native";

export default function Avaliacoes() {
  return (
    <View className="bg-orange-50 w-screen h-screen">
      <Header titulo="Avaliações" className="w-full" />
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{
          alignItems: "center",
          gap: 24,
          paddingTop: 10,
          paddingBottom: 30,
        }}
      >
        <Avaliacao hotel="Hotel Aquamarine" endereco="Arraial do cabo" />
        <Avaliacao hotel="Hotel Aquamarine" endereco="Arraial do cabo" />
        <Avaliacao hotel="Hotel Aquamarine" endereco="Arraial do cabo" />
        <Avaliacao hotel="Hotel Aquamarine" endereco="Arraial do cabo" />
        <Avaliacao hotel="Hotel Aquamarine" endereco="Arraial do cabo" />
        <Avaliacao hotel="Hotel Aquamarine" endereco="Arraial do cabo" />
        <Avaliacao hotel="Hotel Aquamarine" endereco="Arraial do cabo" />
        <Avaliacao hotel="Hotel Aquamarine" endereco="Arraial do cabo" />
      </ScrollView>
    </View>
  );
}
