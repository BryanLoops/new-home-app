import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View } from 'react-native';

import HomeScreen from './src/screens/HomeScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import ManagementScreen from './src/screens/ManagementScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <View style={{ flex: 1, paddingTop: 32, paddingBottom: 8, paddingHorizontal: 8 }}>
      <View style={{ flex: 2, padding: 8, borderColor: 'grey', borderRadius: 6, borderWidth: 2 }}>
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
        />
        <Stack.Screen
          name="Management"
          component={ManagementScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
        </View>
        </View>
    
  );
}
