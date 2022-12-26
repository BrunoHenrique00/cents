import { List, MD3Colors } from 'react-native-paper';
import { useMonth } from '../contexts/MonthContext';
import { theme } from '../styles/theme';

export default function BillsList() {
  const { date } = useMonth();

  return (
    <List.Section>
      <List.Subheader>Suas transações em {date}</List.Subheader>
      <List.Item
        title="First Item"
        left={() => <List.Icon color={theme.colors.primary} icon="folder" />}
      />
      <List.Item
        title="Second Item"
        left={() => <List.Icon color={MD3Colors.tertiary70} icon="folder" />}
      />
    </List.Section>
  );
}
