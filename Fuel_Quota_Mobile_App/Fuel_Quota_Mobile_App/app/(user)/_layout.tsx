// import React from "react";
// import FontAwesome from "@expo/vector-icons/FontAwesome";
// import AntDesign from '@expo/vector-icons/AntDesign';
// import {  Tabs } from "expo-router";
// import { Pressable } from "react-native";
// import Entypo from '@expo/vector-icons/Entypo';
// import { StyleSheet } from "react-native";

// import { Colors } from "../../constants/Colors";

// // You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
// function TabBarIcon(props: {
//   name: React.ComponentProps<typeof FontAwesome>["name"];
//   color: string;
// }) {
//   return <FontAwesome size={20} style={{ marginBottom: -3 }} {...props} />;
// }

// export default function TabLayout() {
//   return (
//     <Tabs screenOptions={{
//       tabBarActiveTintColor: Colors.PRIMARY,
//       tabBarStyle: styles.tabBarStyle, 
//     }}>
//       <Tabs.Screen name="index" options={{ href: null }} />

//       <Tabs.Screen
//         name="home"
//         options={{
//           title: "Home",
//           headerShown: false,
//           tabBarIcon: ({ color }) => (
//             <Entypo name="home" size={24} color={color}  style={styles.iconStyle} />
//           ),
//         }}
//       />

//       <Tabs.Screen
//         name="scan"
//         options={{
//           title: "Scan",
//           headerShown: false,
//           tabBarIcon: ({ color }) => (
//             <AntDesign name="qrcode" size={24} color={color}  style={styles.iconStyle} />
//           ),
//         }}
//       />

//       <Tabs.Screen
//         name="profile"
//         options={{
//           title: "Profile",
//           headerShown: false,
//           tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color}  style={styles.iconStyle} />,
//         }}
//       />
//     </Tabs>
//   );
// }

// const styles = StyleSheet.create({
//   tabBarStyle: {
//     //backgroundColor: Colors.light, // Tab bar background color
//     borderTopWidth: 0, // Remove top border
//     elevation: 10, // Add shadow for Android
//     shadowColor: '#000', // Shadow color for iOS
//     shadowOffset: { width: 0, height: -3 }, // Shadow offset
//     shadowOpacity: 0.1, // Shadow opacity
//     shadowRadius: 5, // Shadow radius
//     height: 60, // Tab bar height

//   },
//   tabBarLabelStyle: {
//     fontSize: 14, // Label font size
//     fontWeight: '600', // Label font weight
//     marginBottom: 0, // Margin below the text for spacing
//   },
//   iconStyle: {
//     padding: 5, // Add padding around icons
//     borderRadius: 50, // Rounded icon background
//     backgroundColor: 'rgba(0, 0, 0, 0.1)', // Light background color for icons
//     marginBottom: 2, // Margin below icons
//     //transition: 'all 0.3s ease-in-out', // Smooth transition on icon click
//   },
// });

import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Tabs } from "expo-router";
import { View, StyleSheet } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import { Colors } from "../../constants/Colors";

// Custom TabBarIcon component for user icon
function TabBarIcon(props) {
  return <FontAwesome size={20} style={{ marginBottom: -3 }} {...props} />;
}

// Main TabLayout component
export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.PRIMARY,
        tabBarStyle: styles.tabBarStyle,
        tabBarShowLabel: false, // Hide default labels
      }}
    >
      <Tabs.Screen name="index" options={{ href: null }} />

      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <View style={styles.iconContainer}>
              <Entypo name="home" size={24} color={color} style={styles.iconStyle} />
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="scan"
        options={{
          title: "Scan",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <View style={styles.iconContainer}>
              <AntDesign name="qrcode" size={24} color={color} style={styles.iconStyle} />
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <View style={styles.iconContainer}>
              <TabBarIcon name="user" color={color} style={styles.iconStyle} />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}

// Styles for the tab bar
const styles = StyleSheet.create({
  tabBarStyle: {
    borderTopWidth: 0, // Remove top border
    elevation: 10, // Add shadow for Android
    shadowColor: '#000', // Shadow color for iOS
    shadowOffset: { width: 0, height: -3 }, // Shadow offset
    shadowOpacity: 0.1, // Shadow opacity
    shadowRadius: 5, // Shadow radius
    height: 55, // Adjust height as needed
    backgroundColor: '#F8F7FB', // Tab bar background color
    flexDirection: 'row', // Align items in a row
    justifyContent: 'space-around', // Distribute space evenly
     
  },
  iconContainer: {
    alignItems: 'center', // Center the icon
    justifyContent: 'center', // Center the icon
    width: '60%', // Width of each icon container
    
  },
  iconStyle: {
    padding: 8, // Add padding around icons
    borderRadius: 50, // Rounded icon background
    backgroundColor: 'rgba(0, 0, 0, 0.1)', // Light background color for icons
    marginBottom: 1, // Margin below icons
  },
});
