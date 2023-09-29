import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const PrimaryButton = ({ title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button]}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
    button: {
        flex: 1,
        height: 44,
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#606060',
        marginHorizontal: 5,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },
})
