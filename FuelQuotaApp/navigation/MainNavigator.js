// navigation/MainNavigator.js
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/Homescreen";
import QRScannerScreen from "../screens/QRScannerScreen";
import StartingScreen from "../screens/StartingScreen";
import SignupScreen from "../screens/SignupScreen";

const Stack = createStackNavigator();

export default function MainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Starting">
        <Stack.Screen
          name="Starting"
          component={StartingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: "Login" }}
        />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Home" }}
        />
        <Stack.Screen
          name="QRScanner"
          component={QRScannerScreen}
          options={{ title: "Scan QR Code" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
