import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Config from '../screens/Config';
import Home from '../screens/Home';
import { theme } from '../styles/theme';
import RegisterCash from '../screens/RegisterCash';
import AddBill from '../components/AddBill';

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
          elevation: 0,
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          height: 70,
          paddingBottom: 10,
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
          tabBarIcon: () => (
            <MaterialIcons color={'white'} size={30} name="add" />
          ),
          tabBarButton: props => <AddBill {...props} />,
          tabBarInactiveTintColor: 'red',
          tabBarLabel: '',
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
