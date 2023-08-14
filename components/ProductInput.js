import { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

function ProductInput(props) {
   const [enteredProductData, setEnteredProductData] = useState({ name: '', brand: '', quantity: '', value: '' });

   function nameInputHandler(text) {
      setEnteredProductData((prevData) => ({
         ...prevData,
         name: text,
      }));
   }

   function brandInputHandler(text) {
      setEnteredProductData((prevData) => ({
         ...prevData,
         brand: text,
      }));
   }

   function quantityInputHandler(text) {
      setEnteredProductData((prevData) => ({
         ...prevData,
         quantity: text,
      }));
   }

   function valueInputHandler(text) {
      setEnteredProductData((prevData) => ({
         ...prevData,
         value: text,
      }));
   }

   function addProductHandler() {
      props.onAddProduct(enteredProductData);
      setEnteredProductData({ name: '', brand: '', quantity: '', value: '' });
   }

   return (
      <View style={styles.inputContainer}>
         <View style={{ flex: 1, flexDirection: 'column' }}>
            <TextInput
               style={styles.textInput}
               placeholder='Nome'
               onChangeText={nameInputHandler}
               value={enteredProductData.name}
            />
            <TextInput
               style={styles.textInput}
               placeholder='Marca'
               onChangeText={brandInputHandler}
               value={enteredProductData.brand}
            />
            <TextInput
               style={styles.textInput}
               placeholder='Quantidade'
               onChangeText={quantityInputHandler}
               value={enteredProductData.quantity}
            />
            <TextInput
               style={styles.textInput}
               placeholder='Valor unitário'
               onChangeText={valueInputHandler}
               value={enteredProductData.value}
            />
         </View>
         <Button title='Adicionar' onPress={addProductHandler} />
      </View>
   );
}

export default ProductInput;

const styles = StyleSheet.create({
   inputContainer: {
      flex: 2,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
   },
   textInput: {
      borderWidth: 1,
      borderColor: '#cccccc',
      width: '80%',
      marginBottom: 8,
      padding: 8,
   },
});
