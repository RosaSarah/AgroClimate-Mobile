import 'react-native-gesture-handler';

import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native';

import { Home } from './src/screens/Home';
import { Login } from './src/screens/Login';
import { Cadastro } from './src/screens/Cadastro'
import { Senha } from './src/screens/Senha';
import { VisualizarSafra } from './src/screens/VisualizarSafra';
import { AtualizarSafra } from './src/screens/AtualizarSafra';
import { CadastrarSafra } from './src/screens/CadastrarSafra';



import { Image, Text } from 'react-native';
import logoAgroclimate from './assets/LogoChalleng.png'



const { Navigator, Screen } = createDrawerNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{
        headerTitle: () => (
          <Text style={{
            textAlign: 'center',
            fontWeight: '700',
            
          }}>
            AGROCLIMATE
          </Text>
        ),
        headerRight: () => (
          <Image source={logoAgroclimate}
           style={{width: 100, height: 100}}  />
        ),
      }}>
        <Screen

          name="Login" 
          component={Login} 
          options={{ headerShown:false }}/>

        <Screen

          name="Home"
          component={Home}
        />

        <Screen
          name="Cadastro"
          component={Cadastro}
          options={{
            headerShown:false,
            drawerItemStyle: {display: 'none'}
          }}
        />

        <Screen
          name="Senha"
          component={Senha}
          options={{
            headerShown:false,
            drawerItemStyle: {display: 'none'}
          }}
          />

        <Screen 
          name="Cadastrar Safra"
          component={CadastrarSafra} 
          
        />  

        <Screen 
          name="Visualizar Safra"
          component={VisualizarSafra} 
          
        />

        <Screen 
          name="Atualizar Safra"
          component={AtualizarSafra} 
          
        />

       
          
        
          
        
      </Navigator>
    </NavigationContainer>
  );
}
