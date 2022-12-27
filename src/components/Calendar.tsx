import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-paper';
import { theme } from '../styles/theme';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useMonth } from '../contexts/MonthContext';

interface CalendarProps {
  onChange: (date: Date) => void;
}

export default function Calendar({ onChange }: CalendarProps) {
  // Refactor this...
  const [date, setDate] = useState({
    value: new Date(),
    show: false,
  });
  const { date: month } = useMonth();

  return (
    <>
      <Button
        mode="outlined"
        onPress={() => setDate(props => ({ ...props, show: true }))}
        icon="calendar"
      >
        {month}
      </Button>
      <View style={styles.dateContainer}>
        {date.show && (
          <DateTimePicker
            value={date.value}
            mode={'date'}
            display={'default'}
            style={{ backgroundColor: 'white' }}
            onChange={(event, date) => {
              if (event.type === 'set') {
                onChange(date || new Date());
                setDate({
                  value: new Date(date || ''),
                  show: false,
                });
                return;
              }
              setDate(props => ({ ...props, show: false }));
            }}
          />
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.backgroundColor,
  },
  dateContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    marginTop: 20,
  },
});
