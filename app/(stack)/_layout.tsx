import { Stack } from 'expo-router';

const StackLayout = () => {
  return (
    // router stack
    <Stack>
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
    </Stack>
  );
};

export default StackLayout;
