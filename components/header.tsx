import { router } from "expo-router"
import { TouchableOpacity, View, Text } from "react-native"
import Svg, { Path } from "react-native-svg"

interface HeaderProps {
    titulo: string;
}

export default function Header( { titulo }: HeaderProps) {
    return (
        <View className="flex-row items-center px-4 py-3">
            <TouchableOpacity onPress={() => { router.back() }}>
                <Svg width="12" height="20" viewBox="0 0 12 20" fill="none">
                    <Path d="M11.835 1.8701L10.055 0.100098L0.165039 10.0001L10.065 19.9001L11.835 18.1301L3.70504 10.0001L11.835 1.8701Z" fill="#DC143B"/>
                </Svg>
            </TouchableOpacity>
            <Text className="text-lg font-bold ml-4">{ titulo }</Text>
        </View>
    )
}