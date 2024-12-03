import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Svg, Defs, LinearGradient, Image, Stop, Path } from 'react-native-svg';

interface GradienteProps {
  foto: string;
}

export default function GradienteOndulado({ foto }: GradienteProps) {
  return (
    <View>
      <Svg width="830" height="500" viewBox="0 0 430 307" fill="none">
        <Defs>
          <LinearGradient
            id="paint0_linear_1723_6757"
            x1="211.012"
            y1="-235.385"
            x2="273.339"
            y2="321.136"
            gradientUnits="userSpaceOnUse"
          >
            <Stop offset="0.262495" stopColor="#DC143B" />
            <Stop offset="1" stopColor="#FF6F45" />
          </LinearGradient>
        </Defs>
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M248.086 -233.758C322.88 -231.601 383.153 -187.712 438.322 -137.174C498.201 -82.3224 563.497 -24.5806 565.059 56.603C566.85 149.733 529.657 252.111 446.624 294.355C367.958 334.377 284.839 267.907 200.431 242.112C107.654 213.759 -12.8208 226.924 -56.851 140.492C-103.963 48.0101 -64.7793 -69.3255 0.785914 -149.794C58.6356 -220.793 156.533 -236.399 248.086 -233.758Z"
          fill="url(#paint0_linear_1723_6757)"
        />
        {/* Imagem dentro do SVG */}
        <Image
          href={{ uri: "./../assets/images/bonvoyage.png" }}
          x="70"
          y="120"
          width="60"
          height="60"
        />
      </Svg>
    </View>
  );
}
