import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { View, Text } from 'react-native';

interface CustomDrawerProps extends DrawerContentComponentProps {}

const CustomDrawer = (props: CustomDrawerProps) => {
  return (
    <DrawerContentScrollView scrollEnabled={false} {...props}>
      <View className="flex justify-center items-center mx-3 p-10 mb-10 h-[150px] rounded-xl bg-primary">
        <View className="flex justify-center items-center bg-white rounded-full h-24 w-24">
          <Text className="text-primary font-work-black text-3xl">AC</Text>
        </View>
      </View>

      {/* ------------ Drawer Items (NavItems) ------------ */}
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
