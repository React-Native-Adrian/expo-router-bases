import { Redirect } from 'expo-router';

const App = () => {
  // return <Redirect href="/home" />;
  // return <Redirect href="/tabs/home" />;

  // // // los separadores son opcionales en la ruta: '/(drawer)/(tabs)/(stack)/home' === '/home'
  // return <Redirect href="/(drawer)/(tabs)/(stack)/home" />;
  return <Redirect href="/home" />;

  // docs :p
  // return (
  //   <SafeAreaView>
  //     <View className="mt-6 mx-2.5">
  //       <Text className="text-3xl font-work-black text-center text-primary">
  //         Hello, World!
  //       </Text>

  //       <Text className="text-xl font-work-medium text-secondary-100 text-center">
  //         Welcome to your new Expo app.
  //       </Text>

  //       <Text className="text-lg font-work-light text-center text-tertiary">
  //         Open up App.tsx to start working on your app!
  //       </Text>

  //       {/* router */}
  //       <Link
  //         href="/products"
  //         className="text-center text-primary font-work-medium text-lg mt-4"
  //       >
  //         Go to Products
  //       </Link>
  //     </View>
  //   </SafeAreaView>
  // );
};

export default App;
