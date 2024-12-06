import { View, Text, Dimensions } from "react-native";
import { Image } from 'react-native-svg';

const { width } = Dimensions.get('window');

export default function Conta(){
    return(
        <View className="bg-black w-screen h-screen">
            <View className="bg-cyan-800 flex-row gap-6 w-auto h-auto">
                {/* <View className="">
                    <Image  href={require('./../../assets/images/google.png')} width={89} height={89} x={40} y={40}></Image>
                </View> */}
                <View className="w-[89px] h-[89px] bg-slate-600"></View>
                <Text className="bg-slate-300 self-center">Nome do Usuário</Text>
            </View>

            <View>
                <Text>teste</Text>
            </View>
        </View>
    );
}