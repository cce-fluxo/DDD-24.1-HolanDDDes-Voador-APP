import BotaoAvaliacao from "@/components/botaoPerfil";
import Header from "@/components/header";
import { useRouter } from "expo-router";
import { View, Text } from "react-native";
import { Image } from 'react-native';

export default function Conta(){
    const router = useRouter();
    return(
        <View>
            <Header titulo="Perfil"/>
            <View className="bg-white w-screen h-screen flex content-center gap-[45px] pt-10">
            <View className="flex-row gap-6 justify-center">
                <Image  source={require('./../../assets/images/google.png')} width={89} height={89} className="rounded-full"/>
                <Text className="self-center text-[#333333] font-medium text-xl">Nome do Usuário</Text>
            </View>

            <View className="flex items-center gap-[22px]">
                <BotaoAvaliacao text="Meus dados" onPress={() => {router.push('/(perfil)/meus-dados')}}/>
                <BotaoAvaliacao text="Meus cupons" onPress={() => { router.push('/(perfil)/cupons') }}/>
                <BotaoAvaliacao text="Favoritos" onPress={() => { console.log("clicado")}}/>
                <BotaoAvaliacao text="Minhas Avaliações" onPress={() => { console.log("clicado")}}/>
                <BotaoAvaliacao text="Cartões Salvos" onPress={() => { router.push('/(perfil)/cartoes') }}/>
                <BotaoAvaliacao text="Perguntas Frequentes" onPress={() => {router.push('/(perfil)/FAQ')}}/>
            </View>
        </View>
        </View>
        
    );
}