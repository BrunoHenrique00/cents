import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text, TextInput } from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import { theme } from '../../styles/theme';
import AuthForm from '../../components/LoginForm';
import LogoCents from '../../components/LogoCents';

export default function Register() {
  const { navigate } = useNavigation();

  const handleRegister = async (email: string, password: string) => {
    try {
      const result = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );
      console.log('Registrou: ', result);
      navigate('Home' as never);
    } catch (error) {
      console.log('ERROR: ', error);
    }
  };

  return (
    <View style={styles.container}>
      <LogoCents />
      <AuthForm handleForm={handleRegister} buttonLabel="Registrar" />

      <Text variant="labelMedium" style={{ color: 'white', marginTop: 100 }}>
        Já tem uma conta?
      </Text>
      <Button onPress={() => navigate('Login' as never)}>Faça Login</Button>
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
