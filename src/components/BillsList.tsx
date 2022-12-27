import { Alert } from 'react-native';
import { ActivityIndicator, Button, List } from 'react-native-paper';
import { useMonth } from '../contexts/MonthContext';
import formatCurrency from '../helpers/formatCurrency';
import useBillsDelete from '../hooks/useBills/delete';
import useBills from '../hooks/useBills/get';
import { theme } from '../styles/theme';

export default function BillsList() {
  const { date } = useMonth();
  const { data: bills, isLoading } = useBills();
  const billsMutationDelete = useBillsDelete();

  async function handleDeleteBill(id: string) {
    try {
      await billsMutationDelete.mutateAsync(id);
      Alert.alert(`Deletado com sucesso!`);
    } catch (error) {
      Alert.alert(`Algo deu errado, tente novamente!`);
    }
  }

  return (
    <List.Section>
      <List.Subheader>Suas transações em {date}</List.Subheader>

      {isLoading || !bills ? (
        <ActivityIndicator />
      ) : (
        bills.map(bill => (
          <List.Item
            title={bill.description}
            description={formatCurrency.format(parseInt(bill.value))}
            key={bill.value}
            left={() => (
              <List.Icon
                color={bill.type === 'despesa' ? 'red' : theme.colors.primary}
                icon={`cash-${bill.type === 'despesa' ? 'minus' : 'check'}`}
              />
            )}
            right={() => (
              <Button
                mode="outlined"
                onPress={async () => await handleDeleteBill(bill.id)}
              >
                Remover
              </Button>
            )}
          />
        ))
      )}
    </List.Section>
  );
}
