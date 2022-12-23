import { StyleSheet, TouchableOpacity } from 'react-native';
import { Paragraph, RadioButton } from 'react-native-paper';

interface RadioOptionProps {
  onPress: () => void;
  checked: string;
  value: string;
  label: string;
}

const RadioOption = ({ onPress, checked, value, label }: RadioOptionProps) => {
  return (
    <TouchableOpacity style={styles.radioContainer} onPress={onPress}>
      <Paragraph style={{ color: 'black' }}>{label}</Paragraph>
      <RadioButton
        value={value}
        onPress={onPress}
        status={checked === value ? 'checked' : 'unchecked'}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  radioContainer: {
    flexDirection: 'row',
    alignContent: 'space-between',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default RadioOption;
