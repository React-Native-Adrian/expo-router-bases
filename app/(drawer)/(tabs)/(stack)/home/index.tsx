import { Link, router, useNavigation } from 'expo-router';
import { SafeAreaView, View } from 'react-native';

import CustomButton from '@/components/shared/CustomButton';
import { DrawerActions } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  const onToggleDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer);
  };

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
          <CustomButton label="Profile" className="mb-2" color="secondary" />
        </Link>

        {/* -------- variants -------- */}
        <CustomButton
          label="Settings"
          variant="outlined"
          color="primary"
          onPress={() => router.push('/settings')}
          className="mb-2"
        />

        <CustomButton
          label="OPEN MENU"
          variant="text"
          onPress={onToggleDrawer}
          color="tertiary"
          textClassName="mt-6 text-lg font-work-medium"
        />

        {/* <Link href="/products">Products</Link>
        <Link href="/profile">Profile</Link>
        <Link href="/settings">Settings</Link> */}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
