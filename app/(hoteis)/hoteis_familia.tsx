import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import Notification from "@/components/notificacao";
import SemNotificacoes from "@/components/semNotificacoes"; 
import { useAuth } from "@/context/authContext";
import api from "@/services/axios";
import Svg, { Path } from "react-native-svg";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import CardHotel from "@/components/cardHotel";


const HoteisFamilia = () => {
    return (
        <ScrollView>
            <View className=" mt-5 flex-col items-center gap-10 ">
                <CardHotel nome="Vasco" lugar="Rio de Janeiro" preco={750} nota="2,0" comodidades={[1,1,1,1,1]} />
                <CardHotel nome="Palace" lugar="Sao Paulo" preco={200} nota="1,8" comodidades={[1,0,0,0,1]}/>
                <CardHotel nome="Bom Sono" lugar="Rio de Janeiro" preco={500} nota="3,4" comodidades={[1,1,1,1,1]} />
            </View>
        </ScrollView>
    )
}

export default HoteisFamilia;