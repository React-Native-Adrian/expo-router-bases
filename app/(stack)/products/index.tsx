import { FlatList, Text, View } from 'react-native';

import { products } from '@/store/products.store';
import { Link } from 'expo-router';

const ProductScreen = () => {
  return (
    <View className="flex flex-1 px-4">
      <FlatList
        data={products}
        keyExtractor={item => item.id} // unique key for each item
        renderItem={({ item }) => (
          <View className="mt-10">
            <Text className="text-2xl font-work-black">{item.title}</Text>
            <Text className="mt-2 text-lg text-gray-500">
              {item.description}
            </Text>

            <View className="mt-4 flex flex-row justify-between">
              <Text className="text-xl font-semibold text-gray-700">
                ${item.price.toFixed(2)}
              </Text>

              <Link
                href={`/(stack)/products/${item.id}`}
                className="px-4 py-2 text-primary"
              >
                View Details
              </Link>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default ProductScreen;
