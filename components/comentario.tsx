import { View, Text, Image, Button, TouchableOpacity, TouchableWithoutFeedback, KeyboardAvoidingView, Platform } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import EditarComentario from "./editarComentario";
import SalvarComentario from "./salvarComentario";
import { useState } from "react";

interface ComentarioProps {
    estilo?: "novo" | "padrão" | "editar"
}

export default function Comentario({ estilo = "novo" }: ComentarioProps) {

    const [tipo, setTipo] = useState(estilo)

    function onEdit() {
        setTipo("editar")
        console.log("editando comentario")
    }

    function onClose() {
        setTipo("padrão")

    }

    function onDelete() {
        setTipo("novo")
        console.log("excluindo comentario")
    }

    function onSave() {
        setTipo("padrão")
    }

    return (
        <View className="flex gap-3">
            <View className="flex-row justify-between">
                <View className="flex-row items-center gap-2">
                    <Image source={require('../assets/images/mastercard.png')} width={15} height={9} />
                    <Text>Nome do usuairo</Text>
                </View >
                {tipo == "novo" ? null : tipo == "padrão"? <EditarComentario onEdit={onEdit} onDelete={onDelete}/> : <SalvarComentario onClose={onClose} onSave={onSave}/>}
            </View>

            {tipo == "novo"? <TextInput placeholder="Deixe sua experiência"></TextInput> : tipo == "padrão"? <Text>Comentario</Text> : <TextInput placeholder="Deixe seu novo comentário"></TextInput>}
        </View>
    )
}