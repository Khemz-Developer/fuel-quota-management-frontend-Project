import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/Homescreen";
import QRScannerScreen from "../screens/QRScannerScreen";
import StartingScreen from "../screens/StartingScreen";
import SignupScreen from "../screens/SignupScreen";
import ProfileScreen from "../screens/ProfileScreen";
import ScanScreen from "../screens/ScanScreen"; // Import the Scan screen

// Create navigators
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Custom TabBarButton for Scan Icon
const CustomScanButton = ({ children, onPress }) => (
  <TouchableOpacity style={styles.customButtonContainer} onPress={onPress}>
    <View style={styles.customButton}>{children}</View>
  </TouchableOpacity>
);

// Bottom Tabs
function BottomTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#002B5B", // Active tab color
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          height: 60, // Adjust height for custom button spacing
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen
        name="Scan"
        component={ScanScreen} // Connect to the Scan screen
        options={{
          tabBarButton: (props) => (
            <CustomScanButton {...props}>
              <Ionicons name="scan" size={30} color="#fff" />
            </CustomScanButton>
          ),
        }}
      />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default function MainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Starting">
        <Stack.Screen name="Starting" component={StartingScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: "Login" }} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen
          name="Home"
          component={BottomTabs}
          options={{
            title: "Home", // Custom title for the screen
            headerShown: false, // Hide the default header
          }}
        />
        <Stack.Screen name="QRScanner" component={QRScannerScreen} options={{ title: "Scan QR Code" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Styles for the custom scan button
const styles = StyleSheet.create({
  customButtonContainer: {
    top: -30, // Raise the button above the tab bar
    justifyContent: "center",
    alignItems: "center",
  },
  customButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#002B5B",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
});

// // navigation/MainNavigator.js
// import React from "react";
// import { createStackNavigator } from "@react-navigation/stack";
// import { NavigationContainer } from "@react-navigation/native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { Ionicons } from "@expo/vector-icons";

// import LoginScreen from "../screens/LoginScreen";
// import HomeScreen from "../screens/Homescreen";
// import QRScannerScreen from "../screens/QRScannerScreen";
// import StartingScreen from "../screens/StartingScreen";
// import SignupScreen from "../screens/SignupScreen";
// import ProfileScreen from "../screens/ProfileScreen";

// // Create navigators

// const Tab = createBottomTabNavigator();
// const Stack = createStackNavigator();

// // Bottom Tabs
// function BottomTabs() {
//   return (
//     <Tab.Navigator
//       initialRouteName="Home"
//       screenOptions={({ route }) => ({
//         tabBarIcon: ({ focused, color, size }) => {
//           let iconName;
//           if (route.name === "Home") {
//             iconName = focused ? "home" : "home-outline";
//           } else if (route.name === "Profile") {
//             iconName = focused ? "person" : "person-outline";
//           }
//           return <Ionicons name={iconName} size={size} color={color} />;
//         },
//         tabBarActiveTintColor: "#002B5B", // Active tab color
//         tabBarInactiveTintColor: "gray",
//       })}
//     >
//       <Tab.Screen name="Home" component={HomeScreen} />
//       <Tab.Screen name="Profile" component={ProfileScreen} />
//     </Tab.Navigator>
//   );
// }

// export default function MainNavigator() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Starting">
//         <Stack.Screen
//           name="Starting"
//           component={StartingScreen}
//           options={{ headerShown: false }}
//         />
//         <Stack.Screen
//           name="Login"
//           component={LoginScreen}
//           options={{ title: "Login" }}
//         />
//         <Stack.Screen name="Signup" component={SignupScreen} />
//         <Stack.Screen
//           name="Home"
//           component={BottomTabs}
//           options={{
//             title: "Home", // Custom title for the screen
//             headerShown: false, // Hide the default header
//           }}
//         />
//         <Stack.Screen
//           name="QRScanner"
//           component={QRScannerScreen}
//           options={{ title: "Scan QR Code" }}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
