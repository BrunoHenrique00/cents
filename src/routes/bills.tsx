import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from 'react-native-paper';
import BillsList from '../components/BillsList';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const { Navigator, Screen } = createNativeStackNavigator();

const BillsListRoute = () => {
  const { goBack } = useNavigation();
  return (
    <Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'black',
        },

        headerLeft: props => (
          <MaterialIcons
            name="arrow-back"
            // eslint-disable-next-line react/prop-types
            color={props.tintColor || 'white'}
            size={24}
            onPress={() => goBack()}
          />
        ),
        headerTintColor: 'white',
      }}
    >
      <Screen
        name="Bills"
        component={BillsList}
        options={{
          title: 'Suas Transações',
        }}
      />
    </Navigator>
  );
};

export default BillsListRoute;
