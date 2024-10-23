// import React, { useEffect, useState } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   ActivityIndicator,
//   TextInput,
//   Button,
//   Alert,
// } from "react-native";
// import { useRoute } from "@react-navigation/native";
// import { VehicleDetailsRouteProp } from "../../../constants/Types"; // Import the type
// import { Colors } from "../../../constants/Colors";

// type VehicleDetails = {
//   fuelType: string;
//   maxFuel: number;
//   usedFuelCapacity: number;
//   availableFuel: number;
// };

// const VehicleDetailsScreen = () => {
//   const route = useRoute<VehicleDetailsRouteProp>();
//   const { vehicleNumber } = route.params;
//   const [vehicleDetails, setVehicleDetails] = useState<VehicleDetails | null>(
//     null
//   );
//   const [fuelToPump, setFuelToPump] = useState(""); // State to hold input value
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchVehicleDetails = async () => {
//       setTimeout(() => {
//         const details: VehicleDetails = {
//           fuelType: "Diesel",
//           maxFuel: 120, // Liters,
//           usedFuelCapacity: 50, // Liters
//           availableFuel: 70, // Liters
//         };
//         setVehicleDetails(details);
//         setLoading(false);
//       }, 2000);
//     };

//     fetchVehicleDetails();
//   }, [vehicleNumber]);

//   const handlePumpFuel = () => {
//     const fuelValue = parseFloat(fuelToPump);
//     if (fuelValue > vehicleDetails?.availableFuel!) {
//       Alert.alert("Error", "Cannot pump more fuel than available.");
//     } else {
//       Alert.alert("Success", `Pumped ${fuelValue} liters of fuel.`);
//       // Logic to update the fuel values can be implemented here
//     }
//     setFuelToPump(""); // Reset the input field after submission
//   };

//   if (loading) {
//     return (
//       <View style={styles.loadingContainer}>
//         <ActivityIndicator size="large" color="#007bff" />
//       </View>
//     );
//   }

//   const isPumpDisabled = vehicleDetails?.availableFuel === 0;

//   return (
//     <View style={styles.container}>
      
//       <View style={styles.detailsContainer}>
//         <Text style={styles.title}>Vehicle Details</Text>
//         <Text style={styles.detail}>
//           Vehicle Number: <Text style={styles.value}>{vehicleNumber}</Text>
//         </Text>
//         <Text style={styles.detail}>
//           Fuel Type:{" "}
//           <Text style={styles.value}>{vehicleDetails?.fuelType}</Text>
//         </Text>
//         <Text style={styles.detail}>
//           Max Capacity Per Week:{" "}
//           <Text style={styles.value}>{vehicleDetails?.maxFuel} liters</Text>
//         </Text>
//         <Text style={styles.detail}>
//           Used Capacity Per Week:{" "}
//           <Text style={styles.value}>
//             {vehicleDetails?.usedFuelCapacity} liters
//           </Text>
//         </Text>
//         <Text style={styles.detail}>
//           Available Fuel Capacity Per Week:{" "}
//           <Text style={styles.value}>
//             {vehicleDetails?.availableFuel} liters
//           </Text>
//         </Text>

//         {/* Input for Fuel Pumping */}
//         <TextInput
//           style={styles.input}
//           placeholder="Enter fuel to pump (liters)"
//           keyboardType="numeric"
//           value={fuelToPump}
//           onChangeText={setFuelToPump}
//           editable={!isPumpDisabled} // Disable input if fuel is 0
//         />

//         {/* Submit Button */}
//         <Button
//           title="Pump Fuel"
//           onPress={handlePumpFuel}
//           disabled={isPumpDisabled} // Disable button if fuel is 0
//           color={Colors.PRIMARY}

//         />

//         {isPumpDisabled && (
//           <Text style={styles.errorText}>No available fuel to pump.</Text>
//         )}
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#f0f4f8",
//     justifyContent: "center",
//     alignItems: "center",
//     padding: 20,
//   },
//   title: {
//     fontSize: 26,
//     fontWeight: "bold",
//     color: Colors.PRIMARY,
//     marginBottom: 20,
//     textAlign: "center",
//     textTransform: "uppercase",
//   },
//   detailsContainer: {
//     backgroundColor: "#fff",
//     padding: 30,
//     borderRadius: 10,
//     width: "90%",
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.25,
//     shadowRadius: 6,
//     elevation: 6,
//     marginTop: 10,
//   },
//   detail: {
//     fontSize: 16,
//     fontWeight: "600",
//     marginBottom: 10,
//     color: "#444",
//     lineHeight: 24,
//   },
//   value: {
//     fontWeight: "medium",
//     color: Colors.GRAY,
//   },
//   input: {
//     height: 50,
//     borderColor: Colors.GRAY,
//     borderWidth: 1,
//     marginTop: 15,
//     marginBottom: 20,
//     paddingHorizontal: 10,
//     width: "100%",
//     borderRadius: 8,
//     backgroundColor: "#f8f9fa",
//     fontSize: 15,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   errorText: {
//     color: "red",
//     marginTop: 10,
//     fontSize: 14,
//     fontWeight: "600",
//     textAlign: "center",
//   },
//   buttonContainer: {
//     marginTop: 20,
//     borderRadius: 8,
//     overflow: "hidden",
//     paddingVertical: 10,
//   },
//   loadingContainer: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });

// export default VehicleDetailsScreen;


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
import { useRoute, useNavigation } from "@react-navigation/native"; // Import useNavigation
import { VehicleDetailsRouteProp } from "../../../constants/Types"; // Import the type
import { Colors } from "../../../constants/Colors";

type VehicleDetails = {
  fuelType: string;
  maxFuel: number;
  usedFuelCapacity: number;
  availableFuel: number;
};

const VehicleDetailsScreen = () => {
  const route = useRoute<VehicleDetailsRouteProp>();
  const { vehicleNumber } = route.params;
  const navigation = useNavigation(); // Initialize navigation
  const [vehicleDetails, setVehicleDetails] = useState<VehicleDetails | null>(
    null
  );
  const [fuelToPump, setFuelToPump] = useState(""); // State to hold input value
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVehicleDetails = async () => {
      setTimeout(() => {
        const details: VehicleDetails = {
          fuelType: "Diesel",
          maxFuel: 120, // Liters,
          usedFuelCapacity: 50, // Liters
          availableFuel: 70, // Liters
        };
        setVehicleDetails(details);
        setLoading(false);
      }, 2000);
    };

    fetchVehicleDetails();
  }, [vehicleNumber]);

  const handlePumpFuel = () => {
    const fuelValue = parseFloat(fuelToPump);
    if (fuelValue > vehicleDetails?.availableFuel!) {
      Alert.alert("Error", "Cannot pump more fuel than available.");
    } else {
      Alert.alert("Success", `Pumped ${fuelValue} liters of fuel.`);
      // Logic to update the fuel values can be implemented here

      // Navigate back to the QR scanner screen (index.tsx)
      navigation.goBack(); // This will navigate back to the previous screen
    }
    setFuelToPump(""); // Reset the input field after submission
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#007bff" />
      </View>
    );
  }

  const isPumpDisabled = vehicleDetails?.availableFuel === 0;

  return (
    <View style={styles.container}>
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>Vehicle Details</Text>
        <Text style={styles.detail}>
          Vehicle Number: <Text style={styles.value}>{vehicleNumber}</Text>
        </Text>
        <Text style={styles.detail}>
          Fuel Type: <Text style={styles.value}>{vehicleDetails?.fuelType}</Text>
        </Text>
        <Text style={styles.detail}>
          Max Capacity Per Week:{" "}
          <Text style={styles.value}>{vehicleDetails?.maxFuel} liters</Text>
        </Text>
        <Text style={styles.detail}>
          Used Capacity Per Week:{" "}
          <Text style={styles.value}>
            {vehicleDetails?.usedFuelCapacity} liters
          </Text>
        </Text>
        <Text style={styles.detail}>
          Available Fuel Capacity Per Week:{" "}
          <Text style={styles.value}>
            {vehicleDetails?.availableFuel} liters
          </Text>
        </Text>

        {/* Input for Fuel Pumping */}
        <TextInput
          style={styles.input}
          placeholder="Enter fuel to pump (liters)"
          keyboardType="numeric"
          value={fuelToPump}
          onChangeText={setFuelToPump}
          editable={!isPumpDisabled} // Disable input if fuel is 0
        />

        {/* Submit Button */}
        <Button
          title="Pump Fuel"
          onPress={handlePumpFuel}
          disabled={isPumpDisabled} // Disable button if fuel is 0
          color={Colors.PRIMARY}
        />

        {isPumpDisabled && (
          <Text style={styles.errorText}>No available fuel to pump.</Text>
        )}
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
