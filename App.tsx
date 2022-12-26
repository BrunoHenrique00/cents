import { StatusBar } from 'expo-status-bar';
import { Provider as PaperProvider } from 'react-native-paper';
import { theme } from './src/styles/theme';
import UserProvider from './src/contexts/UserContext';
import Routes from './src/routes';
import BottomSheetProvider from './src/contexts/BottomSheetContext';
import MonthProvider from './src/contexts/MonthContext';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <UserProvider>
        <MonthProvider>
          <QueryClientProvider client={queryClient}>
            <BottomSheetProvider>
              <Routes />
              <StatusBar style="light" />
            </BottomSheetProvider>
          </QueryClientProvider>
        </MonthProvider>
      </UserProvider>
    </PaperProvider>
  );
}
