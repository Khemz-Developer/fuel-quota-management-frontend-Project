import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import FuelCapacityChart from '../../components/Home/FuelCapacityChart';
import { useAuth } from '../../app/provider/AuthProvider';

// Define the type for each fuel data item

interface FuelData {
  type: string;
  capacity: number; // Percentage capacity remaining
}

const FuelTypes = () => {
  const { token } = useAuth();
  const [fuelData, setFuelData] = useState([]);

  // Full capacity for each fuel type
  const fullCapacity = {
    dieselQuota: 10000,
    superDieselQuota: 10000,
    petrol92Quota: 10000,
    petrol95Quota: 10000,
  };

  useEffect(() => {
    const fetchFuelData = async () => {
      try {
        const response = await fetch("http://192.168.8.100:8081/api/operators/station-details", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          // Set fuel data with percentage of remaining capacity
          setFuelData([
            { type: 'Diesel', capacity: (data.dieselQuota / fullCapacity.dieselQuota) * 100 },
            { type: 'Super Diesel', capacity: (data.superDieselQuota / fullCapacity.superDieselQuota) * 100 },
            { type: 'Petrol 92', capacity: (data.petrol92Quota / fullCapacity.petrol92Quota) * 100 },
            { type: 'Petrol 95', capacity: (data.petrol95Quota / fullCapacity.petrol95Quota) * 100 },
          ]);
        } else {
          console.error("Failed to fetch fuel data");
        }
      } catch (error) {
        console.error("Error fetching fuel data:", error);
      }
    };

    fetchFuelData();
  }, [token]);

  return (
    <View style={styles.container}>
      {fuelData.map((fuel, index) => (
        <FuelCapacityChart
          key={index}
          fuelType={fuel.type}
          capacity={fuel.capacity} // Passing the remaining capacity percentage
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
});

export default FuelTypes;
