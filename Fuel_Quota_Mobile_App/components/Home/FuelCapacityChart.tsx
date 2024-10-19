import React from 'react';
import { PieChart } from 'react-native-chart-kit';
import { Dimensions, View, Text, StyleSheet } from 'react-native';

const FuelCapacityChart = ({ fuelType, capacity }: { fuelType: string, capacity: number }) => {
  const screenWidth = Dimensions.get('window').width;

  const chartData = [
    {
      name: fuelType,
      capacity,
      color: '#3498db', // Blue color for fuel capacity
      legendFontColor: '#333', // Darker font color for legibility
      legendFontSize: 14,
    },
    {
      name: 'Empty',
      capacity: 100 - capacity, // assuming 100 as full capacity
      color: '#ecf0f1', // Light gray for the empty portion
      legendFontColor: '#999',
      legendFontSize: 14,
    }
  ];

  return (
    <View style={styles.pieContainer}>
      <Text style={styles.pieTitle}>{fuelType} Capacity</Text>
      <PieChart
        data={chartData}
        width={screenWidth - 60}
        height={220}
        chartConfig={{
          color: () => `#000`,
        }}
        accessor={'capacity'}
        backgroundColor={'transparent'}
        paddingLeft={'15'}
        absolute
      />
    </View>
  );
};

const styles = StyleSheet.create({
  pieContainer: {
    alignItems: 'center',
    marginBottom: 25,
    paddingVertical: 20,
    backgroundColor: '#f7f9fc', // Light background to separate sections
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  pieTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 12,
    color: '#2c3e50', // Darker text color
  }
});

export default FuelCapacityChart;
