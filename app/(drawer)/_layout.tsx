import Ionicons from '@expo/vector-icons/Ionicons';
import { Drawer } from 'expo-router/drawer';

import CustomDrawer from '../components/shared/CustomDrawer';

const DrawerLayout = () => {
  return (
    <Drawer
      screenOptions={{
        headerShown: false, // ocultar header

        overlayColor: 'rgba(0, 0, 0, 0.4)',
        drawerActiveTintColor: 'indigo',

        headerShadowVisible: false,

        sceneStyle: {
          backgroundColor: 'white',
        },
      }}
      // custom drawer content q x props recibe el menu
      drawerContent={CustomDrawer}
    >
      <Drawer.Screen
        name="(tabs)"
        options={{
          drawerLabel: 'Tabs',
          title: 'tabs',

          drawerIcon: ({ color, size }) => (
            <Ionicons name="apps-outline" color={color} size={size} />
          ),
        }}
      />

      <Drawer.Screen
        name="users/index"
        options={{
          drawerLabel: 'Users',
          title: 'users',

          drawerIcon: ({ color, size }) => (
            <Ionicons name="person-circle-outline" color={color} size={size} />
          ),
        }}
      />

      <Drawer.Screen
        name="schedule/index"
        options={{
          drawerLabel: 'Schedule',
          title: 'schedule',

          drawerIcon: ({ color, size }) => (
            <Ionicons name="calendar" color={color} size={size} />
          ),
        }}
      />
    </Drawer>
  );
};

export default DrawerLayout;
