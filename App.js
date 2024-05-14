import 'react-native-gesture-handler';

import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native';

import { Home } from './src/screens/Home';
import { Login } from './src/screens/Login';

const { Navigator, Screen } = createDrawerNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="Home" component={Home} />
        <Screen name="Login" component={Login} />
      </Navigator>
    </NavigationContainer>
  );
}
