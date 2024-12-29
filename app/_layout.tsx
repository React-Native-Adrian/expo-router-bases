import { View } from 'react-native';

import './global.css';

// router
import { Slot, SplashScreen } from 'expo-router';

// fonts
import { useFonts } from 'expo-font';
import { useEffect } from 'react';
SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [loaded, error] = useFonts({
    'WorkSans-Black': require('../assets/fonts/WorkSans-Black.ttf'),
    'WorkSans-Light': require('../assets/fonts/WorkSans-Light.ttf'),
    'WorkSans-Medium': require('../assets/fonts/WorkSans-Medium.ttf'),
  });

  useEffect(() => {
    if (error) throw error;

    if (loaded) SplashScreen.hideAsync();
  }, [loaded, error]);

  if (!loaded && !error) return null;

  return (
    <View>
      {/* --- ROUTER: app/ --- */}
      <Slot />
    </View>
  );
};

export default RootLayout;
