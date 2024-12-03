import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Pressable } from 'react-native';
import { Svg, Defs, LinearGradient, Image, Stop, Path, Rect, ClipPath, G } from 'react-native-svg';
import * as Yup from "yup";
import { Formik } from "formik";
import { Dimensions } from 'react-native';
import Button from '@/components/botao';
import { Link, useRouter } from 'expo-router';

const { width } = Dimensions.get('window');

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Email invalido")
    .required("Campo obrigatorio"),
  senha: Yup.string().required("Campo obrigatorio"),
});

const Login: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  const router = useRouter();

  const handlePress = () => {
    router.push('/(auth)/cadastro-1'); // Navega para a rota desejada
  };

  const [senhaVisible, setSenhaVisible] = useState(false);
  
  return (
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
              href={require('./../../assets/images/bonvoyage.png')}
              width={width*0.5}
              height={width*0.3}
              x={(width*0.3)}
              y={40}
            />
          </View>

          <View style={{ marginTop: 240 }} >
            <Text className="ml-10 font-poppins font-semibold text-preto text-4xl">Login</Text>
          </View>


        </Svg>
      </View>

      {/* Componentes de baixo */}
  <View className="ml-10 mr-10">
    {/* Botão "Cadastrar-se" */}
  
    <View className="px-6 py-4 w-full">
  
    <Formik
      initialValues={{ email: '', senha: ''}}
      onSubmit={(values) => {
        console.log(values);
      }}
      validationSchema={validationSchema}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
        <>
          {/* Campo email */}        
          <View style={styles.inputWrapper}>
            <Svg width="20" height="16" viewBox="0 0 20 16" fill="none">
              <Path d="M18 0H2C0.9 0 0.00999999 0.9 0.00999999 2L0 14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM17.6 4.25L10.53 8.67C10.21 8.87 9.79 8.87 9.47 8.67L2.4 4.25C2.29973 4.19371 2.21192 4.11766 2.14189 4.02645C2.07186 3.93525 2.02106 3.83078 1.99258 3.71937C1.96409 3.60796 1.9585 3.49194 1.97616 3.37831C1.99381 3.26468 2.03434 3.15581 2.09528 3.0583C2.15623 2.96079 2.23632 2.87666 2.33073 2.811C2.42513 2.74533 2.53187 2.69951 2.6445 2.6763C2.75712 2.65309 2.87328 2.65297 2.98595 2.67595C3.09863 2.69893 3.20546 2.74453 3.3 2.81L10 7L16.7 2.81C16.7945 2.74453 16.9014 2.69893 17.014 2.67595C17.1267 2.65297 17.2429 2.65309 17.3555 2.6763C17.4681 2.69951 17.5749 2.74533 17.6693 2.811C17.7637 2.87666 17.8438 2.96079 17.9047 3.0583C17.9657 3.15581 18.0062 3.26468 18.0238 3.37831C18.0415 3.49194 18.0359 3.60796 18.0074 3.71937C17.9789 3.83078 17.9281 3.93525 17.8581 4.02645C17.7881 4.11766 17.7003 4.19371 17.6 4.25Z" fill="#FD765E"/>
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


          {/* Campo senha */}
          <View style={styles.inputWrapper}>
            <Svg width="24" height="25" viewBox="0 0 24 25" fill="none">
              <Path d="M21 10.5H12.65C11.83 8.17 9.61 6.5 7 6.5C3.69 6.5 1 9.19 1 12.5C1 15.81 3.69 18.5 7 18.5C9.61 18.5 11.83 16.83 12.65 14.5H13L15 16.5L17 14.5L19 16.5L23 12.46L21 10.5ZM7 15.5C5.35 15.5 4 14.15 4 12.5C4 10.85 5.35 9.5 7 9.5C8.65 9.5 10 10.85 10 12.5C10 14.15 8.65 15.5 7 15.5Z" fill="#FD765E"/>
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
                        <Path d="M12 9.5C11.2044 9.5 10.4413 9.81607 9.87868 10.3787C9.31607 10.9413 9 11.7044 9 12.5C9 13.2956 9.31607 14.0587 9.87868 14.6213C10.4413 15.1839 11.2044 15.5 12 15.5C12.7956 15.5 13.5587 15.1839 14.1213 14.6213C14.6839 14.0587 15 13.2956 15 12.5C15 11.7044 14.6839 10.9413 14.1213 10.3787C13.5587 9.81607 12.7956 9.5 12 9.5ZM12 17.5C10.6739 17.5 9.40215 16.9732 8.46447 16.0355C7.52678 15.0979 7 13.8261 7 12.5C7 11.1739 7.52678 9.90215 8.46447 8.96447C9.40215 8.02678 10.6739 7.5 12 7.5C13.3261 7.5 14.5979 8.02678 15.5355 8.96447C16.4732 9.90215 17 11.1739 17 12.5C17 13.8261 16.4732 15.0979 15.5355 16.0355C14.5979 16.9732 13.3261 17.5 12 17.5ZM12 5C7 5 2.73 8.11 1 12.5C2.73 16.89 7 20 12 20C17 20 21.27 16.89 23 12.5C21.27 8.11 17 5 12 5Z" fill="#FD765E"/>
                      ) : (
                        
                        <Path d="M12.8145 5.68421L16.2727 8.67789V8.52632C16.2727 7.77254 15.9279 7.04964 15.3142 6.51664C14.7004 5.98365 13.868 5.68421 13 5.68421H12.8145ZM8.12364 6.44211L9.81455 7.91053C9.76 8.10947 9.72727 8.30842 9.72727 8.52632C9.72727 9.28009 10.0721 10.003 10.6858 10.536C11.2996 11.069 12.132 11.3684 13 11.3684C13.24 11.3684 13.48 11.34 13.7091 11.2926L15.4 12.7611C14.6691 13.0737 13.8618 13.2632 13 13.2632C11.5534 13.2632 10.166 12.7641 9.14305 11.8758C8.12013 10.9874 7.54545 9.7826 7.54545 8.52632C7.54545 7.77789 7.76364 7.07684 8.12364 6.44211ZM2.09091 1.20316L4.57818 3.36316L5.06909 3.78947C3.26909 5.02105 1.85091 6.63158 1 8.52632C2.88727 12.6853 7.54545 15.6316 13 15.6316C14.6909 15.6316 16.3055 15.3474 17.7782 14.8358L18.2473 15.2337L21.4327 18L22.8182 16.7968L3.47636 0M13 3.78947C14.4466 3.78947 15.834 4.28853 16.8569 5.17686C17.8799 6.06519 18.4545 7.27003 18.4545 8.52632C18.4545 9.13263 18.3127 9.72 18.0618 10.2505L21.2582 13.0263C22.8945 11.8421 24.2036 10.2884 25 8.52632C23.1127 4.36737 18.4545 1.42105 13 1.42105C11.4727 1.42105 10.0109 1.65789 8.63636 2.08421L11.0036 4.12105C11.6255 3.91263 12.2909 3.78947 13 3.78947Z"  fill="#FD765E"/>
                      )}
                    </Svg>
              </TouchableOpacity>

          </View>
          {touched.senha && errors.senha && (
            <Text style={styles.error}>{errors.senha}</Text>
          )}

          {/* Redefinição e lembrar conta */}
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              {/* Checkbox customizado */}
              <TouchableOpacity onPress={() => setIsChecked(!isChecked)} style={{ marginRight: 8 }}>
                <View
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: 2,
                    borderWidth: 2,
                    borderColor: "#372F30",
                    backgroundColor: isChecked ? '#fff' : '#fff',
                  }}
                >
                  {isChecked && (
                    <Svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <Path d="M8.8002 15.9L4.6002 11.7L3.2002 13.1L8.8002 18.7L20.8002 6.70005L19.4002 5.30005L8.8002 15.9Z" fill="black"/>
                    </Svg>
                   )}
                </View>
              </TouchableOpacity>
              <Text style={{ color: 'black' }}>Lembrar-me</Text>
            </View>

            {/* Link */}
            <Link
              href={"/(redefinir-senha)/redefinir-1"}
              style={{ color: 'black', textDecorationLine: 'underline' }}
            >
              Esqueceu sua senha?
            </Link>
          </View>

          {/* Botão */}
          <View className="justify-center items-center flex" 
              style={styles.botao}>
            <Button
              text="Entrar"
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

  <View className='flex justify-center items-center'>     
    <Pressable
      onPress={handlePress}
      style={styles.button}
    >
      <Text className={`font-poppins text-lg justify-center text-center text-laranja`}>Cadastre-se</Text>
    </Pressable>
  </View> 

  <Text className="text-laranja justify-center text-center">ou</Text>

    </View>

  <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 20 }}>

    <Svg width="56" height="55" viewBox="0 0 56 55" fill="none">
      <Path d="M28.0003 0C12.9381 0 0.726562 12.2115 0.726562 27.2738C0.726562 42.336 12.9381 54.5475 28.0003 54.5475C43.0626 54.5475 55.2741 42.336 55.2741 27.2738C55.2741 12.2115 43.0626 0 28.0003 0ZM38.1669 38.5718C35.6942 40.8503 32.3237 42.189 28.2969 42.189C26.3387 42.189 24.3997 41.8031 22.5907 41.0534C20.7817 40.3037 19.1381 39.2049 17.754 37.8198C16.3698 36.4346 15.2721 34.7903 14.5237 32.9808C13.7753 31.1712 13.3908 29.232 13.3922 27.2738C13.3915 25.3151 13.7766 23.3754 14.5255 21.5655C15.2745 19.7557 16.3725 18.111 17.757 16.7255C19.1416 15.34 20.7854 14.2408 22.5948 13.4906C24.4041 12.7404 26.3435 12.3539 28.3022 12.3532C32.3184 12.3532 35.6916 13.8311 38.2772 16.2382L34.0063 20.517C32.4576 19.0365 30.4941 18.2857 28.3074 18.2857C24.4224 18.2857 21.1359 20.9107 19.9599 24.4361C19.6633 25.3312 19.4927 26.2868 19.4927 27.2738C19.4927 28.2608 19.6633 29.2163 19.9599 30.1088C21.1359 33.6367 24.4224 36.2591 28.3022 36.2591C30.3103 36.2591 32.0139 35.7289 33.3474 34.8338C34.1226 34.3235 34.7862 33.6611 35.2979 32.8868C35.8095 32.1126 36.1587 31.2425 36.3242 30.3293H28.3022V24.5595H42.3459C42.5218 25.5386 42.6137 26.5545 42.6137 27.6098C42.6137 32.1562 40.9836 35.973 38.1669 38.5718Z" fill="#FD765E"/>
    </Svg>

    <Svg width="55" height="54" viewBox="0 0 55 54" fill="none">
      <Path d="M54.2734 27.0677C54.2734 12.1263 42.1774 0 27.2734 0C12.3694 0 0.273438 12.1263 0.273438 27.0677C0.273438 40.1684 9.56144 51.0767 21.8734 53.594V35.188H16.4734V27.0677H21.8734V20.3008C21.8734 15.0767 26.1124 10.8271 31.3234 10.8271H38.0734V18.9474H32.6734C31.1884 18.9474 29.9734 20.1654 29.9734 21.6541V27.0677H38.0734V35.188H29.9734V54C43.6084 52.6466 54.2734 41.1158 54.2734 27.0677Z" fill="#FD765E"/>
    </Svg>

    <Svg width="55" height="54" viewBox="0 0 55 54" fill="none">
      <G clip-path="url(#clip0_1723_6787)">
        <Path d="M27.2734 0C42.2006 0 54.2734 12.0729 54.2734 27C54.2734 41.9271 42.2006 54 27.2734 54C12.3463 54 0.273438 41.9271 0.273438 27C0.273438 12.0729 12.3463 0 27.2734 0ZM22.3363 41.2329C34.2934 41.2329 40.8506 31.32 40.8506 22.7186V21.87C42.1234 20.9443 43.242 19.7871 44.0906 18.4757C42.9334 18.9771 41.6606 19.3243 40.3492 19.5171C41.6992 18.7071 42.7406 17.4343 43.2034 15.93C41.9306 16.6629 40.542 17.2029 39.0763 17.5114C37.8806 16.2386 36.1834 15.4671 34.332 15.4671C30.7449 15.4671 27.8134 18.3986 27.8134 21.9857C27.8134 22.4871 27.852 22.9886 28.0063 23.4514C22.6063 23.1814 17.7849 20.5971 14.5834 16.6629C14.0434 17.6271 13.6963 18.7457 13.6963 19.9414C13.6963 22.1786 14.8534 24.1843 16.5892 25.3414C15.5092 25.3414 14.5063 25.0329 13.6577 24.5314V24.6086C13.6577 27.7714 15.8949 30.3943 18.8649 31.0114C18.3249 31.1657 17.7463 31.2429 17.1677 31.2429C16.7434 31.2429 16.3577 31.2043 15.9334 31.1271C16.7434 33.7114 19.1734 35.6014 21.9892 35.64C19.752 37.3757 16.9363 38.4171 13.8892 38.4171C13.3492 38.4171 12.8477 38.4171 12.3463 38.34C15.2006 40.1914 18.6334 41.2714 22.2977 41.2714" fill="#FD765E"/>
      </G>
      <Defs>
      <ClipPath id="clip0_1723_6787">
      <Rect width="54" height="54" fill="white" transform="translate(0.273438)"/>
      </ClipPath>
      </Defs>
    </Svg>


  </View>

  </View>
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
  button: {
    paddingVertical: 8,
    marginTop: 10,
    backgroundColor: "#FFEDF0",
    paddingHorizontal: 24,
    width: width*0.4,
    borderRadius: 10,
    marginBottom: 20,
    fontWeight: "bold",
  },  
});

export default Login;