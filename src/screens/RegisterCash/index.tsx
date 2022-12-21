import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Paragraph, RadioButton, TextInput } from 'react-native-paper';
import Header from '../../components/Header';
import { theme } from '../../styles/theme';

export default function RegisterCash() {
  const [checked, setChecked] = useState('first');
  return (
    <View style={styles.container}>
      <Header title="Registrar Gastos ou Ganhos" />
      <View>
        <View style={styles.radioContainer}>
          <Paragraph>Economia</Paragraph>
          <RadioButton
            value="first"
            status={checked === 'first' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('first')}
          />
        </View>

        <View style={styles.radioContainer}>
          <Paragraph>Despesa</Paragraph>
          <RadioButton
            value="second"
            status={checked === 'second' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('second')}
          />
        </View>

        <TextInput
          keyboardType="numeric"
          label="Quantidade"
          style={{
            width: 300,
            marginVertical: 20,
          }}
        />
      </View>
      <Button mode="outlined" style={{ width: 200 }}>
        Adicionar
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.backgroundColor,
    flex: 1,
    alignItems: 'center',
  },
  radioContainer: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
