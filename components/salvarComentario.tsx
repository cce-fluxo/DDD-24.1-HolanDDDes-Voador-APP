import { TouchableWithoutFeedback, View, Image, Text } from "react-native"

interface SalvarComentarioProps {
    onSave?: () => void;
    onClose?: () => void;
}

export default function SalvarComentario({ onSave = () => {console.log("salvar comentario")}, onClose = () => {console.log("cancelar edição de comentario")} }: SalvarComentarioProps) {
    return (
        <View className="flex-row gap-5">
            <TouchableWithoutFeedback onPress={onSave}>
                <Text className="text-[#F45065] font-normal text-xs">Salvar</Text>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={onClose}>
                <Text className="text-[#F45065] font-normal text-xs">Cancelar</Text>
            </TouchableWithoutFeedback>
        </View>
    )
}