import { useState } from "react";
import { View, TextInput, Text, TouchableOpacity, Modal, Button, StyleSheet } from "react-native";
import PrimaryButton from "./PrimaryButton";


function ProductInput(props) {

  // Dados para formação do ProductItem
  const [enteredProductData, setEnteredProductData] = useState({
    name: "",
    brand: "",
    quantity: "",
    value: "",
  });

  // Dados para controle interno no componente
  const [productName, setProductName] = useState("");
  const [productBrand, setProductBrand] = useState("");
  const [productQuantity, setProductQuantity] = useState("");
  const [productValue, setProductValue] = useState("");

  // Controle da modal
  const [modalVisible, setModalVisible] = useState(false);

  function nameInputHandler(text) {
    setProductName(text);
  }

  function brandInputHandler(text) {
    setProductBrand(text);
  }

  function quantityInputHandler(text) {

    const numericValue = text.replace(/[^0-9]/g, "");

    setProductQuantity(numericValue);
  }

  function valueInputHandler(text) {

    const numericValue = text.replace(/[^0-9,.]/g, "");
    setProductValue(numericValue);
  }

  function setModal() {
    setEnteredProductData((prevData) => ({
      ...prevData,
      name: productName,
      brand: productBrand,
      quantity: productQuantity,
      value: productValue
    }));

    setModalVisible(true);
  }

  function addProductHandler() {
    console.log(enteredProductData);
    props.onAddProduct(enteredProductData);
    setEnteredProductData({ name: "", brand: "", quantity: "", value: "" });
    setModalVisible(false);
  }

  return (
    <View style={styles.inputContainer}>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <View style={{flexDirection: "column"}}>
          <Text style={{ margin: 8, padding: 8, fontSize: 16}}>Nome: </Text>
          <Text style={{ margin: 8, padding: 8, fontSize: 16}}>Marca: </Text>
          <Text style={{ margin: 8, padding: 8, fontSize: 16}}>Quantidade: </Text>
          <Text style={{ margin: 8, padding: 8, fontSize: 16}}>Valor: </Text>
        </View>
        <View style={{flexDirection: "column"}}>

        <TextInput
          style={styles.textInput}
          placeholder="Nome"
          onChangeText={nameInputHandler}
          value={productName}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Marca"
          onChangeText={brandInputHandler}
          value={productBrand}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Quantidade"
          onChangeText={quantityInputHandler}
          keyboardType="numeric"
          value={productQuantity}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Valor unitário"
          onChangeText={valueInputHandler}
          keyboardType="numeric"
          value={productValue}
        />
        </View>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={{ flex: 1, justifyContent: 'flex-end'}}>

            <Text style={{fontSize: 20, color: 'white'}}>Confirmar registro?</Text>
          </View>
            <View style={[styles.modalButtonContainer, { flex: 1, justifyContent: 'flex-start', width: 240}]}>
              <PrimaryButton title="Confirmar" onPress={addProductHandler} />
              <PrimaryButton title="Cancelar" onPress={() => {
                // Adicionar lógica de registro
                setModalVisible(false)
              }} />
            </View>
          
        </View>
      </Modal>
      <View style={styles.buttonContainer}>
        <PrimaryButton title="Adicionar" onPress={setModal} />
      </View>
    </View>
  );
}

export default ProductInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: 'center',
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#606060",
    width: 220,
    marginBottom: 8,
    padding: 8,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalButtonContainer: {
    flexDirection: "row",
    padding: 8,
    marginTop: 16,
    justifyContent: "space-between",
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    position: "relative"
  },
});
