import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import { theme } from '../../styles/theme';
import AuthForm from '../../components/LoginForm';
import { useUser } from '../../contexts/UserContext';
import LogoCents from '../../components/LogoCents';

export default function Login() {
  const { navigate } = useNavigation();
  const { setUser } = useUser();

  const handleLogin = async (email: string, password: string) => {
    try {
      const response = await auth().signInWithEmailAndPassword(email, password);
      if (response) setUser(response.user);
      console.log('Logou: ', response);
      navigate('Auth' as never);
    } catch (error) {
      console.log('ERROR: ', error);
    }
  };

  return (
    <View style={styles.container}>
      <LogoCents />
      <AuthForm handleForm={handleLogin} buttonLabel="Login" />
      <Text variant="labelMedium" style={{ color: 'white', marginTop: 100 }}>
        Não tem uma conta?
      </Text>
      <Button onPress={() => navigate('Register' as never)}>Registre-se</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.backgroundColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
