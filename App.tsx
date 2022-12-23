import { StatusBar } from 'expo-status-bar';
import { Provider as PaperProvider } from 'react-native-paper';
import { theme } from './src/styles/theme';
import UserProvider from './src/contexts/UserContext';
import Routes from './src/routes';
import BottomSheetProvider from './src/contexts/BottomSheetContext';
import MonthProvider from './src/contexts/MonthContext';

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <UserProvider>
        <MonthProvider>
          <BottomSheetProvider>
            <Routes />
            <StatusBar style="light" />
          </BottomSheetProvider>
        </MonthProvider>
      </UserProvider>
    </PaperProvider>
  );
}
