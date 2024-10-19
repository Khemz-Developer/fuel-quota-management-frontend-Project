import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import FuelStationInfo from '../../../components/Home/FuelStationInfo';
import FuelTypes from '../../../components/Home/FuelTypes';

const Index = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
    <FuelStationInfo stationName="Central Fuel Station" licenseNumber="ABC123456" />
    <FuelTypes />
  </ScrollView>
  );
};

const styles = StyleSheet.create({
    container: {
      padding: 20,
      backgroundColor: '#f4f6f9', // Light background to separate from elements
      flexGrow: 1,
    },
  });

export default Index;
