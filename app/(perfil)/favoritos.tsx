import Header from "@/components/header";
import { View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function Favoritos() {
    return (
        <View>
            <Header titulo="Favoritos" className="w-full"/>
            <ScrollView>
                <Text> teste </Text>
            </ScrollView>
        </View>
    )
}