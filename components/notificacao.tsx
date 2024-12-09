import React from "react";
import { View, Text } from "react-native";
import Svg, { Path } from "react-native-svg";

interface NotificationProps {
  title: string;
  details: string;
  isRead: boolean;
}

const Notification: React.FC<NotificationProps> = ({ title, details, isRead }) => {
  return (
    <View
      className={`flex-row items-start gap-2 px-4 py-6 border-b border-gray-200 ${
        isRead ? "bg-white" : "bg-branco-2"
      }`}
    >
      {/* Ícone de notificação */}
      <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <Path
          d="M8.81395 17.1788C8.81395 18.056 9.52371 18.7658 10.4009 18.7658C11.2782 18.7658 11.9879 18.056 11.9879 17.1788H8.81395ZM10.4009 5.20864C12.602 5.20864 14.3883 6.995 14.3883 9.19603V14.7784H6.41354V9.19603C6.41354 6.995 8.19989 5.20864 10.4009 5.20864ZM10.4009 1.62C9.73903 1.62 9.20472 2.15431 9.20472 2.81621V3.74926C6.70064 4.29155 4.81859 6.52448 4.81859 9.19603V13.9809L3.22363 15.5759V16.3733H17.5782V15.5759L15.9833 13.9809V9.19603C15.9833 6.52448 14.1012 4.29155 11.5971 3.74926V2.81621C11.5971 2.15431 11.0628 1.62 10.4009 1.62ZM9.60345 6.8036H11.1984V9.99351H9.60345V6.8036ZM9.60345 11.5885H11.1984V13.1834H9.60345V11.5885Z"
          fill="#DC143B"
        />
      </Svg>

      {/* Texto da notificação */}
      <View>
        <Text className="text-sm font-medium">{title}</Text>
        <Text className="text-xs text-gray-500">{details}</Text>
      </View>
    </View>
  );
};

export default Notification;
