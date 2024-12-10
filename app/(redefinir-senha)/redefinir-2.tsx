import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Svg, Defs, LinearGradient, Image, Stop, Path } from "react-native-svg";
import * as Yup from "yup";
import { Formik } from "formik";
import { Dimensions } from "react-native";
import Button from "@/components/botao";
import { ScrollView } from "react-native-gesture-handler";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "@/services/axios";
import { CustomModal } from "@/components/modalCodigo";

const { width } = Dimensions.get("window");

const validationSchema = Yup.object().shape({
  token: Yup.string().required("Campo obrigatorio"),
});

const Redefinir2: React.FC = () => {
  const [email, setEmail] = useState<string | null>(null);

  const [isPostBom, setIsPostBom] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEmail = async () => {
      try {
        const storedEmail = await AsyncStorage.getItem("@USERemail");
        if (storedEmail) {
          setEmail(storedEmail); // Se o email for encontrado, armazena no estado
        } else {
          console.error("Email não encontrado. Redirecionando...");
          router.push("/(auth)/login"); // Redireciona caso não encontre o email
        }
      } catch (error) {
        console.error("Erro ao buscar o email", error);
      } finally {
        setLoading(false); // Marca o carregamento como concluído
      }
    };

    fetchEmail();
  }, [router]);

  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const handlePress = async () => {
    if (!email) {
      console.error("Email não encontrado.");
      return; // Certifique-se de que o email foi encontrado antes de enviar a requisição
    }

    try {
      const response = await api.patch("auth/recuperar-senha", { email });
      console.log("Email de recuperação enviado com sucesso!", response.data);
      setModalVisible(true); // abre o modal
    } catch (error) {
      console.error("Erro ao enviar email de recuperação", error);
    }
  };

  // POST
  async function postValidarToken(data: any) {
    try {
      const response = await api.post(
        "auth/recuperar-senha/validar-token",
        data
      );
      console.log("Token enviado com sucesso!", response.data);
      setIsPostBom(true);
      router.push("/redefinir-3"); // Redireciona para a próxima etapa após sucesso
      return response.data;
    } catch (error) {
      console.error("Erro ao enviar token", error);
      setIsPostBom(false);
    } finally {
      console.log("Token validado com sucesso!");
    }
  }

  const sendForm = async (values: { token: string }) => {
    if (!email) {
      console.error("Email não encontrado!");
      return;
    }
    AsyncStorage.setItem("token", values.token);
    const data = {
      email,
      token: values.token,
    };
    await postValidarToken(data);
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="flex">
          {/* Degradê no topo com corte ondulado */}
          <View className="relative w-auto">
            <Svg width={width} height={width} viewBox="0 0 430 307" fill="none">
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

              <View
                style={{
                  position: "relative",
                  width: "100%",
                  alignItems: "center",
                }}
              >
                {/* Imagem dentro do SVG */}
                <Image
                  href={require("./../../assets/images/esqueciDOIS.png")}
                  width={width * 0.7}
                  height={width * 0.8}
                  x={width * 0.2}
                  y={40}
                />
              </View>
            </Svg>
          </View>

          {/* Componentes de baixo */}
          <View className="ml-10 mr-10 justify-center">
            <Text className="font-PoppinsSemiBold font-semibold text-preto text-4xl mb-2 justify-center items-center ml-8">
              Digite o código
            </Text>

            <View className="px-6 py-4 w-full justify-center items-center">
              <Formik
                initialValues={{ token: "" }}
                onSubmit={(values) => {
                  sendForm(values);
                }}
                validationSchema={validationSchema}
              >
                {({
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  values,
                  errors,
                  touched,
                }) => (
                  <>
                    {/* Campo codigo */}
                    <View style={styles.inputWrapper}>
                      <Svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <Path
                          d="M18 8.5H17V6.5C17 3.74 14.76 1.5 12 1.5C9.24 1.5 7 3.74 7 6.5H9C9 4.84 10.34 3.5 12 3.5C13.66 3.5 15 4.84 15 6.5V8.5H6C4.9 8.5 4 9.4 4 10.5V20.5C4 21.6 4.9 22.5 6 22.5H18C19.1 22.5 20 21.6 20 20.5V10.5C20 9.4 19.1 8.5 18 8.5ZM18 20.5H6V10.5H18V20.5ZM12 17.5C13.1 17.5 14 16.6 14 15.5C14 14.4 13.1 13.5 12 13.5C10.9 13.5 10 14.4 10 15.5C10 16.6 10.9 17.5 12 17.5Z"
                          fill="black"
                        />
                      </Svg>

                      <TextInput
                        placeholder="Código"
                        onChangeText={handleChange("token")}
                        onBlur={handleBlur("token")}
                        value={values.token}
                        style={styles.textInput}
                      />
                    </View>
                    {touched.token && errors.token && (
                      <Text style={styles.error}>{errors.token}</Text>
                    )}

                    {/* Botão */}
                    <View
                      className="justify-center items-center flex"
                      style={styles.botao}
                    >
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

            <View className="flex justify-center items-center">
              <Pressable onPress={handlePress} style={styles.button}>
                <Text
                  className={`font-PoppinsSemiBold text-base justify-center text-center text-laranja`}
                >
                  Reenviar código
                </Text>
              </Pressable>

              <CustomModal modalVisible={modalVisible} onClose={toggleModal} />
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
    justifyContent: "center",
    padding: 20,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    height: 40,
    width: width * 0.8,
    borderColor: "#372F30",
    borderRadius: 20,
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  textInput: {
    flex: 1,
    paddingLeft: 10,
    fontSize: 16,
    color: "#372F30",
  },
  error: {
    color: "#DC143B",
    marginBottom: 10,
  },
  botao: {
    marginTop: 30,
  },
  button: {
    paddingVertical: 8,
    marginTop: 10,
    backgroundColor: "#FFEDF0",
    paddingHorizontal: 24,
    width: width * 0.4,
    borderRadius: 10,
    marginBottom: 20,
    fontWeight: "bold",
  },
});

export default Redefinir2;
