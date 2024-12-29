import { Link, router } from 'expo-router';
import { SafeAreaView, View } from 'react-native';

import CustomButton from '@/components/shared/CustomButton';

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View className="px-10 mt-5">
        <CustomButton
          label="Products"
          onPress={() => router.push('/products')}
          className="mb-2"
        />

        {/* -------- v2 with link req forwardRef -------- */}
        <Link href="/profile" asChild>
          <CustomButton label="Profile" className="mb-2" />
        </Link>

        {/* -------- variants -------- */}
        <CustomButton
          label="Settings"
          variant="outlined"
          color="tertiary"
          onPress={() => router.push('/settings')}
          className="mb-2"
        />

        <CustomButton
          label="Home"
          variant="text"
          color="tertiary"
          onPress={() => router.push('/home')}
          className="mb-2"
        />

        {/* <Link href="/products">Products</Link>
        <Link href="/profile">Profile</Link>
        <Link href="/settings">Settings</Link> */}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
