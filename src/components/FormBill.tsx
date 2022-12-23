import { useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { useUser } from '../contexts/UserContext';
import { IBill } from '../types/bill';
import RadioOption from './RadioOption';
import { useBottomSheet } from '../contexts/BottomSheetContext';
import { useMonth } from '../contexts/MonthContext';
import billRepository from '../services/bill.service';
import { useBottomSheetModal } from '@gorhom/bottom-sheet';

const FormBill = () => {
  const defaultValues = {
    type: 'ganhos',
    description: '',
    value: '',
  };

  // Hooks
  const { user } = useUser();
  const { month } = useMonth();
  const { dismissAll } = useBottomSheetModal();

  // States
  const [bill, setBill] = useState<IBill>(defaultValues as IBill);
  const [isLoading, setIsloading] = useState(false);

  async function handleBillForm() {
    setIsloading(true);
    try {
      await billRepository.save({
        bill,
        userId: user?.uid || 'No id provided',
        month,
      });
      dismissAll();
    } catch (error) {
      Alert.alert('Algo deu errado, tente novamente!');
    } finally {
      setIsloading(false);
    }
  }

  const labelBill = bill.type === 'ganhos' ? 'ganhou' : 'gastou';

  return (
    <View style={styles.container}>
      <View>
        <RadioOption
          label="Economia"
          onPress={() =>
            setBill({
              ...bill,
              type: 'ganhos',
            })
          }
          checked={bill.type}
          value={'ganhos'}
        />

        <RadioOption
          label="Despesas"
          onPress={() =>
            setBill({
              ...bill,
              type: 'despesa',
            })
          }
          checked={bill.type}
          value={'despesa'}
        />

        <TextInput
          keyboardType="numeric"
          value={bill.value}
          onChangeText={e =>
            setBill({
              ...bill,
              value: e,
            })
          }
          label={`Quanto ${labelBill}`}
          mode="outlined"
          left={<TextInput.Icon icon="currency-brl" />}
          style={styles.input}
          textColor="black"
        />

        <TextInput
          label={`Com o que ${labelBill}`}
          mode="outlined"
          value={bill.description}
          onChangeText={e =>
            setBill({
              ...bill,
              description: e,
            })
          }
          left={<TextInput.Icon icon="notebook-edit" />}
          style={styles.input}
          textColor="black"
        />
      </View>
      <Button
        mode="contained"
        style={{ width: 200, marginTop: 30 }}
        onPress={handleBillForm}
        loading={isLoading}
      >
        Adicionar
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  input: {
    width: 330,
    marginVertical: 15,
    backgroundColor: 'white',
  },
  radioContainer: {
    flexDirection: 'row',
    alignContent: 'space-between',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default FormBill;
