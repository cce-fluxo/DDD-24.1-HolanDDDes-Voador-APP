import React, { useState } from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";

const HeartButton = () => {
  // Estado para controlar se o botão foi pressionado
  const [isPressed, setIsPressed] = useState(false);

  // Alterna o estado de pressionado
  const handlePress = () => {
    setIsPressed(!isPressed);
  };

  return (
    <View>
      <TouchableOpacity onPress={handlePress}>
        <View className=" flex-row justify-center h-14 w-14 items-center rounded-full bg-zinc-800 m-2">
        <Image className=" h-8 w-8"
            source={
              isPressed
                ? require("../assets/images/coracao_vazio.png") // Imagem do coração cheio
                : require("../assets/images/coracao_cheio.png") // Imagem do coração vazio
              }
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default HeartButton;