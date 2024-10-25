// import React, { useState, useEffect } from 'react';
// import { Text, View, StyleSheet, Button } from 'react-native';
// import { BarCodeScanner, BarCodeScannerResult } from 'expo-barcode-scanner';
// import {Colors} from '../../../constants/Colors'
// import { useNavigation } from '@react-navigation/native'; // Import for navigation
// import { QRScannerScreenNavigationProp } from '../../../constants/Types'; // Import the type

// const Index = () => {
//   const [hasPermission, setHasPermission] = useState<boolean | null>(null);
//   const [scanned, setScanned] = useState(false);
//   // Define the navigation prop with the type
//   const navigation = useNavigation<QRScannerScreenNavigationProp>();


//   useEffect(() => {
//     const getBarCodeScannerPermissions = async () => {
//       const { status } = await BarCodeScanner.requestPermissionsAsync();
//       setHasPermission(status === 'granted');
//     };

//     getBarCodeScannerPermissions();
//   }, []);

//   const handleBarCodeScanned = ({ type, data }: BarCodeScannerResult) => {
//     setScanned(true);
//     alert(`Vehicle number: ${data} scanned successfully!`);

//     // Navigate to the VehicleDetails screen and pass the scanned data
//     navigation.navigate('VehicleDetails', { vehicleNumber: data });
//   };

//   const handleDummyNavigation = () => {
//     // Navigate to VehicleDetails screen with dummy data
//     navigation.navigate('VehicleDetails', { vehicleNumber: 'ABC-1234' });
//   };

//   if (hasPermission === null) {
//     return <Text>Requesting for camera permission</Text>;
//   }
//   if (hasPermission === false) {
//     return <Text>No access to camera</Text>;
//   }

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Scan QR Code</Text>
//       <View style={styles.scannerContainer}>
//         <BarCodeScanner
//           onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
//           style={styles.scanner}
//         />
//       </View>
//       {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
//     {/* Add the button to simulate QR code scanning */}
//     <Button title="Go to Vehicle Details (Dummy Data)" onPress={handleDummyNavigation} />
    
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f5f5f5',
//     padding: 20,
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 10,
//     fontFamily:'outfit-bold',
//     color:Colors.PRIMARY,
//     marginTop:20
//   },
//   scannerContainer: {
//     width: '90%',
//     height: '80%',
//     overflow: 'hidden',
//     borderRadius: 10,
//     borderWidth: 1,
//     borderColor: Colors.PRIMARY,
//     backgroundColor: '#F3F7EC',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginVertical: 20,
//   },
//   scanner: {
//     width: '100%',
//     height: '100%',
//   },
// });

// export default Index;


//-----------------------------------------------


// import React, { useState, useEffect } from 'react';
// import { Text, View, StyleSheet, Button } from 'react-native';
// import { BarCodeScanner, BarCodeScannerResult } from 'expo-barcode-scanner';
// import { Colors } from '../../../constants/Colors';
// import { useNavigation ,useFocusEffect} from '@react-navigation/native';
// import { QRScannerScreenNavigationProp } from '../../../constants/Types';

// const Index = () => {
//   const [hasPermission, setHasPermission] = useState<boolean | null>(null);
//   const [scanned, setScanned] = useState(false);
//   const navigation = useNavigation<QRScannerScreenNavigationProp>();

//   useEffect(() => {
//     const getBarCodeScannerPermissions = async () => {
//       const { status } = await BarCodeScanner.requestPermissionsAsync();
//       setHasPermission(status === 'granted');
//     };

//     getBarCodeScannerPermissions();
//   }, []);

//    // Reset the scanned state when the screen is focused
//    useFocusEffect(
//     useCallback(() => {
//       // Reset scanned state when the screen is focused
//       setScanned(false);
//     }, [])
//   );

//   const handleBarCodeScanned = ({ type, data }: BarCodeScannerResult) => {
//     setScanned(true);
//     alert(`Vehicle number: ${data} scanned successfully!`);
//     navigation.navigate('VehicleDetails', { vehicleNumber: data });
//   };

//   // const handleNavigation = () => {
//   //   navigation.navigate('VehicleDetails');
//   // };

//   if (hasPermission === null) {
//     return <Text style={styles.message}>Requesting for camera permission</Text>;
//   }
//   if (hasPermission === false) {
//     return <Text style={styles.errorMessage}>No access to camera</Text>;
//   }

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Scan QR Code</Text>
//       <View style={styles.scannerContainer}>
//         <BarCodeScanner
//           onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
//           style={styles.scanner}
//         />
//       </View>
//       {scanned && (
//         <Button
//           title={'Tap to Scan Again'}
//           onPress={() => setScanned(false)}
//           color={Colors.PRIMARY}
//         />
//       )}
//       {/* <View style={styles.buttonContainer}>
//         <Button
//           title="Go to Vehicle Details Page "
//           onPress={handleNavigation}
//           color={Colors.PRIMARY}
//         />
//       </View> */}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f5f5f5',
//     padding: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 15,
//     fontFamily: 'outfit-bold',
//     color: Colors.PRIMARY,
//   },
//   scannerContainer: {
//     width: '80%',
//     height: '70%',
//     overflow: 'hidden',
//     borderRadius: 10,
//     //borderWidth: 1,
//     //borderColor: Colors.PRIMARY,
//     backgroundColor: '#F3F7EC',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginVertical: 20,
//   },
//   scanner: {
//     width: '100%',
//     height: '100%',
//   },
//   message: {
//     fontSize: 18,
//     color: Colors.PRIMARY,
//     textAlign: 'center',
//   },
//   errorMessage: {
//     fontSize: 18,
//     color: Colors.GRAY,
//     textAlign: 'center',
//     fontWeight: 'bold',
//   },
//   buttonContainer: {
//     marginTop: 15,
//     width: '80%',
//   },
// });

