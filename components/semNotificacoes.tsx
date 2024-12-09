import React from "react";
import { View, Text, Image } from "react-native";
import Svg, { Path } from "react-native-svg";
import Button from "./botao";
import { useRouter } from "expo-router";

const SemNotificacoes: React.FC = () => {
    const router = useRouter();

    // Define a função para voltar à rota anterior
    const rotaAnterior = () => {
        router.back();
    };

    return (
        <View className="flex-1 justify-center items-center bg-gray-100">
        
            {/* Ícone das notificações */}
            <Svg width="166" height="173" viewBox="0 0 166 173" fill="none">
                <Path d="M22.3317 142.337V125.67H38.9984V67.3366C38.9984 62.7533 39.59 58.2394 40.7734 53.7949C41.9567 49.3505 43.7261 45.1144 46.0817 41.0866L72.3317 67.3366H48.9984L0.665039 19.0033L12.3317 7.33659L165.665 160.67L153.998 172.337L123.582 142.337H22.3317ZM138.998 110.253L57.3317 28.5866C60.1095 26.3644 63.0956 24.4199 66.29 22.7533C69.4845 21.0866 72.8873 19.8366 76.4984 19.0033V0.669922H101.498V19.0033C112.609 21.781 121.637 27.6505 128.582 36.6116C135.526 45.5727 138.998 55.8144 138.998 67.3366V110.253ZM88.9984 167.337C84.415 167.337 80.4928 165.706 77.2317 162.445C73.9706 159.184 72.3373 155.259 72.3317 150.67H105.665C105.665 155.253 104.034 159.178 100.773 162.445C97.5123 165.712 93.5873 167.342 88.9984 167.337Z" fill="#DC143B"/>
            </Svg>


            {/* Texto explicativo sobre a falta de notificações */}
            <Text className="text-lg font-PoppinsMedium text-preto mt-12">
                Não há nada por aqui
            </Text>

            <View className="mt-32">
                <Button
                text={"Voltar"}
                colorBotao="bg-rosa-4"
                colorTexto="text-branco-total"
                onPress={() => rotaAnterior()}
                fonteTexto="font-PoppinsSemiBold"
                />
            </View>
       
        </View>
  );
};

export default SemNotificacoes;
