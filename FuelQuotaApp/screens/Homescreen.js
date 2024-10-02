// screens/HomeScreen.js
import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Button
        title="Scan QR Code"
        onPress={() => navigation.navigate("QRScanner")}
        color="#001f3f"
      />
      <Text style={styles.settings}>☰ Settings</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  settings: {
    position: "absolute", // Free positioning
    top: 20, // Distance from the top
    left: 20, // Distance from the left (upper left corner)
    fontSize: 24,
    color: "#002B5B",
  },
});
