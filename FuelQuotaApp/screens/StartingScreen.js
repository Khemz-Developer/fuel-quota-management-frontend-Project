// screens/StartingScreen.js
import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const StartingScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Fuel Quota App</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Start"
          onPress={() => navigation.navigate("Login")}
          color="#002B5B"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
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
