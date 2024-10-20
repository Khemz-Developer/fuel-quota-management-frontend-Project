import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { VehicleDetailsRouteProp } from "../../../constants/Types"; // Import the type
import { RouteProp, useRoute } from "@react-navigation/native";


type VehicleDetails = {
    fuelType: string;
    availableFuel: number;
    maxFuel: number;
  };

const VehicleDetailsScreen = () => {
  const route = useRoute<VehicleDetailsRouteProp>();

  const { vehicleNumber } = route.params; // Get the vehicle number from the QR scan
  const [vehicleDetails, setVehicleDetails] = useState<VehicleDetails | null>(null);
  const [loading, setLoading] = useState(true);

  // Mock fetch vehicle details (replace with actual API call)
  useEffect(() => {
    const fetchVehicleDetails = async () => {
      // Simulate API call delay
      setTimeout(() => {
        // Replace with real data fetching logic
        const details :VehicleDetails = {
          fuelType: "Diesel",
          availableFuel: 50, // Liters
          maxFuel: 100, // Liters
        };
        setVehicleDetails(details );
        setLoading(false);
      }, 2000); // Simulated delay
    };

    fetchVehicleDetails();
  }, [vehicleNumber]);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Vehicle Details</Text>
      <Text style={styles.detail}>Vehicle Number: {vehicleNumber}</Text>
      <Text style={styles.detail}>Fuel Type: {vehicleDetails?.fuelType}</Text>
      <Text style={styles.detail}>
        Available Fuel: {vehicleDetails?.availableFuel} liters
      </Text>
      <Text style={styles.detail}>
        Max Capacity: {vehicleDetails?.maxFuel} liters
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  detail: {
    fontSize: 18,
    marginVertical: 8,
  },
});

export default VehicleDetailsScreen;
