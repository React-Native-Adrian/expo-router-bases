import { Link } from 'expo-router';
import { View, Text } from 'react-native';

const SettingsScreen = () => {
  return (
    <View>
      <Text>SettingsScreen</Text>

      <Link href="/home">Home</Link>
      <Link href="/products">Products</Link>
      <Link href="/profile">Profile</Link>
    </View>
  );
};

export default SettingsScreen;
