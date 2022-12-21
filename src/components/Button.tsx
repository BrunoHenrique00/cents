import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  // ...
  appButtonContainer: {
    elevation: 8,
    backgroundColor: '#0e5406',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  appButtonText: {
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    letterSpacing: 1,
  },
});

export default Button;
