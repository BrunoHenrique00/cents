import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeRoutes from './home';
import BillsListRoute from './bills';

const { Navigator, Screen } = createNativeStackNavigator();

export default function AuthRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Home" component={HomeRoutes} />
      <Screen name="BillsList" component={BillsListRoute} />
    </Navigator>
  );
}
