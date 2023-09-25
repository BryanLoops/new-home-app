import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';

import CustomButton from '../../components/PrimaryButton';


type RootStackParamList = {
  Register: undefined;
  Management: undefined;
};

type HomeScreenNavigationProp = NavigationProp<RootStackParamList, 'Register'>;

export default function HomeScreen() {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const navigateToRegister = () => {
    navigation.navigate('Register');
  };

  const navigateToManagement = () => {
    navigation.navigate('Management');
  };

  return (
    <View style={styles.container}>
      <CustomButton title="Register" onPress={navigateToRegister} />
      <CustomButton title="Management" onPress={navigateToManagement} />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
