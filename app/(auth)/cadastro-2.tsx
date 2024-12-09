import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import { Svg, Defs, LinearGradient, Image, Stop, Path } from 'react-native-svg';
import * as Yup from "yup";
import { Formik } from "formik";
import { Dimensions } from 'react-native';
import Button from '@/components/botao';
import { ScrollView } from 'react-native-gesture-handler';
import { router } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { width } = Dimensions.get('window');

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .transform((value) => (value ? value.toLowerCase() : value)) 
    .email("Email invalido")
    .required("Campo obrigatorio"),
  telefone: Yup.string().required("Campo obrigatorio").matches(
    /^\d{2}\s\d{4,5}-\d{4}$/,
    "Telefone inválido. Use o formato XX XXXXX-XXXX ou XX XXXX-XXXX.")
});

const Cadastro2: React.FC = () => {
  const [loading, setLoading] = useState(false); // Estado para controlar o carregamento

  // Função para salvar os dados no AsyncStorage
  const saveData = async (values: { email: string; telefone: string; }) => {
    setLoading(true);

    try {
      console.log('Valores enviados:', values);

      const formData = {
        email: values.email,
        telefone: values.telefone
      };

      await AsyncStorage.setItem('@userEmail', values.email);
      await AsyncStorage.setItem('@userTelefone', values.telefone);
      console.log('Dados salvos com sucesso:', formData);

      // Redireciona para a próxima página
      router.push('/(auth)/cadastro-3');
    } catch (error) {
      console.error('Erro ao salvar dados:', error);
    } finally {
      setLoading(false);
    }
  };


  return (
  <KeyboardAvoidingView
    style={{ flex: 1 }}
    behavior={Platform.OS === 'ios' ? 'padding' : undefined}
  >
  <ScrollView contentContainerStyle={{ flexGrow: 1 }}>

    <View className="flex">
      {/* Degradê no topo com corte ondulado */}
      <View className="relative w-auto">
        <Svg
          width={width}
          height={width}
          viewBox="0 0 430 307"
          fill="none"
        >
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

        <View style={{ position: 'relative', width: '100%', alignItems: 'center'}}>
            {/* Imagem dentro do SVG */}
            <Image
              href={require('./../../assets/images/cadastroDOIS.png')}
              width={width*0.7}
              height={width*0.8}
              x={(width*0.2)}
              y={40}
            />
          </View>


        </Svg>
      </View>

      {/* Componentes de baixo */}
  <View className="ml-10 mr-10 justify-center items-center text-center">
    {/* Botão "Cadastrar-se" */}
    <Text className="font-PoppinsSemiBold text-preto text-4xl mb-2 text-center justify-center items-center">Crie a sua conta</Text>
      
    <View className="px-6 py-4 w-full">
  
    <Formik
      initialValues={{ email: '', telefone: ''}}
      onSubmit={(values) => {
        saveData(values)
      }}
      validationSchema={validationSchema}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
        <>
          {/* Campo Email */}
          <View style={styles.inputWrapper}>
            <Svg width="20" height="16" viewBox="0 0 20 16" fill="none">
              <Path d="M18 0H2C0.9 0 0.00999999 0.9 0.00999999 2L0 14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM17.6 4.25L10.53 8.67C10.21 8.87 9.79 8.87 9.47 8.67L2.4 4.25C2.29973 4.19371 2.21192 4.11766 2.14189 4.02645C2.07186 3.93525 2.02106 3.83078 1.99258 3.71937C1.96409 3.60796 1.9585 3.49194 1.97616 3.37831C1.99381 3.26468 2.03434 3.15581 2.09528 3.0583C2.15623 2.96079 2.23632 2.87666 2.33073 2.811C2.42513 2.74533 2.53187 2.69951 2.6445 2.6763C2.75712 2.65309 2.87328 2.65297 2.98595 2.67595C3.09863 2.69893 3.20546 2.74453 3.3 2.81L10 7L16.7 2.81C16.7945 2.74453 16.9014 2.69893 17.014 2.67595C17.1267 2.65297 17.2429 2.65309 17.3555 2.6763C17.4681 2.69951 17.5749 2.74533 17.6693 2.811C17.7637 2.87666 17.8438 2.96079 17.9047 3.0583C17.9657 3.15581 18.0062 3.26468 18.0238 3.37831C18.0415 3.49194 18.0359 3.60796 18.0074 3.71937C17.9789 3.83078 17.9281 3.93525 17.8581 4.02645C17.7881 4.11766 17.7003 4.19371 17.6 4.25Z" fill="#372F30"/>
            </Svg>

            <TextInput
              placeholder="Email"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              style={styles.textInput}
            />
          </View>
          {touched.email && errors.email && (
            <Text style={styles.error}>{errors.email}</Text>
          )}

          {/* Campo telefone */}
          <View style={styles.inputWrapper}>
            <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <Path d="M20.01 15.38C18.78 15.38 17.59 15.18 16.48 14.82C16.13 14.7 15.74 14.79 15.47 15.06L13.9 17.03C11.07 15.68 8.42 13.13 7.01 10.2L8.96 8.54C9.23 8.26 9.31 7.87 9.2 7.52C8.83 6.41 8.64 5.22 8.64 3.99C8.64 3.45 8.19 3 7.65 3H4.19C3.65 3 3 3.24 3 3.99C3 13.28 10.73 21 20.01 21C20.72 21 21 20.37 21 19.82V16.37C21 15.83 20.55 15.38 20.01 15.38Z" fill="#372F30"/>
            </Svg>

            <TextInput
              placeholder="Número de telefone"
              onChangeText={handleChange('telefone')}
              onBlur={handleBlur('telefone')}
              value={values.telefone}
              style={styles.textInput}
            />
          </View>
          {touched.telefone && errors.telefone && (
            <Text style={styles.error}>{errors.telefone}</Text>
          )}

          {/* Botão */}
          <View className="justify-center items-center flex" 
              style={styles.botao}>
            <Button
              text={loading ? "Enviando..." : "Continuar"} // Alteração dinâmica do texto
              colorBotao="bg-rosa-4"
              colorTexto="text-branco-total"
              onPress={() => handleSubmit()}
              fonteTexto="font-PoppinsSemiBold"
            />
          </View>
        </>
      )}
    </Formik>
  </View>


    </View>

  </View>
  </ScrollView>
  </KeyboardAvoidingView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    width: width*0.8,
    borderColor: '#372F30',
    borderRadius: 20,
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  textInput: {
    flex: 1,
    paddingLeft: 10,
    fontSize: 16,
    color: '#372F30',
  },
  error: {
    color: '#DC143B',
    marginBottom: 10,
  },
  botao: {
    marginTop: 30,
  }
});

export default Cadastro2;
