import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Config from '../screens/Config';
import Home from '../screens/Home';
import { theme } from '../styles/theme';
import RegisterCash from '../screens/RegisterCash';

const { Navigator, Screen } = createBottomTabNavigator();

export default function AuthRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'black',
        },
        headerTintColor: 'white',
        tabBarActiveTintColor: theme.colors.primary,
        tabBarStyle: {
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          borderRadius: 15,
          height: 70,
          paddingBottom: 5,
        },
      }}
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons color={color} size={size} name="home" />
          ),
        }}
      />

      <Screen
        name="Register"
        component={RegisterCash}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons color={color} size={size} name="account-balance" />
          ),
          title: 'Registrar gastos',
        }}
      />

      <Screen
        name="Config"
        component={Config}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons color={color} size={size} name="settings" />
          ),
        }}
      />
    </Navigator>
  );
}
