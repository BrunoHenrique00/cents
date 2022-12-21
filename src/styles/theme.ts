import { MD3LightTheme as DefaultTheme } from 'react-native-paper';
import {
  DefaultTheme as NavigationTheme,
  Theme,
} from '@react-navigation/native';

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'green',
    secondary: 'white',
    background: 'green',
    onSurface: 'white',
    backgroundColor: '#0F0F0F',
  },
};

export const navigationTheme: Theme = {
  ...NavigationTheme,
  colors: {
    ...NavigationTheme.colors,
    background: theme.colors.backgroundColor,
  },
};
