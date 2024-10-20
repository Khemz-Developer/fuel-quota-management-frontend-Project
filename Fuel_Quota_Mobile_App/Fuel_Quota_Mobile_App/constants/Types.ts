import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

// Define the route params for each screen
type RootStackParamList = {
  index: undefined;
  VehicleDetails: { vehicleNumber: string };
};

// Define the type for navigation prop for the index screen
export type QRScannerScreenNavigationProp = StackNavigationProp<RootStackParamList, 'index'>;

// Define the type for route prop for the VehicleDetails screen
export type VehicleDetailsRouteProp = RouteProp<RootStackParamList, 'VehicleDetails'>;
