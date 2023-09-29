import { useState } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Platform
} from 'react-native';
import 'react-native-get-random-values';
import * as SQLite from 'expo-sqlite';
import { v4 as UUID } from 'uuid';

import ProductInput from '../../components/ProductInput';

export default function RegisterScreen() {

  const [products, setProducts] = useState([]);

  function addProductHandler(enteredProductData) {
    setProducts(currentProducts => [...currentProducts, enteredProductData]);
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
      <ProductInput onAddProduct={addProductHandler} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingHorizontal: 8,
  },
  inputContainer: {
    flex:2,
    paddingTop: 16,
    paddingBottom: 8,
    paddingHorizontal: 8
  },
  goalsContainer: {
    flex: 4,
    borderColor: '#cccccc',
    borderWidth: 2,
    borderRadius: 8
  },
});
