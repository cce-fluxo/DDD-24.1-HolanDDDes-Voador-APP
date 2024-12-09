import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const api = axios.create({
  baseURL: "https://ddd-24-1-holandddes-back-bk93.onrender.com/",
  //baseURL: "http://localhost:3300/",
});

// Interceptor de requisição
api.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem("@BonVoyage:token"); // Usando await para esperar a resposta do AsyncStorage
    console.log("token", token);

    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`; // Incluindo o token no cabeçalho da requisição
    }
    
    return config; // Retornando a configuração modificada
  },
  (error) => {
    return Promise.reject(error); // Tratamento de erro
  }
);

export default api;
