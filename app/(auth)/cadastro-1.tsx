import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { Svg, Defs, LinearGradient, Image, Stop, Path } from 'react-native-svg';
import * as Yup from "yup";
import { Formik } from "formik";
import { Dimensions } from 'react-native';
import Button from '@/components/botao';
import { useSignUp } from '@/context/signUpContext';
import { router } from 'expo-router';
import DateTimePicker from '@react-native-community/datetimepicker';

const { width } = Dimensions.get('window');

// Normalizando a data para ter sempre 00:00:00
const normalizeDate = (date: any) => {
  const normalizedDate = new Date(date);
  normalizedDate.setHours(0, 0, 0, 0); // Define hora, minuto, segundo e milissegundo como 00:00:00
  return normalizedDate;
};

const validationSchema = Yup.object().shape({
  nome: Yup.string()
    .min(2, 'O nome deve ter pelo menos 2 caracteres.')
    .required('O nome é obrigatório'),
  sobrenome: Yup.string()
    .min(2, 'O nome deve ter pelo menos 2 caracteres.')
    .required('O sobrenome é obrigatório'),
  nascimento: Yup.date()
  .required('Campo obrigatório')
  .min(new Date(1900, 0, 1), 'Não é permitido datas anteriores a 1900')
  .max(new Date(), 'Não é permitido data futura'),
});

const Cadastro1: React.FC = () => {
  const { user,  updateUser } = useSignUp();

  const [isDatePickerVisible, setDatePickerVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleConfirm = (event: any, selectedDate: any) => {
    if (event.type === 'set') {
      setDatePickerVisible(false); // Fecha o DateTimePicker quando a data for escolhida
      if (selectedDate) {
        setSelectedDate(selectedDate); // Atualiza a data selecionada
      }
    } else {
      setDatePickerVisible(false); // Fecha o DateTimePicker caso o usuário cancele
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
              href={require('./../../assets/images/cadastroUM.png')}
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
      
    <View className="px-6 py-4 w-full">
  
    <Formik
      initialValues={{ nome: '', sobrenome: '' , nascimento: ''}}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          const updatedUser = {
            nome: values.nome,
            sobrenome: values.sobrenome,
            dataNascimento: values.nascimento,
            hash_senha: user.hash_senha,            
            email: user.email,
            endereco: user.endereco,
            cidade: user.cidade,
            pais: user.pais,
            celular: user.celular,
          };
          console.log("User atualizado:", updatedUser);
          updateUser(updatedUser);
           
          setSubmitting(false);
          router.push("/cadastro-2");
        }, 400);
      }}
      validationSchema={validationSchema}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched, setFieldValue  }) => (
        <>
          {/* Campo Nome */}
          <View style={styles.inputWrapper}>
            <Svg width="16" height="17" viewBox="0 0 16 17" fill="none">
              <Path
                d="M8 8.5C10.21 8.5 12 6.71 12 4.5C12 2.29 10.21 0.5 8 0.5C5.79 0.5 4 2.29 4 4.5C4 6.71 5.79 8.5 8 8.5ZM8 10.5C5.33 10.5 0 11.84 0 14.5V16.5H16V14.5C16 11.84 10.67 10.5 8 10.5Z"
                fill="#372F30"
              />
            </Svg>
            <TextInput
              placeholder="Nome"
              onChangeText={handleChange('nome')}
              onBlur={handleBlur('nome')}
              value={values.nome}
              style={styles.textInput}
            />
          </View>
          {touched.nome && errors.nome && (
            <Text style={styles.error}>{errors.nome}</Text>
          )}

          {/* Campo sobrenome */}
          <View style={styles.inputWrapper}>
            <Svg width="16" height="17" viewBox="0 0 16 17" fill="none">
              <Path
                d="M8 8.5C10.21 8.5 12 6.71 12 4.5C12 2.29 10.21 0.5 8 0.5C5.79 0.5 4 2.29 4 4.5C4 6.71 5.79 8.5 8 8.5ZM8 10.5C5.33 10.5 0 11.84 0 14.5V16.5H16V14.5C16 11.84 10.67 10.5 8 10.5Z"
                fill="#372F30"
              />
            </Svg>
            <TextInput
              placeholder="Sobrenome"
              onChangeText={handleChange('sobrenome')}
              onBlur={handleBlur('sobrenome')}
              value={values.sobrenome}
              style={styles.textInput}
            />
          </View>
          {touched.sobrenome && errors.sobrenome && (
            <Text style={styles.error}>{errors.sobrenome}</Text>
          )}

          {/* Campo data de nascimento */}
          <View style={styles.inputWrapper}>
            <Svg width="24" height="25" viewBox="0 0 24 25" fill="none">
                <Path d="M12 7.5C13.11 7.5 14 6.6 14 5.5C14 5.12 13.9 4.77 13.71 4.47L12 1.5L10.29 4.47C10.1 4.77 10 5.12 10 5.5C10 6.6 10.9 7.5 12 7.5ZM16.6 17.49L15.53 16.42L14.45 17.49C13.15 18.79 10.87 18.8 9.56 17.49L8.49 16.42L7.4 17.49C6.75 18.14 5.88 18.5 4.96 18.5C4.23 18.5 3.56 18.27 3 17.89V22.5C3 23.05 3.45 23.5 4 23.5H20C20.55 23.5 21 23.05 21 22.5V17.89C20.44 18.27 19.77 18.5 19.04 18.5C18.12 18.5 17.25 18.14 16.6 17.49ZM18 10.5H13V8.5H11V10.5H6C4.34 10.5 3 11.84 3 13.5V15.04C3 16.12 3.88 17 4.96 17C5.48 17 5.98 16.8 6.34 16.43L8.48 14.3L10.61 16.43C11.35 17.17 12.64 17.17 13.38 16.43L15.52 14.3L17.65 16.43C18.02 16.8 18.51 17 19.03 17C20.11 17 20.99 16.12 20.99 15.04V13.5C21 11.84 19.66 10.5 18 10.5Z" fill="#372F30"/>
            </Svg>

            <TextInput
              placeholder="Data de nascimento (dd/mm/aa)"
              onFocus={() => setDatePickerVisible(true)} // Ao clicar no campo, abrir o calendário
              onBlur={handleBlur('nascimento')}
              value={selectedDate ? selectedDate.toLocaleDateString('pt-BR') : ''}
              style={styles.textInput}
            />
          </View>
          {touched.nascimento && errors.nascimento && (
            <Text style={styles.error}>{errors.nascimento}</Text>
          )}
          {/* Exibindo o DateTimePicker quando o campo é focado */}
          {isDatePickerVisible && (
            <DateTimePicker
              testID="dateTimePicker"
              value={selectedDate}
              mode="date"
              is24Hour={true}
              display="default"
              onChange={(event, selectedDate) => {
                handleConfirm(event, selectedDate);
                setFieldValue('nascimento', selectedDate); // Atualiza o valor no Formik
              }}
              minimumDate={new Date(1900, 0, 1)} // Data mínima
              maximumDate={new Date()} // Data máxima (não futura)
            />
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
  }
});

export default Cadastro1;
