import { View, Image } from "react-native";

export default function Estrelas() {
    return (
        <View className="flex-row gap-1">
            <Image  source={require('../assets/images/EstrelaVazia.png')} width={17} height={17}/>
            <Image  source={require('../assets/images/EstrelaVazia.png')} width={17} height={17}/>
            <Image  source={require('../assets/images/EstrelaVazia.png')} width={17} height={17}/>
            <Image  source={require('../assets/images/EstrelaVazia.png')} width={17} height={17}/>
            <Image  source={require('../assets/images/EstrelaVazia.png')} width={17} height={17}/>
        </View>
    )
}