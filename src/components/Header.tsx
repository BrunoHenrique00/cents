import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  return (
    <View style={styles.container}>
      <Text variant="headlineSmall">{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
});

export default Header;
