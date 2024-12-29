import { Link } from 'expo-router';
import { View, Text } from 'react-native';

const ProfileScreen = () => {
  return (
    <View>
      <Text>ProfileScreen</Text>

      <Link href="/home">Home</Link>
      <Link href="/products">Products</Link>
      <Link href="/settings">Settings</Link>
    </View>
  );
};

export default ProfileScreen;
