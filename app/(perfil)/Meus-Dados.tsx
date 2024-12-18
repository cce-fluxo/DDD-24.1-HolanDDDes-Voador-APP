import Button from "@/components/botao";
import BotaoAvaliacao from "@/components/botaoPerfil";
import Header from "@/components/header";
import TabBar from "@/components/tabBar";
import { useRouter } from "expo-router";
import { View, Text } from "react-native";
import { Image } from 'react-native';

interface DadoProps{
    titulo: string;
    dado: string;
}
const Dado = ( {titulo, dado }: DadoProps) => {
    return (
        <View className="flex gap-[22px] w-full">
            <View className="flex gap-1">
                <Text className="text-[#333333] text-base font-normal">{titulo}</Text>
                <Text className="text-[#574A4D] text-sm font-medium">{dado}</Text>
            </View>
            <View className="bg-[#574A4D] w-full h-[1px]"/>
        </View>
    )
}
export default function Conta(){
    const router = useRouter();

    return(
        <View className="h-screen">
            <Header titulo="Perfil"/>
            <View className="bg-white w-screen flex content-center items-center gap-[45px] pt-10">
                <View className="flex-row gap-6 justify-center">
                    <Image  source={require('./../../assets/images/google.png')} width={89} height={89} className="rounded-full"/>
                    <Text className="self-center text-[#333333] font-medium text-xl">Nome do Usuário</Text>
                </View>

                <View className="flex gap-[22px] w-11/12">
                    <Dado titulo="Nome" dado="Nome"/>
                    <Dado titulo="Email" dado="email@gmail.com"/>
                    <Dado titulo="Senhas" dado="teste"/>
                    <Dado titulo="Telefone" dado="teste"/>
                    <Dado titulo="Endereço" dado="teste"/>
                </View>

                <Button
                text={"Editar"} // Alteração dinâmica do texto
                colorBotao="bg-rosa-4"
                colorTexto="text-branco-total"
                onPress={() => router.push("/(perfil)/editar-dados")}
                fonteTexto="font-PoppinsSemiBold"
                />
                
            </View>
            <TabBar></TabBar>
        </View>
        
    );
}