// export default Index;


//-----------------------------------------------


// import React, { useState, useEffect, useCallback } from 'react';
// import { Text, View, StyleSheet, Button } from 'react-native';
// import { BarCodeScanner, BarCodeScannerResult } from 'expo-barcode-scanner';
// import { Colors } from '../../../constants/Colors';
// import { useNavigation, useFocusEffect } from '@react-navigation/native';
// import { QRScannerScreenNavigationProp } from '../../../constants/Types';

// const Index = () => {
//   const [hasPermission, setHasPermission] = useState<boolean | null>(null);
//   const [scanned, setScanned] = useState(false);
//   const [scannerKey, setScannerKey] = useState(0); // Key to force remounting
//   const navigation = useNavigation<QRScannerScreenNavigationProp>();

//   useEffect(() => {
//     const getBarCodeScannerPermissions = async () => {
//       const { status } = await BarCodeScanner.requestPermissionsAsync();
//       setHasPermission(status === 'granted');
//     };

//     getBarCodeScannerPermissions();
//   }, []);


//   // Reset the scanner by updating the key when the screen is focused
//   useFocusEffect(
//     useCallback(() => {
//       setScanned(false);
//       setScannerKey(prevKey => prevKey + 1); // Update key to force remount
//     }, [])
//   );


//   const handleBarCodeScanned = ({ type, data }: BarCodeScannerResult) => {
//     setScanned(true);
//     alert(`Vehicle number: ${data} scanned successfully!`);
//     navigation.navigate('VehicleDetails', { vehicleNumber: data });
//   };


//   if (hasPermission === null) {
//     return <Text style={styles.message}>Requesting for camera permission</Text>;
//   }


//   if (hasPermission === false) {
//     return <Text style={styles.errorMessage}>No access to camera</Text>;
//   }

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Scan QR Code</Text>
//       <View style={styles.scannerContainer}>
//         <BarCodeScanner
//           key={scannerKey} // Use key to force re-render of the BarCodeScanner
//           onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
//           style={styles.scanner}
//         />
//       </View>
//       {scanned && (
//         <Button
//           title={'Tap to Scan Again'}
//           onPress={() => setScanned(false)}
//           color={Colors.PRIMARY}
//         />
//       )}
//     </View>
//   );
// };


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f5f5f5',
//     padding: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 15,
//     fontFamily: 'outfit-bold',
//     color: Colors.PRIMARY,
//   },
//   scannerContainer: {
//     width: '100%',
//     height: '65%',
//     overflow: 'hidden',
//     borderRadius: 30,
//     backgroundColor: '#F3F7EC',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginVertical: 20,
//   },
//   scanner: {
//     width: '100%',
//     height: '100%',
//     borderRadius: 40,
//   },
//   message: {
//     fontSize: 18,
//     color: Colors.PRIMARY,
//     textAlign: 'center',
//   },
//   errorMessage: {
//     fontSize: 18,
//     color: Colors.GRAY,
//     textAlign: 'center',
//     fontWeight: 'bold',
//   },
// });

// export default Index;

//-----------------------------------------------

import React, { useState, useEffect, useCallback } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner, BarCodeScannerResult } from 'expo-barcode-scanner';
import { Colors } from '../../../constants/Colors';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { QRScannerScreenNavigationProp } from '../../../constants/Types';

const Index = () => {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [scanned, setScanned] = useState(false);
  const [scannerKey, setScannerKey] = useState(0); // Key to force remounting
  const navigation = useNavigation<QRScannerScreenNavigationProp>();

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getBarCodeScannerPermissions();
  }, []);

  // Reset the scanner by updating the key when the screen is focused
  useFocusEffect(
    useCallback(() => {
      setScanned(false);
      setScannerKey(prevKey => prevKey + 1); // Update key to force remount
    }, [])
  );

  const handleBarCodeScanned = ({ type, data }: BarCodeScannerResult) => {
    setScanned(true);
    alert(`Vehicle number: ${data} scanned successfully!`);
    navigation.navigate('VehicleDetails', { vehicleNumber: data });
  };

  if (hasPermission === null) {
    return <Text style={styles.message}>Requesting for camera permission</Text>;
  }

  if (hasPermission === false) {
    return <Text style={styles.errorMessage}>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.scannerContainer}>
        <BarCodeScanner
          key={scannerKey} // Use key to force re-render of the BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={styles.scanner}
        />
        {/* Square overlay for scanning area */}
        <View style={styles.scanArea}>
          <Text style={styles.placeholder}>Scan QR Code</Text>
        </View>
      </View>
      {scanned && (
        <Button
          title={'Tap to Scan Again'}
          onPress={() => setScanned(false)}
          color={Colors.PRIMARY}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', // Align items to the top
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    marginTop: 50,
  },
  scannerContainer: {
    width: '100%',
    height: '100%', // Make the scanner container occupy the full height
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute', // Position it absolutely to fill the screen
    top: 0,
    left: 0,
  },
  scanner: {
    width: '100%',
    height: '100%', // Make the scanner occupy the full height
  },
  scanArea: {
    width: 300, // Set the width of the square
    height: 400, // Set the height of the square
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: '35%', // Center vertically
    left: '38%', // Center horizontally
    transform: [{ translateX: -100 }, { translateY: -100 }], // Offset to center the square
  },
  placeholder: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  message: {
    fontSize: 18,
    color: Colors.PRIMARY,
    textAlign: 'center',
  },
  errorMessage: {
    fontSize: 18,
    color: Colors.GRAY,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default Index;

