// screens/ScanScreen.js
import React, { useState, useEffect } from "react";
import { View, Button, StyleSheet, Text } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";

export default function ScanScreen({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.cameraView}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
        {scanned && <Button title="Tap to Scan Again" onPress={() => setScanned(false)} />}
      </View>

      <View style={styles.exitContainer}>
        <View style={styles.exitButton}>
          <Button title="Exit" onPress={() => navigation.navigate("Home")} color="#002B5B" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center", // Center vertically
    alignItems: "center", // Center horizontally
    backgroundColor: "#fff", // Optional: Set a background color for the whole view
  },
  cameraView: {
    width: 250, // Width of the square
    height: 250, // Height of the square (same as width to make it square)
    borderWidth: 2, // Border thickness
    borderColor: "#002B5B", // Navy blue border color
    borderRadius: 10, // Slight rounding of the corners
    justifyContent: "center",
    alignItems: "center",
  },
  exitContainer: {
    position: "absolute",
    bottom: 120,
    width: "100%",
    alignItems: "center",
  },
  exitButton: {
    width: "30%", // Adjust the width as needed
  },
});
