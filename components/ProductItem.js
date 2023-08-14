import { StyleSheet, View, Text } from "react-native";

function ProductItem(props) {
    return (
        <View style={styles.goalItem}>
            <Text style={styles.goalsText}>{JSON.stringify(props)}</Text>
        </View>
    )
}

export default ProductItem;

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
    },
    goalsText: {
        color: 'white',
    }
})