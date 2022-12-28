import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-paper';
import Header from '../../components/Header';
import { theme } from '../../styles/theme';
import auth from '@react-native-firebase/auth';

export default function Config() {
  return (
    <View style={styles.container}>
      <Header title="Configurações" />
      <Button onPress={async () => await auth().signOut()}>Desconectar</Button>
    </View>
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
