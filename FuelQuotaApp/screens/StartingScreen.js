// screens/StartingScreen.js
import React from "react";
import { View, Text, Button, StyleSheet, ImageBackground } from "react-native";
import { globalStyles } from "../styles/styles";

const StartingScreen = ({ navigation }) => {
  return (
    <View style={globalStyles.container}>
      <Text style={styles.title}>Welcome to Fuel Quota App</Text>
      <View style={styles.buttonContainer}>
        <Button title="Start" onPress={() => navigation.navigate("Login")} color="#002B5B" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 50,
    color: "#002B5B",
  },
  buttonContainer: {
    width: "80%",
  },
});

export default StartingScreen;
