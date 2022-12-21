import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Register from '../screens/Register';

const { Navigator, Screen } = createNativeStackNavigator();

export default function PublicRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'black',
        },
        headerTintColor: 'white',
      }}
    >
      <Screen name="Register" component={Register} />
      <Screen name="Login" component={Login} />
    </Navigator>
  );
}
