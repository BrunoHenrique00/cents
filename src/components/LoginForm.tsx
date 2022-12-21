import { useState } from 'react';
import { Button, TextInput } from 'react-native-paper';

interface AuthFormProps {
  handleForm: (email: string, password: string) => Promise<void>;
  buttonLabel: string;
}

const AuthForm = ({ handleForm, buttonLabel }: AuthFormProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsloading] = useState(false);

  return (
    <>
      <TextInput
        value={email}
        label="Email"
        onChangeText={e => setEmail(e)}
        style={{ width: 330 }}
      />

      <TextInput
        value={password}
        label="Password"
        onChangeText={e => setPassword(e)}
        style={{ width: 330, marginVertical: 20 }}
      />

      <Button
        onPress={() => {
          setIsloading(true);
          handleForm(email, password).finally(() => setIsloading(false));
        }}
        loading={isLoading}
        elevation={2}
        mode="outlined"
      >
        {buttonLabel}
      </Button>
    </>
  );
};

export default AuthForm;
