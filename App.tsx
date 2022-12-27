import { StatusBar } from 'expo-status-bar';
import { Provider as PaperProvider } from 'react-native-paper';
import { theme } from './src/styles/theme';
import UserProvider from './src/contexts/UserContext';
import Routes from './src/routes';
import BottomSheetProvider from './src/contexts/BottomSheetContext';
import MonthProvider from './src/contexts/MonthContext';
import { QueryClient, QueryClientProvider } from 'react-query';
import { SafeAreaView } from 'react-native-safe-area-context';

const queryClient = new QueryClient();

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <UserProvider>
        <MonthProvider>
          <QueryClientProvider client={queryClient}>
            <SafeAreaView style={{ flex: 1 }}>
              <BottomSheetProvider>
                <Routes />
                <StatusBar style="auto" />
              </BottomSheetProvider>
            </SafeAreaView>
          </QueryClientProvider>
        </MonthProvider>
      </UserProvider>
    </PaperProvider>
  );
}
