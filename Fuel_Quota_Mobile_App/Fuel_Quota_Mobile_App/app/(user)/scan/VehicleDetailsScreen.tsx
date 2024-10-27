import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  TextInput,
  Button,
  Alert,
} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { useAuth } from "../../provider/AuthProvider"; // Adjust the import path to your AuthProvider
import { Colors } from "../../../constants/Colors";

type VehicleDetails = {
  registrationNumber: string;
  fuelType: string;
  allowedWeeklyCapacity: number;
  remainingQuota: number;
};

const VehicleDetailsScreen = () => {
  const route = useRoute();
  const { vehicleNumber } = route.params as { vehicleNumber: string };
  const navigation = useNavigation();
  const { token } = useAuth(); // Use token from AuthProvider
  const [vehicleDetails, setVehicleDetails] = useState<VehicleDetails | null>(
    null
  );
  const [fuelToPump, setFuelToPump] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVehicleDetails = async () => {
      try {
        const response = await fetch(
          "http://192.168.8.100:8081/api/operators/vehicle-details",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ registrationNumber: vehicleNumber }),
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch vehicle details");
        }

        const data = await response.json();
        setVehicleDetails(data);
      } catch (error) {
        Alert.alert("Error", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchVehicleDetails();
  }, [vehicleNumber]);


  const pumpFuel = async () => {
    try {
      const response = await fetch(
        "http://192.168.8.100:8081/api/operators/pump-fuel",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // Add Bearer token here
          },
          body: JSON.stringify({
            registrationNumber: vehicleDetails?.registrationNumber,
            litersPumped: parseFloat(fuelToPump),
            fuelType: vehicleDetails?.fuelType,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to pump fuel");
      }

      const data = await response.json();
      Alert.alert("Success", `Successfully pumped ${fuelToPump} liters.`);
      setFuelToPump(""); // Clear the input after successful pumping
    } catch (error) {
      Alert.alert("Error", error.message);
    }
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#007bff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>Vehicle Details</Text>

        <Text style={styles.detail}>
          Vehicle Registration Number:{" "}
          <Text style={styles.value}>{vehicleDetails?.registrationNumber}</Text>
        </Text>
        <Text style={styles.detail}>
          Fuel Type:{" "}
          <Text style={styles.value}>{vehicleDetails?.fuelType}</Text>
        </Text>
        <Text style={styles.detail}>
          Allowed Weekly Capacity:{" "}
          <Text style={styles.value}>
            {vehicleDetails?.allowedWeeklyCapacity} liters
          </Text>
        </Text>
        <Text style={styles.detail}>
          Remaining Quota:{" "}
          <Text style={styles.value}>
            {vehicleDetails?.remainingQuota} liters
          </Text>
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Enter fuel to pump (liters)"
          keyboardType="numeric"
          value={fuelToPump}
          onChangeText={(text) => {
            const value = parseFloat(text);
            if (
              !isNaN(value) &&
              value > (vehicleDetails?.remainingQuota ?? 0)
            ) {
              Alert.alert(
                "Invalid Input",
                "Fuel amount cannot exceed the remaining quota."
              );
              setFuelToPump(vehicleDetails?.remainingQuota.toString() ?? "");
            } else {
              setFuelToPump(text);
            }
          }}
        />
        <Button
          title="Pump Fuel"
          onPress={pumpFuel} // Call the pumpFuel function on press
          color={Colors.PRIMARY}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f4f8",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: Colors.PRIMARY,
    marginBottom: 20,
    textAlign: "center",
    textTransform: "uppercase",
  },
  detailsContainer: {
    backgroundColor: "#fff",
    padding: 30,
    borderRadius: 10,
    width: "90%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 6,
    marginTop: 10,
  },
  detail: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 10,
    color: "#444",
    lineHeight: 24,
  },
  value: {
    fontWeight: "medium",
    color: Colors.GRAY,
  },
  input: {
    height: 50,
    borderColor: Colors.GRAY,
    borderWidth: 1,
    marginTop: 15,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: "100%",
    borderRadius: 8,
    backgroundColor: "#f8f9fa",
    fontSize: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  errorText: {
    color: "red",
    marginTop: 10,
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
  },
  buttonContainer: {
    marginTop: 20,
    borderRadius: 8,
    overflow: "hidden",
    paddingVertical: 10,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default VehicleDetailsScreen;
