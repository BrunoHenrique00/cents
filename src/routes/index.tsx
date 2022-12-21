import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useUser } from '../contexts/UserContext';
import { navigationTheme } from '../styles/theme';
import AuthRoutes from './auth';
import PublicRoutes from './public';

const Stack = createNativeStackNavigator();

export default function Routes() {
  const { user } = useUser();
  return (
    <NavigationContainer theme={navigationTheme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {user ? (
          <Stack.Screen name="Auth" component={AuthRoutes} />
        ) : (
          <Stack.Screen name="Public" component={PublicRoutes} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
