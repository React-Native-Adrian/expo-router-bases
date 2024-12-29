import { router, Stack, useNavigation } from 'expo-router';

import Ionicons from '@expo/vector-icons/Ionicons';
import { DrawerActions } from '@react-navigation/native';

const StackLayout = () => {
  const navigation = useNavigation();

  const onHeaderLeftPress = (canGoBack: boolean) => {
    if (canGoBack) {
      router.back();
      return;
    }

    navigation.dispatch(DrawerActions.toggleDrawer);
  };

  return (
    // router stack
    <Stack
      // para todas las screens
      screenOptions={{
        headerShadowVisible: false,
        contentStyle: {
          backgroundColor: 'white',
        },

        headerLeft: ({ canGoBack }) => (
          <Ionicons
            name={canGoBack ? 'arrow-back-outline' : 'grid-outline'}
            className="mr-5"
            size={20}
            onPress={() => onHeaderLeftPress(!!canGoBack)}
          />
        ),
      }}
    >
      {/* ----- screens registradas en el stack ----- */}
      <Stack.Screen
        name="home/index" // router dir
        options={{
          title: 'Home',
        }}
      />

      <Stack.Screen
        name="products/index" // router dir
        options={{
          title: 'Products',
        }}
      />

      <Stack.Screen
        name="profile/index" // router dir
        options={{
          title: 'Profile',
        }}
      />

      <Stack.Screen
        name="settings/index" // router dir
        options={{
          title: 'Settings',
        }}
      />

      <Stack.Screen
        name="products/[id]" // router dir
        options={{
          title: 'Product',
        }}
      />
    </Stack>
  );
};

export default StackLayout;
