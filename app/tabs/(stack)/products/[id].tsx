import { Redirect, useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';

import { products } from '@/store/products.store';

const ProductScreen = () => {
  const { id } = useLocalSearchParams();

  const producto = products.find(p => p.id === id);
  if (!producto) return <Redirect href="/" />;

  return (
    <View className="px-5 mt-3">
      <Text className="text-2xl font-work-black">{producto.title}</Text>
      <Text className="mt-2 text-lg text-gray-500">{producto.description}</Text>
      <Text className="mt-4 text-xl font-semibold text-gray-700">
        ${producto.price.toFixed(2)}
      </Text>
    </View>
  );
};

export default ProductScreen;