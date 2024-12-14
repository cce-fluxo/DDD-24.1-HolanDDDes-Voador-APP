import Button from "@/components/botao";
import Header from "@/components/header";
import { useRouter } from "expo-router";
import { View, Text, TextInput, KeyboardAvoidingView, Platform } from "react-native";
import { Image } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";

interface InputProps{
    placeholder: string;
}
const Input = ( { placeholder }: InputProps) => {
    return (
        <TextInput placeholder={placeholder} className="border rounded-xl py-5 pl-[21px]"></TextInput>
    )
}


export default function Conta(){
    const router = useRouter();

    return(
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <Header titulo="Perfil"/>
            <ScrollView
                style={{ flex: 1, backgroundColor: "white" }}
                contentContainerStyle={{
                    alignItems: "center", 
                    gap: 45, 
                    paddingTop: 10, 
                    paddingBottom: 30,
                }}>
                <View className="flex-row gap-6 justify-center">
                    <Image  source={require('./../../assets/images/google.png')} width={89} height={89} className="rounded-full"/>
                    <Text className="self-center text-[#333333] font-medium text-xl">Nome do Usuário</Text>
                </View>

                <View className="flex gap-[22px] w-11/12">
                    <Text className="text-[#333333] font-medium text-base">Nome Legal</Text>
                    <Input placeholder="Nome"/>
                    <Input placeholder="Sobrenome"/>

                    <Text className="text-[#333333] font-medium text-base">Endereço de Email</Text>
                    <Input placeholder="Endereço de Email"/>

                    <Text className="text-[#333333] font-medium text-base">Senha</Text>
                    <Input placeholder="Digite sua senha anterior"/>
                    <Input placeholder="Digite sua nova senha"/>
                    <Input placeholder="Confirme sua nova senha"/>

                    <Text className="text-[#333333] font-medium text-base">Telefone para contato</Text>
                    <Input placeholder="Número de telefone"/>

                    <Text className="text-[#333333] font-medium text-base">Endereço</Text>
                    <Input placeholder="País/região"/>
                    <Input placeholder="Endereço postal"/>
                    <Input placeholder="Complemento (opicional)"/>
                    <Input placeholder="Cidade"/>
                    <Input placeholder="Estado"/>
                    <Input placeholder="CEP"/>
                </View>

                <View className="gap-[16px]">
                    <Button
                    text={"Editar"} // Alteração dinâmica do texto
                    colorBotao="bg-rosa-4"
                    colorTexto="text-branco-total"
                    onPress={() => router.push("/(perfil)/conta")}
                    fonteTexto="font-PoppinsSemiBold"
                    />

                    <Button
                    text={"Cancelar"} // Alteração dinâmica do texto
                    colorBotao="border-[#DC143B] border-[1px]"
                    colorTexto="text-[#DC143B]"
                    onPress={() => router.push("/(perfil)/meus-dados")}
                    fonteTexto="font-PoppinsSemiBold"
                    />
                </View>
               
            </ScrollView>
        </KeyboardAvoidingView>
        
        
    );
}