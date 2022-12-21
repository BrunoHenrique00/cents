import { StatusBar } from 'expo-status-bar';
import { Provider as PaperProvider } from 'react-native-paper';
import { theme } from './src/styles/theme';
import UserProvider from './src/contexts/UserContext';
import Routes from './src/routes';

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <UserProvider>
        <Routes />
        <StatusBar style="light" />
      </UserProvider>
    </PaperProvider>
  );
}
