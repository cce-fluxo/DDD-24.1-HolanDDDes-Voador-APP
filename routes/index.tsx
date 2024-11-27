import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Criando o Stack Navigator, que permite navegação/transição entre as telas
const Stack = createStackNavigator();

// Criando o Tab Navigator, que permite navegação com a TabBar na parte inferior da tela
const Tab = createBottomTabNavigator();

// Telas referentes a home
function HomeStack() {
    return (
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name='Home' component={Home} />
      </Stack.Navigator>
    );
}

function AppStack() {

}

<Stack.Screen name="HomeScreen" component={HomeScreen} />
<Stack.Screen name="Pagamento" component={Pagamento} />
<Stack.Screen name="ConfirmarCompraPIX" component={ConfirmarCompraPIX} />
<Stack.Screen name="AdicionarCartao" component={AdicionarCartao} />
<Stack.Screen name="PagamentoPIX" component={PagamentoPIX} />
<Stack.Screen name="ConfirmarCompraPIX" component={ConfirmarCompraBoleto} />
<Stack.Screen name="PagamentoBOLETO" component={PagamentoBOLETO} />  
<Stack.Screen name="ConfirmarCompraCartao" component={ConfirmarCompraCartao} />

export default function Rotas() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="LoginInicial"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="EsqueciSenhaEm" component={EsqueciSenhaEm} />
          <Stack.Screen name="EsqueciSenhaCod" component={EsqueciSenhaCod} />
          <Stack.Screen name="EsqueciSenhaNS" component={EsqueciSenhaNS} />
          <Stack.Screen name="Cadastro1" component={Cadastro1} />
          <Stack.Screen name="Cadastro2" component={Cadastro2} />
          <Stack.Screen name="Cadastro3" component={Cadastro3} />
          <Stack.Screen name="Cadastro4" component={Cadastro4} />
          <Stack.Screen name="AppStack" component={AppStack} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  