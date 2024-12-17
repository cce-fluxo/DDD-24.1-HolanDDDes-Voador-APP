import React, { useEffect, useState } from "react";
import { View, Text,Image, ImageBackground, ScrollView, TouchableOpacity } from "react-native";
import HeartButton from "./HeartButton";


interface CardHotelProps{
    nome: string
    lugar: string
    preco: number
    nota: string
    foto?: string
    comodidades: [number,number,number,number,number]
}





export default function CardHotel({nome="", lugar="", preco=0, nota="4,5", foto="", comodidades=[0,0,0,0,0]}:CardHotelProps) {
    
    const handleComodidades1 = () => {
        if(comodidades[0]==1){
            return(
                <View className=" flex-row gap-1">
                    <Image
                    source={require("../assets/images/beach.png")}
                    className="h-5 w-5"
                    resizeMode="contain"
                    />

                    <Text>
                        Praia
                    </Text>
                </View>
            )
        }
        };

    const handleComodidades2 = () => {
        if(comodidades[1]==1){
            return(
                <View className=" flex-row gap-1">
                    <Image
                    source={require("../assets/images/piscina.png")}
                    className="h-5 w-5"
                    resizeMode="contain"
                    />

                    <Text>
                        Piscina
                    </Text>
                </View>
            )
        }
    };

    const handleComodidades3 = () => {
        if(comodidades[2]==1){
            return(
                <View className=" flex-row gap-1">
                    <Image
                    source={require("../assets/images/coffee.png")}
                    className="h-5 w-5"
                    resizeMode="contain"
                    />

                    <Text>
                        Café da manhã
                    </Text>
                </View>
            )
        }
    };

    const handleComodidades4 = () => {
        if(comodidades[3]==1){
            return(
                <View className=" flex-row gap-1">
                    <Image
                    source={require("../assets/images/spa.png")}
                    className="h-5 w-5"
                    resizeMode="contain"
                    />

                    <Text>
                        SPA
                    </Text>
                </View>
            )
        }
    };

    const handleComodidades5 = () => {
        if(comodidades[4]==1){
            return(
                <View className=" flex-row gap-1">
                    <Image
                    source={require("../assets/images/passeio.png")}
                    className="h-5 w-5"
                    resizeMode="contain"
                    />

                    <Text>
                        Passeio
                    </Text>
                </View>
            )
        }
    };

    const handleNota = () => {
        const nota_ = parseFloat(nota)
        if(nota_ < 4 && nota_ >2){
            return(
                <View className=" mr-2 bg-yellow-400" style={{ flex: 0, height: 40, width: 48, borderRadius: 50, margin: 3, justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ color: "white", textAlign: "center" }}>{nota}</Text>
                </View>
            )
        }

        if(nota_ >= 4){
            return(
                <View className=" mr-2" style={{ flex: 0, height: 40, width: 48, backgroundColor: "green", borderRadius: 50, margin: 3, justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ color: "white", textAlign: "center" }}>{nota}</Text>
                </View>
            )
        }

        if(nota_ <= 2){
            return(
                <View className= "mr-2 bg-red-500" style={{ flex: 0, height: 40, width: 48, borderRadius: 50, margin: 3, justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ color: "white", textAlign: "center" }}>{nota}</Text>
                </View>
            )
        }
        
    };


  return (
    
    <View className="flex-row w-5/6 h-[400px] rounded-3xl overflow-hidden bg-white shadow-lg" >
            <ImageBackground
                source={require("../assets/images/slider_hotel.png")} 
                style={{ flex: 1, justifyContent: "center" }} 
            >
            <View style={{ flex: 1, justifyContent: "space-between" }}> 
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                <View>
                    <HeartButton />
                </View>

                    {handleNota()}

                </View>
            </View>
            </ImageBackground>

        <View className=" relative flex-col h-full w-[50%] p-4 ">
            <Text className=" font-bold text-2xl">
                {nome}
            </Text>

            <View className=" flex-col gap-[20%]">

                <View className=" flex-row">
                    <Image
                    source={require("../assets/images/localizacao.png")}
                    className="h-5 w-5"
                    resizeMode="contain"
                    />
                    <Text>
                        {lugar}
                    </Text>
                </View>

                <View className=" flex-col gap-2">
                    {handleComodidades1()}
                    {handleComodidades2()}
                    {handleComodidades3()}
                    {handleComodidades4()}
                    {handleComodidades5()}
                </View>

            </View>

            <View className=" h-[30%] w-full absolute bottom-5 left-3">
                <View className=" h-[25%]"> 
                    <Text className=" text-lg">
                        Preço da diária
                    </Text>
                </View>
                
                <View className=" h-[80%] w-[70%] absolute right-0 bottom-0">
                    <Text className=" text-sm text-gray-500">
                        A partir de :
                    </Text>
                    <Text className=" text-3xl text-green-600 font-bold">
                        R$ {preco}
                    </Text>
                    <Text className=" text-xs text-gray-500">
                        Inclui impostos e taxas
                    </Text>
                </View>
            </View>
            
        </View>

    </View>
  );
} 