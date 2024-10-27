import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Colors } from '../../constants/Colors';

const FuelStationInfo = ({ stationName,  stationAddress }: { stationName: string,  stationAddress: string }) => {
  return (
    <View >
      <Text style={styles.stationName}>- {stationName} -</Text>
      <Text style={styles.licenseNumber}>Station Address : {stationAddress}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  
  stationName: {
    fontSize: 22,
    fontWeight: '400',
    color: '#fff', // White text for better contrast
    textAlign: 'center',
    marginTop: 20
  },
  licenseNumber: {
    fontSize: 14,
    color: '#C4E1F6', // Light gray for secondary info
    textAlign: 'center',
    
  }
});

export default FuelStationInfo;
