import React, { useEffect, useState } from "react";
import { View, Text,Image, ImageBackground, ScrollView, TouchableOpacity } from "react-native";


export default function Home() {
  return (
    <ScrollView >
      <View className=" flex-col h-screen w-screen items-center">
        <View className=" flex-row w-full h-[15%] justify-center items-center gap-3">
          <Image
          source={require("../../assets/images/logo.png")}
          className="h-14 w-14"
          resizeMode="contain"
          />

          <Text className=" font-medium text-2xl">
            BonVoyage
          </Text>
          
        </View>

        <View className=" flex-row w-full h-20 justify-center">

          <View className=" p-3 flex-row w-5/6 h-16 border rounded-3xl items-center justify-between">

            <View className=" flex-row gap-3">
              <Image
              source={require("../../assets/images/lupa.png")}
              className="h-8 w-8"
              resizeMode="contain"
              />

              <View className="h-ful flex-col">
                <Text >
                  Qualquer lugar
                </Text>
                <Text className=" text-gray-500">
                  Qualquer semana - Hóspedes?
                </Text>
              </View>
            </View>

            <TouchableOpacity>
              <Image
              source={require("../../assets/images/filtro.png")}
              className="h-4 w-4"
              resizeMode="contain"
              />
            </TouchableOpacity>
          </View>

        </View>

        <View className=" flex-row w-5/6 h-[20%] mt-5 justify-around">

          <TouchableOpacity>
            <Text className=" font-semibold text-2xl">
              Datas
            </Text>

            <Text>
              
            </Text>
          </TouchableOpacity>

          <View>
            
          </View>

          <TouchableOpacity>
            <Text>

            </Text>

            <Text>
              
            </Text>
          </TouchableOpacity>
        </View>

      </View>
    </ScrollView>
  );
}
