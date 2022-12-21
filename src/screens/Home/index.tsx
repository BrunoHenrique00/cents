import { ScrollView, StyleSheet, View } from 'react-native';
import Header from '../../components/Header';
import { theme } from '../../styles/theme';
import { useUser } from '../../contexts/UserContext';
import Calendar from '../../components/Calendar';
import OverviewCard from '../../components/OverviewCards';

export default function Home() {
  const { user } = useUser();

  return (
    <View style={styles.container}>
      <ScrollView>
        <Header title={`Olá, ${user?.email || 'pronto para'}`} />
        <Calendar onChange={date => console.log(date.toLocaleString())} />
        <OverviewCard title="Suas Economias" icon="cash-check" color="green" />
        <OverviewCard
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
    marginBottom: 120,
  },
  dateContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    marginTop: 20,
  },
});
