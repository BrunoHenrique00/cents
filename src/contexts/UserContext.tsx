import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

type UserProps = FirebaseAuthTypes.User | null;

interface UserContextProps {
  user: UserProps;
  setUser: React.Dispatch<React.SetStateAction<UserProps>>;
}

const UserContext = createContext<UserContextProps>({} as UserContextProps);

const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserProps>(null);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(setUser);

    return subscriber;
  }, []);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

export function useUser() {
  return useContext(UserContext);
}
