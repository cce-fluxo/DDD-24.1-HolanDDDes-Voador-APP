import { Text, Pressable, StyleSheet  } from "react-native";
import { Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

interface ButtonProps {
  text: string;
  colorBotao: string;
  colorTexto: string;
  onPress: () => void;
  fonteTexto?: string;
}

export default function Button({ text, colorBotao, colorTexto, onPress, fonteTexto }: ButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      className={`w-80 h-11 rounded-lg items-center text-center justify-center ${colorBotao}`}
      style={styles.button}
    >
      <Text className={`${fonteTexto} text-lg justify-center ${colorTexto}`}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
    button: {
      paddingVertical: 8,
      paddingHorizontal: 24,
      width: width*0.4,
      borderRadius: 10,
      fontWeight: "bold",
    },  
  });
