import { StyleSheet, Text, View, Image, TouchableOpacity, Linking } from 'react-native';
import React from 'react';
import {Colors} from '../../../constants/Colors';
import { useFonts } from "expo-font";
const StationDetails = () => {
  const station = {
    name: 'Sunrise Gas Station',
    license: 'ABC-987654',
    ownerName: 'John Doe',
    ownerContact: '+1 (555) 123-4567',
    address: '123 Main St, Springfield',
    hours: 'Mon-Fri: 8:00 AM - 6:00 PM',
    fuelTypes: 'Gasoline, Diesel, LPG',
    rating: '4.5/5 (100 reviews)',
    promotion: '10% off on fuel till the end of the month!',
    contactEmail: 'contact@sunrise.com',
    contactWebsite: 'www.sunrise.com',
    emergencyContact: '+1 (555) 987-6543',
    services: 'Car Wash, Air Filling, Tire Repair',
    mapCoordinates: { latitude: 37.78825, longitude: -122.4324 },
    stationImage: 'https://example.com/station-image.jpg',
  };

  const handleCall = () => {
    Linking.openURL(`tel:${station.ownerContact}`);
  };

  const navigateToMap = () => {
    Linking.openURL(`https://www.google.com/maps?q=${station.mapCoordinates.latitude},${station.mapCoordinates.longitude}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Station Details</Text>
      
      <Image source={require('../../../assets/images/Station.png')} style={styles.stationImage} />

      <View style={styles.detailContainer}>
        <Text style={styles.label}>Station Name:</Text>
        <Text style={styles.value}>{station.name}</Text>
      </View>

      <View style={styles.detailContainer}>
        <Text style={styles.label}>License:</Text>
        <Text style={styles.value}>{station.license}</Text>
      </View>

      <View style={styles.detailContainer}>
        <Text style={styles.label}>Owner Name:</Text>
        <Text style={styles.value}>{station.ownerName}</Text>
      </View>

      <View style={styles.detailContainer}>
        <Text style={styles.label}>Owner Contact:</Text>
        <Text style={styles.value}>{station.ownerContact}</Text>
      </View>

      <View style={styles.detailContainer}>
        <Text style={styles.label}>Address:</Text>
        <Text style={styles.value}>{station.address}</Text>
      </View>

      <View style={styles.detailContainer}>
        <Text style={styles.label}>Operating Hours:</Text>
        <Text style={styles.value}>{station.hours}</Text>
      </View>

      <View style={styles.detailContainer}>
        <Text style={styles.label}>Fuel Types:</Text>
        <Text style={styles.value}>{station.fuelTypes}</Text>
      </View>

      <TouchableOpacity onPress={handleCall} style={styles.callButton}>
        <Text style={styles.buttonText}>Call Station</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={navigateToMap} style={styles.button}>
        <Text style={styles.buttonText}>Navigate to Station</Text>
      </TouchableOpacity>
    </View>
  );
};

export default StationDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: Colors.PRIMARY,
    marginTop: 40,
    textAlign: 'center',
    fontFamily: 'outfit',
  },
  stationImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  detailContainer: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#666',
    width: 120, 
  },
  value: {
    fontSize: 16,
    color: '#333',
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  callButton: {
    backgroundColor: '#FF5722',
    padding: 15,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
  },
});
