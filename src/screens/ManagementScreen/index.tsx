import { useState } from 'react';
import {
  TextInput,
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';
import 'react-native-get-random-values';
import { v4 as UUID } from 'uuid';

import ProductItem from '../../components/ProductItem';
import PrimaryButton from '../../components/PrimaryButton';

export default function ManagementScreen() {

  const [products, setProducts] = useState([]);

  function addProductHandler(enteredProductData) {
    setProducts(currentProducts => [...currentProducts, enteredProductData]);
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
      <Text>Descritor para busca</Text>
      <TextInput
          style={styles.textInput}
          placeholder="Valor unitário"
          keyboardType="numeric"
        />
      <View style={styles.buttonContainer}>

      <PrimaryButton title={"Buscar"} onPress={console.log("Apertou")}/>
      </View>
      </View>
      <View style={styles.goalsContainer}>
        <FlatList
          data={products}
          renderItem={(itemData) => {
            return (
              <ProductItem text={itemData.item} />
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
  buttonContainer: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#606060",
    width: "auto",
    marginBottom: 8,
    padding: 8,
  },
});
