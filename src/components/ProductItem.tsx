import { StyleSheet, View, Text } from "react-native";
import numeral from "numeral";

function ProductItem(item) {
  return (
    <View style={styles.goalItem}>
      <View style={{ flex: 1 }}>
        <Text style={styles.goalsText}>Name: {item.text.name}</Text>
        <Text style={styles.goalsText}>Brand: {item.text.brand}</Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text style={styles.goalsText}>Quantity: {item.text.quantity}</Text>
        <Text style={styles.goalsText}>Value: {numeral(item.text.value).format('$0.00')}</Text>
      </View>
    </View>
  );
}

export default ProductItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    flexDirection: "row"
  },
  goalsText: {
    color: "white",
  },
});
