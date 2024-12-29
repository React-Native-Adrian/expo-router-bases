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

  // --- ROUTER: app/ - Slot like Outlet in react-router-dom ---
  // return <Slot />;

  // --- ROUTER: app/ - StackNavigator ---
  // return <Stack />;
  return <Slot />; // Stack gestionado en app/(stack)/_layout.tsx
};

export default RootLayout;
