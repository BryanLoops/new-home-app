import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View } from 'react-native';

import DatabaseInit from './src/database/database-init';
import HomeScreen from './src/screens/HomeScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import ManagementScreen from './src/screens/ManagementScreen';
import Teste from './src/screens/TesteDB';

const Stack = createNativeStackNavigator();

export default class App extends React.Component {

  constructor(props) {
    super(props);
    new DatabaseInit
    console.log("initialize database")
  }

  render() {
    return (
      <Teste/>
    );
  }
}
