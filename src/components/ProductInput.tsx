import { useState } from "react";
import { View, TextInput, Text, TouchableOpacity, Modal, Button, StyleSheet } from "react-native";
import CustomButton from "./CustomButton";


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
      <View style={{ flex: 1, flexDirection: "column" }}>
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
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text>This is a centered modal!</Text>
            <View style={[styles.buttonContainer, {width: 240}]}>
              <CustomButton title="Confirmar" onPress={addProductHandler} />
              <CustomButton title="Cancelar" onPress={() => {
                // Perform confirm action here
                setModalVisible(false)
              }} />
            </View>
          </View>
        </View>
      </Modal>
      <View style={styles.buttonContainer}>
        <CustomButton title="Adicionar" onPress={setModal} />
      </View>
    </View>
  );
}

export default ProductInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "96%",
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
    width: 120,
    flexDirection: "row",
  },
});
