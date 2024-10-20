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
import React from 'react';
import { Text, View, Image, TouchableOpacity, ActivityIndicator } from "react-native";
import { useFonts } from 'expo-font';
import { Stack, useRouter } from "expo-router";
import { Colors } from '../../constants/Colors';
import { StyleSheet } from "react-native";

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
    <View style={{ flex: 1 }}>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={{
        backgroundColor: "#176B87",
        justifyContent: "center",
        alignItems: "center",
        height: 100,
        borderBottomRightRadius: 40,
        borderBottomLeftRadius: 40,
        borderTopLeftRadius:40,
        borderTopRightRadius:40,
      }}>
        <Text style={{ color: '#fff', fontSize: 20, fontFamily: 'outfit-light' ,marginTop:30}}>Welcome to Fuel Quota App !</Text>
      </View>
      <View
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: 80,
        }}
      >
        <Image
          style={{
            width: 300,
            height: 400,
            borderColor: Colors.PRIMARY,
            borderRadius:14,
            borderWidth:2,
          }}
          source={require("./../../assets/images/login.png")}
        />
      </View>

      <View style={styles.style1}>
        <Text style={{ fontSize: 30, fontFamily: 'outfit-bold', textAlign: 'center' }}>
          Your Ultimate
          <Text style={{ color: '#176B87' }}> Community  Fuel Quota</Text> App
        </Text>
        <Text style={{ fontSize: 15, fontFamily: 'outfit', marginVertical: 20, textAlign: 'center', color: Colors.GRAY }}>
        Effortlessly scan QR codes to track fuel capacity and update vehicle records
        </Text>
        <TouchableOpacity onPress={handleNavigation}>
          <Text style={styles.btn}>Let's Get Started!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  style1: {
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    fontSize: 18,
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
