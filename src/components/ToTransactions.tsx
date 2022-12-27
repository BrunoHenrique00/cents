import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';
import { Button } from 'react-native-paper';

export default function ButtonToTransactions() {
  const { navigate } = useNavigation();
  return (
    <View
      style={{
        alignItems: 'center',
      }}
    >
      <Button
        style={{
          width: '50%',
          marginHorizontal: 'auto',
          marginBottom: 20,
        }}
        onPress={() => navigate('BillsList' as never)}
        mode="contained"
      >
        Ver Transações
      </Button>
    </View>
  );
}
