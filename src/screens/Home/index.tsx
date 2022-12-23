import { ScrollView, StyleSheet, View } from 'react-native';
import Header from '../../components/Header';
import { theme } from '../../styles/theme';
import { useUser } from '../../contexts/UserContext';
import Calendar from '../../components/Calendar';
import OverviewCard from '../../components/OverviewCards';
import { useMonth } from '../../contexts/MonthContext';
import { useEffect, useState } from 'react';
import billRepository from '../../services/bill.service';
import { IBillDetails } from '../../types/bill';

export default function Home() {
  // Hooks
  const { user } = useUser();
  const { updateDate } = useMonth();

  // States
  const [bills, setBills] = useState<IBillDetails[]>([]);

  useEffect(() => {
    billRepository.findAll(user?.uid || '').then(bills => setBills(bills));
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Header title={`Olá, ${user?.email || 'pronto para'}`} />
        <Calendar onChange={date => updateDate(date)} />
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
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.backgroundColor,
    marginBottom: 5,
  },
  dateContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    marginTop: 20,
  },
});
