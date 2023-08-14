import { useState } from 'react';
import {
  StyleSheet,
  View,
  FlatList
} from 'react-native';
import 'react-native-get-random-values';
import { v4 as UUID } from 'uuid';

import ProductItem from './components/ProductItem';
import ProductInput from './components/ProductInput';

export default function App() {

  const [products, setProducts] = useState([]);

  function addProductHandler(enteredProductData) {
    setProducts(currentProducts => [...currentProducts, enteredProductData]);
  };

  return (
    <View style={styles.appContainer}>
      <ProductInput onAddProduct={addProductHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={products}
          renderItem={(itemData) => {
            return (
              <ProductItem text={itemData.item.name} />
            );
          }}
          
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },
});
