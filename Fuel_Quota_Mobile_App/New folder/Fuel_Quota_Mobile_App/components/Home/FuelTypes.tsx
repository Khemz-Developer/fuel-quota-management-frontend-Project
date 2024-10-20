import React from 'react';
import { View , StyleSheet } from 'react-native';
import FuelCapacityChart from '../../components/Home/FuelCapacityChart';

const FuelTypes = () => {
    const fuelData = [
      { type: 'Petrol', capacity: 60 },
      { type: 'Diesel', capacity: 80 },
      { type: 'Kerosene', capacity: 40 },
    ];
  
    return (
      <View style={styles.container}>
        {fuelData.map((fuel, index) => (
          <FuelCapacityChart
            key={index}
            fuelType={fuel.type}
            capacity={fuel.capacity}
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