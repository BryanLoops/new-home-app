import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { v4 as UUID } from 'uuid';

import ProductItem from '../../components/ProductItem';
import ProductInput from '../../components/ProductInput';

interface ProductData {
  id: string;
  text: string;
}

const RegisterScreen: React.FC = () => {
  const [products, setProducts] = useState<ProductData[]>([]);

  const addProductHandler = (enteredProductData: string) => {
    const newProduct: ProductData = { id: UUID(), text: enteredProductData };
    setProducts(currentProducts => [...currentProducts, newProduct]);
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <ProductInput onAddProduct={addProductHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <FlatList
          data={products}
          renderItem={itemData => <ProductItem text={itemData.item.text} />}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingHorizontal: 8,
  },
  inputContainer: {
    flex: 2,
    paddingTop: 16,
    paddingBottom: 8,
    paddingHorizontal: 8,
  },
  goalsContainer: {
    flex: 4,
    borderColor: '#cccccc',
    borderWidth: 2,
    borderRadius: 8,
  },
});

export default RegisterScreen;
