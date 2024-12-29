import { Link } from 'expo-router';
import { View, Text } from 'react-native';

const ProductScreen = () => {
  return (
    <View>
      <Text>ProductScreen</Text>

      <Link href="/home">Home</Link>
      <Link href="/profile">Profile</Link>
      <Link href="/settings">Settings</Link>
    </View>
  );
};

export default ProductScreen;
