import { ScrollView, StyleSheet, View } from 'react-native';
import Header from '../../components/Header';
import { theme } from '../../styles/theme';
import { useUser } from '../../contexts/UserContext';
import Calendar from '../../components/Calendar';
import OverviewCard from '../../components/OverviewCards';
import { useMonth } from '../../contexts/MonthContext';
import { ActivityIndicator } from 'react-native-paper';
import useBills from '../../hooks/useBills/get';
import ButtonToTransactions from '../../components/ToTransactions';

export default function Home() {
  // Hooks
  const { user } = useUser();
  const { updateDate } = useMonth();
  const { data: bills, isLoading } = useBills();

  return (
    <View style={styles.container}>
      <ScrollView>
        <Header title={`Olá, ${user?.email || 'pronto para'}`} />
        {isLoading || !bills ? (
          <ActivityIndicator />
        ) : (
          <>
            <Calendar onChange={date => updateDate(date)} />
            <ButtonToTransactions />
            <OverviewCard
              bills={bills.filter(bill => bill.type === 'ganhos')}
              title="Suas Economias"
              icon="cash-check"
              color="green"
            />
            <OverviewCard
              bills={bills.filter(bill => bill.type === 'despesa')}
              color="red"
              title="Suas Despesas"
              icon="cash-minus"
              style={{
                marginTop: 20,
              }}
            />
          </>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.backgroundColor,
    marginBottom: 5,
  },
});
