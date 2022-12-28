import { Image } from 'react-native';

export default function LogoCents() {
  return (
    <Image
      source={require('../../assets/Cents.png')}
      style={{
        width: 200,
        height: 200,
        marginTop: -30,
        marginBottom: 30,
        backgroundColor: 'white',
        borderRadius: 100,
      }}
    />
  );
}
