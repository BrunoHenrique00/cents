import { useNavigation } from '@react-navigation/native';

const { navigate } = useNavigation();

const goTo = (path: string) => {
  navigate(path as never);
};

export default goTo;
