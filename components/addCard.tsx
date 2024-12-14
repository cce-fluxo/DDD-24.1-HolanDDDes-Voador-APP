import { TouchableOpacity, View } from "react-native";
import Svg, { Path } from "react-native-svg";

interface AddCardProps {
    onDelete: () => void;
}
export default function AddCard({ onDelete }: AddCardProps) {
    return (
        <TouchableOpacity onPress={onDelete} className="bg-white rounded-xl flex items-center justify-center p-3 w-[130px] h-[100px] shadow-md" style={{ marginHorizontal: 6, marginVertical:10}}>
            <Svg width="41" height="41" viewBox="0 0 41 41" fill="none">
                <Path d="M40.5 20.5C40.5 21.1365 40.2471 21.747 39.7971 22.1971C39.347 22.6471 38.7365 22.9 38.1 22.9H22.9V38.1C22.9 38.7365 22.6471 39.347 22.1971 39.7971C21.747 40.2471 21.1365 40.5 20.5 40.5C19.8635 40.5 19.253 40.2471 18.8029 39.7971C18.3529 39.347 18.1 38.7365 18.1 38.1V22.9H2.9C2.26348 22.9 1.65303 22.6471 1.20294 22.1971C0.752856 21.747 0.5 21.1365 0.5 20.5C0.5 19.8635 0.752856 19.253 1.20294 18.8029C1.65303 18.3529 2.26348 18.1 2.9 18.1H18.1V2.9C18.1 2.26348 18.3529 1.65303 18.8029 1.20294C19.253 0.752856 19.8635 0.5 20.5 0.5C21.1365 0.5 21.747 0.752856 22.1971 1.20294C22.6471 1.65303 22.9 2.26348 22.9 2.9V18.1H38.1C38.7365 18.1 39.347 18.3529 39.7971 18.8029C40.2471 19.253 40.5 19.8635 40.5 20.5Z" fill="#DC143B"/>
            </Svg>
        </TouchableOpacity>
    );
}
