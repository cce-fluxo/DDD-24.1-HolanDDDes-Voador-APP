import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import Notification from "@/components/notificacao";
import SemNotificacoes from "@/components/semNotificacoes"; 
import api from "@/services/axios";
import Svg, { Path } from "react-native-svg";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Header from "@/components/header";
import TabBar from "@/components/tabBar";

interface NotificationData {
  id: number;
  titulo: string;
  mensagem?: string;
  usuarioId: number;
  leitura: boolean;
  data_criacao?: Date;
}

const Notificacoes = () => {
    const [isCarregando, setIsCarregando] = useState(false);
    const [userID, setUserID] = useState<string | null>(null);
    const [notifications, setNotifications] = useState<NotificationData[]>([]);
    
    async function getNotifications(userID?: string): Promise<NotificationData[] | null> {
        if (userID) {
            try {
                const response = await api.get<NotificationData[]>(`notificacao/${userID}`);
                console.log("Resposta do request:", response.data);
                return response.data;
            } catch (error) {
                console.error("Erro ao buscar notificações:", error);
                throw error;
            }
        } else {
            return null;
        }
    }
    
    useEffect(() => {
        const fetchNotifications = async () => {
          setIsCarregando(true); // Inicia o carregamento
          try {
            const storedUserID = await AsyncStorage.getItem("@userID");
      
            // Verifica se o storedUserID não é null antes de usá-lo
            if (storedUserID !== null) {
              setUserID(storedUserID);
              console.log('UserID recuperado >>', storedUserID);
      
              const response = await getNotifications(storedUserID);
              setNotifications(response || []);
              console.log("Notificações recebidas:", response);
            } else {
              console.error("UserID não encontrado.");
            }
          } catch (error) {
            console.error("Erro ao carregar notificações:", error);
          } finally {
            setIsCarregando(false); // Finaliza o carregamento
          }
        };
      
        fetchNotifications();
    }, [userID]);
      
    const [buttonText, setButtonText] = useState("Marcar como lida");

    const handleMarkAsRead = () => {
        setNotifications((prevNotifications) =>
            prevNotifications.map((notification) => ({
            ...notification,
            leitura: !notification.leitura, // Alterna entre lida e não lida
        }))
      );

      // Alterna o texto do botão
      if (buttonText === "Marcar como lida") {
        setButtonText("Marcar como não lida");
      } else {
        setButtonText("Marcar como lida");
      }
    };
  
    return (
        <View className="flex-1 bg-white">
            <Header titulo="Notificações"/>
    

      {/* Conteúdo principal */}
      {isCarregando ? (
        <View className="flex-1 items-center justify-center">
            <Text className="text-gray-500">Carregando notificações...</Text>
        </View>
        ) : notifications.length === 0 ? (
        <SemNotificacoes />
        ) : (
        <>
            <ScrollView className="flex-1">
                {notifications.map((notification) => (
                    <Notification
                    key={notification.id}
                    title={notification.titulo}
                    details={notification.mensagem || ""}
                    isRead={notification.leitura}
                    />
                ))}

                <View className="px-4 py-3 justify-center items-center mt-8">
                    <TouchableOpacity
                        onPress={handleMarkAsRead}
                        className={`bg-rosa-4 rounded-xl px-6 py-2 w-64 h-11 flex-row items-center justify-center`}
                    >
                        <Svg width="18" height="17" viewBox="0 0 18 17" fill="none">
                            <Path d="M9.00016 0.386963C4.4956 0.386963 0.810059 4.07251 0.810059 8.57706C0.810059 13.0816 4.4956 16.7672 9.00016 16.7672C13.5047 16.7672 17.1903 13.0816 17.1903 8.57706C17.1903 4.07251 13.5047 0.386963 9.00016 0.386963ZM9.00016 15.1291C5.38832 15.1291 2.44808 12.1889 2.44808 8.57706C2.44808 4.96523 5.38832 2.02498 9.00016 2.02498C12.612 2.02498 15.5522 4.96523 15.5522 8.57706C15.5522 12.1889 12.612 15.1291 9.00016 15.1291ZM4.90511 11.0341H13.0952V12.6721H4.90511V11.0341ZM7.60784 7.92185L6.05172 6.36573L4.90511 7.51235L7.60784 10.2151L13.0952 4.72771L11.9486 3.5811L7.60784 7.92185Z" fill="white"/>
                        </Svg>
                        <Text className="ml-4 text-white font-medium">{buttonText}</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </>
        )}
        <TabBar></TabBar>
    </View>
  );
};

export default Notificacoes;