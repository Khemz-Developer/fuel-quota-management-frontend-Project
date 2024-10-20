
import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import QRScannerScreen from '../scan/index'; // Scanner screen
import VehicleDetailsScreen from '../scan/VehicleDetailsScreen'; // New page to display details

const Stack = createStackNavigator();

function HomeStack() {
  return (
  
    <Stack.Navigator initialRouteName="index">
      <Stack.Screen name="index" component={QRScannerScreen} options={{ title: 'Scan QR Code' }} />
      <Stack.Screen 
        name="VehicleDetails" 
        options={{ title: 'Vehicle Details' }} 
        component={VehicleDetailsScreen} 
      />
    </Stack.Navigator>
    
  );
}

export default HomeStack;
