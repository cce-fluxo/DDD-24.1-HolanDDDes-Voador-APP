import { TouchableWithoutFeedback, View, Image } from "react-native"

interface EditarComentarioProps {
    onEdit?: () => void;
    onDelete?: () => void;
}

export default function EditarComentario({ onEdit = () => {console.log("editar comentario")}, onDelete = () => {console.log("excluir comentario")} }: EditarComentarioProps) {
    return (
        <View className="flex-row gap-5">
            <TouchableWithoutFeedback onPress={onEdit}>
                    <Image source={require('../assets/images/lapis.png')} width={15} height={9} />     
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={onDelete}>
                <Image source={require('../assets/images/lixeira.png')} width={15} height={9} />    
            </TouchableWithoutFeedback>
        </View>
    )
}