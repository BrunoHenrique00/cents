import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Config from '../screens/Config';
import Home from '../screens/Home';
import { theme } from '../styles/theme';
import AddBill from '../components/AddBill';
import BillsListRoute from './bills';

const { Navigator, Screen } = createBottomTabNavigator();

export default function HomeRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'black',
        },
        headerShown: false,
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
        name="Dashboard"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons color={color} size={size} name="home" />
          ),
        }}
      />

      <Screen
        name="BillsList"
        component={BillsListRoute}
        options={{
          tabBarIcon: () => (
            <MaterialIcons color={'white'} size={30} name="add" />
          ),
          tabBarButton: props => <AddBill {...props} />,
          tabBarInactiveTintColor: 'red',
          tabBarLabel: '',
          headerShown: false,
          tabBarStyle: {
            display: 'none',
          },
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
