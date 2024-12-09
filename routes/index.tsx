import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Cadastro1 from './../app/(auth)/cadastro-1';
import Cadastro2 from '@/app/(auth)/cadastro-2';
import Cadastro3 from '@/app/(auth)/cadastro-3';
import Cadastro4 from '@/app/(auth)/login';
import Conta from '@/app/(perfil)/conta';
import FAQ from '@/app/(perfil)/FAQ';

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginPage">
        <Stack.Screen name="Cadastro1" component={Cadastro1} />
        <Stack.Screen name="Cadastro2" component={Cadastro2} />
        <Stack.Screen name="Cadastro3" component={Cadastro3} />
        <Stack.Screen name="Cadastro4" component={Cadastro4} />
        <Stack.Screen name="Conta" component={Conta}/>
        <Stack.Screen name="FAQ" component={FAQ}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
