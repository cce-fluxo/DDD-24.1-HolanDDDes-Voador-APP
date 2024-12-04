import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { Svg, Defs, LinearGradient, Image, Stop, Path } from 'react-native-svg';
import * as Yup from "yup";
import { Formik } from "formik";
import { Dimensions } from 'react-native';
import Button from '@/components/botao';

const { width } = Dimensions.get('window');

const validationSchema = Yup.object().shape({
  senha: Yup.string().required("Campo obrigatorio"),
  confirmarSenha: Yup.string()
    .required("Campo obrigatorio")
    .oneOf([Yup.ref("senha")], "As senhas devem ser iguais"),
});

const Redefinir3: React.FC = () => {
  const [senhaVisible, setSenhaVisible] = useState(false);
  const [confirmarSenhaVisible, setConfirmarSenhaVisible] = useState(false);
  
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
              href={require('./../../assets/images/esqueciTRES.png')}
              width={width*0.7}
              height={width*0.8}
              x={(width*0.2)}
              y={40}
            />
          </View>


        </Svg>
      </View>

      {/* Componentes de baixo */}
    <View className="ml-10 mr-10 justify-center">
    
    <Text className="font-poppins font-semibold text-preto text-4xl mb-2 justify-center items-center ml-8">Nova Senha</Text>
      
    <View className="px-6 py-4 w-full justify-center items-center">
  
    <Formik
      initialValues={{ senha: '', confirmarSenha: ''}}
      onSubmit={(values) => {
        console.log(values);
      }}
      validationSchema={validationSchema}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
        <>
          {/* Campo senha */}
          <View style={styles.inputWrapper}>
            <Svg width="24" height="25" viewBox="0 0 24 25" fill="none">
              <Path d="M21 10.5H12.65C11.83 8.17 9.61 6.5 7 6.5C3.69 6.5 1 9.19 1 12.5C1 15.81 3.69 18.5 7 18.5C9.61 18.5 11.83 16.83 12.65 14.5H13L15 16.5L17 14.5L19 16.5L23 12.46L21 10.5ZM7 15.5C5.35 15.5 4 14.15 4 12.5C4 10.85 5.35 9.5 7 9.5C8.65 9.5 10 10.85 10 12.5C10 14.15 8.65 15.5 7 15.5Z" fill="#333333"/>
            </Svg>

            <TextInput
              placeholder="Senha"
              onChangeText={handleChange('senha')}
              onBlur={handleBlur('senha')}
              value={values.senha}
              style={styles.textInput}
              secureTextEntry={!senhaVisible}
            />

             <TouchableOpacity onPress={() => setSenhaVisible(!senhaVisible)} 
              style={styles.eyeIconWrapper}>
                
                   <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      {senhaVisible ? (
                        <Path d="M12 9.5C11.2044 9.5 10.4413 9.81607 9.87868 10.3787C9.31607 10.9413 9 11.7044 9 12.5C9 13.2956 9.31607 14.0587 9.87868 14.6213C10.4413 15.1839 11.2044 15.5 12 15.5C12.7956 15.5 13.5587 15.1839 14.1213 14.6213C14.6839 14.0587 15 13.2956 15 12.5C15 11.7044 14.6839 10.9413 14.1213 10.3787C13.5587 9.81607 12.7956 9.5 12 9.5ZM12 17.5C10.6739 17.5 9.40215 16.9732 8.46447 16.0355C7.52678 15.0979 7 13.8261 7 12.5C7 11.1739 7.52678 9.90215 8.46447 8.96447C9.40215 8.02678 10.6739 7.5 12 7.5C13.3261 7.5 14.5979 8.02678 15.5355 8.96447C16.4732 9.90215 17 11.1739 17 12.5C17 13.8261 16.4732 15.0979 15.5355 16.0355C14.5979 16.9732 13.3261 17.5 12 17.5ZM12 5C7 5 2.73 8.11 1 12.5C2.73 16.89 7 20 12 20C17 20 21.27 16.89 23 12.5C21.27 8.11 17 5 12 5Z" fill="#333333"/>
                      ) : (
                        
                        <Path d="M12.8145 5.68421L16.2727 8.67789V8.52632C16.2727 7.77254 15.9279 7.04964 15.3142 6.51664C14.7004 5.98365 13.868 5.68421 13 5.68421H12.8145ZM8.12364 6.44211L9.81455 7.91053C9.76 8.10947 9.72727 8.30842 9.72727 8.52632C9.72727 9.28009 10.0721 10.003 10.6858 10.536C11.2996 11.069 12.132 11.3684 13 11.3684C13.24 11.3684 13.48 11.34 13.7091 11.2926L15.4 12.7611C14.6691 13.0737 13.8618 13.2632 13 13.2632C11.5534 13.2632 10.166 12.7641 9.14305 11.8758C8.12013 10.9874 7.54545 9.7826 7.54545 8.52632C7.54545 7.77789 7.76364 7.07684 8.12364 6.44211ZM2.09091 1.20316L4.57818 3.36316L5.06909 3.78947C3.26909 5.02105 1.85091 6.63158 1 8.52632C2.88727 12.6853 7.54545 15.6316 13 15.6316C14.6909 15.6316 16.3055 15.3474 17.7782 14.8358L18.2473 15.2337L21.4327 18L22.8182 16.7968L3.47636 0M13 3.78947C14.4466 3.78947 15.834 4.28853 16.8569 5.17686C17.8799 6.06519 18.4545 7.27003 18.4545 8.52632C18.4545 9.13263 18.3127 9.72 18.0618 10.2505L21.2582 13.0263C22.8945 11.8421 24.2036 10.2884 25 8.52632C23.1127 4.36737 18.4545 1.42105 13 1.42105C11.4727 1.42105 10.0109 1.65789 8.63636 2.08421L11.0036 4.12105C11.6255 3.91263 12.2909 3.78947 13 3.78947Z"  fill="#333333"/>
                      )}
                    </Svg>
              </TouchableOpacity>

          </View>
          {touched.senha && errors.senha && (
            <Text style={styles.error}>{errors.senha}</Text>
          )}

          {/* Campo Confirmar senha */}
          <View style={styles.inputWrapper}>
            <Svg width="24" height="25" viewBox="0 0 24 25" fill="none">
              <Path d="M21 10.5H12.65C11.83 8.17 9.61 6.5 7 6.5C3.69 6.5 1 9.19 1 12.5C1 15.81 3.69 18.5 7 18.5C9.61 18.5 11.83 16.83 12.65 14.5H13L15 16.5L17 14.5L19 16.5L23 12.46L21 10.5ZM7 15.5C5.35 15.5 4 14.15 4 12.5C4 10.85 5.35 9.5 7 9.5C8.65 9.5 10 10.85 10 12.5C10 14.15 8.65 15.5 7 15.5Z" fill="#333333"/>
            </Svg>


            <TextInput
              placeholder="Confirmar Senha"
              onChangeText={handleChange('confirmarSenha')}
              onBlur={handleBlur('confirmarSenha')}
              value={values.confirmarSenha}
              style={styles.textInput}
              secureTextEntry={!confirmarSenhaVisible}
            />

             <TouchableOpacity onPress={() => setConfirmarSenhaVisible(!confirmarSenhaVisible)} 
              style={styles.eyeIconWrapper}>
                
                   <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      {confirmarSenhaVisible ? (
                        <Path d="M12 9.5C11.2044 9.5 10.4413 9.81607 9.87868 10.3787C9.31607 10.9413 9 11.7044 9 12.5C9 13.2956 9.31607 14.0587 9.87868 14.6213C10.4413 15.1839 11.2044 15.5 12 15.5C12.7956 15.5 13.5587 15.1839 14.1213 14.6213C14.6839 14.0587 15 13.2956 15 12.5C15 11.7044 14.6839 10.9413 14.1213 10.3787C13.5587 9.81607 12.7956 9.5 12 9.5ZM12 17.5C10.6739 17.5 9.40215 16.9732 8.46447 16.0355C7.52678 15.0979 7 13.8261 7 12.5C7 11.1739 7.52678 9.90215 8.46447 8.96447C9.40215 8.02678 10.6739 7.5 12 7.5C13.3261 7.5 14.5979 8.02678 15.5355 8.96447C16.4732 9.90215 17 11.1739 17 12.5C17 13.8261 16.4732 15.0979 15.5355 16.0355C14.5979 16.9732 13.3261 17.5 12 17.5ZM12 5C7 5 2.73 8.11 1 12.5C2.73 16.89 7 20 12 20C17 20 21.27 16.89 23 12.5C21.27 8.11 17 5 12 5Z" fill="#333333"/>
                      ) : (
                        
                        <Path d="M12.8145 5.68421L16.2727 8.67789V8.52632C16.2727 7.77254 15.9279 7.04964 15.3142 6.51664C14.7004 5.98365 13.868 5.68421 13 5.68421H12.8145ZM8.12364 6.44211L9.81455 7.91053C9.76 8.10947 9.72727 8.30842 9.72727 8.52632C9.72727 9.28009 10.0721 10.003 10.6858 10.536C11.2996 11.069 12.132 11.3684 13 11.3684C13.24 11.3684 13.48 11.34 13.7091 11.2926L15.4 12.7611C14.6691 13.0737 13.8618 13.2632 13 13.2632C11.5534 13.2632 10.166 12.7641 9.14305 11.8758C8.12013 10.9874 7.54545 9.7826 7.54545 8.52632C7.54545 7.77789 7.76364 7.07684 8.12364 6.44211ZM2.09091 1.20316L4.57818 3.36316L5.06909 3.78947C3.26909 5.02105 1.85091 6.63158 1 8.52632C2.88727 12.6853 7.54545 15.6316 13 15.6316C14.6909 15.6316 16.3055 15.3474 17.7782 14.8358L18.2473 15.2337L21.4327 18L22.8182 16.7968L3.47636 0M13 3.78947C14.4466 3.78947 15.834 4.28853 16.8569 5.17686C17.8799 6.06519 18.4545 7.27003 18.4545 8.52632C18.4545 9.13263 18.3127 9.72 18.0618 10.2505L21.2582 13.0263C22.8945 11.8421 24.2036 10.2884 25 8.52632C23.1127 4.36737 18.4545 1.42105 13 1.42105C11.4727 1.42105 10.0109 1.65789 8.63636 2.08421L11.0036 4.12105C11.6255 3.91263 12.2909 3.78947 13 3.78947Z"  fill="#333333"/>
                      )}
                    </Svg>
              </TouchableOpacity>
          </View>
          {touched.confirmarSenha && errors.confirmarSenha && (
            <Text style={styles.error}>{errors.confirmarSenha}</Text>
          )}

          {/* Botão */}
          <View className="justify-center items-center flex" 
              style={styles.botao}>
            <Button
              text="Continuar"
              colorBotao="bg-rosa-4"
              colorTexto="text-branco-total"
              onPress={handleSubmit}
              fonteTexto="font-poppins"
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
  },
  eyeIconWrapper: {
    position: 'absolute',
    right: 10,
    top: '50%',
    transform: [{ translateY: -12 }],
  },
});

export default Redefinir3;
