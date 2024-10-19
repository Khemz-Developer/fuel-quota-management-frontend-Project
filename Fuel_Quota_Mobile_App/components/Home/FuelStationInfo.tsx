import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const FuelStationInfo = ({ stationName, licenseNumber }: { stationName: string, licenseNumber: string }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.stationName}>{stationName}</Text>
      <Text style={styles.licenseNumber}>License No: {licenseNumber}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    marginTop: 40,
    padding: 20,
    backgroundColor: '#1abc9c', // Aqua background for a refreshing look
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  stationName: {
    fontSize: 28,
    fontWeight: '700',
    color: '#fff', // White text for better contrast
  },
  licenseNumber: {
    fontSize: 16,
    color: '#ecf0f1', // Light gray for secondary info
  }
});

export default FuelStationInfo;
