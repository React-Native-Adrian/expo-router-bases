import { Link } from 'expo-router';
import { View, Text, SafeAreaView } from 'react-native';

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>Home</Text>

        <Link href="/products">Products</Link>
        <Link href="/profile">Profile</Link>
        <Link href="/settings">Settings</Link>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
