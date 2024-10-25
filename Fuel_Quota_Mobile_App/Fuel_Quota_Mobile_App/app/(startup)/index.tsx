// import { Text, View, Image, TouchableOpacity } from "react-native";
// import Button from "../../components/Button";
// import { Link, Stack } from "expo-router";
// import {Colors} from '../../constants/Colors';
// import { StyleSheet } from "react-native";

// export default function Index() {
//   return (
//     <View>
//       <View
//         style={{
//           display: "flex",
//           alignItems: "center",
//           marginTop: 100,
//         }}
//       >
//         <Image
//           style={{
//             width: 500,
//             height: 500,
//             // borderRadius: 20,
//             // borderWidth: 4,
//             borderColor: "#000",
//           }}
//           source={require("./../../assets/images/login.png")}
//         />
//       </View>

//       <View style={styles.style1}>
//         <Text style={{fontSize:30,fontFamily:'outfit-bold',textAlign:'center'}}>Your Ultimate
//           <Text style={{
//             color:'#7F57F1',
//           }}> Community Business Directory</Text> App    
     
//         </Text>
//         <Text style={{fontSize:15, fontFamily:'outfit',marginVertical:20,textAlign:'center',color:Colors.gray}}>Find your favorite business near your and post your business to your community</Text>
//         <TouchableOpacity >
//            <Text style={styles.btn}>Let's Get Started !</Text>
//         </TouchableOpacity>
//       </View>
      


//       {/* <View
//         style={{
//           alignItems: "center",
//         }}
//       >
//         <Stack.Screen options={{ headerShown:false }} />
//         <Text>Let's Start Journey</Text>

//         <Link href={"/(auth)"} asChild>
//           <Button text="Login" />
//         </Link>
//       </View> */}
//     </View>
//   );
// }


// const styles = StyleSheet.create({
//   style1:{
//     backgroundColor:'#fff',
//     padding:20,
//     marginTop:-20,
//     elevation:0
//   },
//   btn:{
//     backgroundColor: Colors.PRIMARY,
//     padding:10,
//     textAlign:'center',
//     width:200,
//     borderRadius:10,
//     color:'#fff',
//     alignSelf:'center',
//     marginBottom:40
//   }
// })
import { useFonts } from 'expo-font';
import { Stack, useRouter } from "expo-router";
import React from 'react';
import { ActivityIndicator, Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '../../constants/Colors';

// Get screen dimensions
const { width, height } = Dimensions.get('window');

export default function Index() {
  const router = useRouter();

  const [fontsLoaded] = useFonts({
    'outfit-bold': require('../../assets/fonts/Outfit-Bold.ttf'),
    'outfit': require('../../assets/fonts/Outfit-Regular.ttf'),
  });

  const handleNavigation = () => {
    router.push('/(auth)');
  };

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color={Colors.PRIMARY} />;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={styles.header}>
        <Text style={styles.headerText}>Welcome to Fuel Quota App!</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("./../../assets/images/login.png")}
        />
      </View>

      <View style={styles.style1}>
        <Text style={styles.mainText}>
          Your Ultimate
          <Text style={styles.highlightedText}> Community Fuel Quota</Text> App
        </Text>
        <Text style={styles.description}>
          Effortlessly scan QR codes to track fuel capacity and update vehicle records
        </Text>
        <TouchableOpacity onPress={handleNavigation}>
          <Text style={styles.btn}>Let's Get Started!</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#176B87",
    justifyContent: "center",
    alignItems: "center",
    height: height * 0.12, // Relative height for responsiveness
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
    // borderTopLeftRadius: 40,
    //borderTopRightRadius: 40,
  },
  headerText: {
    color: '#fff',
    fontSize: width * 0.05, // Dynamic font size based on screen width
    fontFamily: 'outfit-light',
    marginTop: 30,
  },
  imageContainer: {
    display: "flex",
    alignItems: "center",
    marginTop: 50,
    height: height * 0.4, // Image takes half of the screen height
  },
  image: {
    width: width * 0.6, // Dynamic image width
    height: height * 0.4, // Dynamic image height
    borderColor: Colors.PRIMARY,
    borderRadius: 14,
    borderWidth: 2,
  },
  style1: {
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  mainText: {
    fontSize: width * 0.07, // Dynamic font size based on screen width
    fontFamily: 'outfit-bold',
    textAlign: 'center',
  },
  highlightedText: {
    color: '#176B87',
  },
  description: {
    fontSize: width * 0.04, // Dynamic description text size
    fontFamily: 'outfit',
    marginVertical: 20,
    textAlign: 'center',
    color: Colors.GRAY,
  },
  btn: {
    fontSize: width * 0.05, // Button text size dynamic
    fontFamily: 'outfit-bold',
    color: '#fff',
    backgroundColor: '#176B87',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    textAlign: 'center',
    marginBottom: 40,
  },
});

