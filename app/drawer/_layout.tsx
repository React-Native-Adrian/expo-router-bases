import { View, Text } from 'react-native';

import { Drawer } from 'expo-router/drawer';

const DrawerLayout = () => {
  return (
    <Drawer>
      <Drawer.Screen
        name="users/index"
        options={{
          drawerLabel: 'Users',
          title: 'users',
        }}
      />
      <Drawer.Screen
        name="schedule/index"
        options={{
          drawerLabel: 'Schedule',
          title: 'schedule',
        }}
      />
    </Drawer>
  );
};

export default DrawerLayout;
