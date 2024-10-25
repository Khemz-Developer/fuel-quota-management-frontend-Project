import { View, Text, Image } from "react-native";
import React from "react";
import { Colors } from "../../constants/Colors";
import FuelStationInfo from "./FuelStationInfo";
import { useAuth } from '../../app/provider/AuthProvider';

export default function Header() {

  const { userName, token, signOut } = useAuth();
  const user = {
    fullName: `${userName}`,
    imageUrl:
      "https://media.licdn.com/dms/image/D4E03AQFzkf0M0HUsdQ/profile-displayphoto-shrink_200_200/0/1721762203507?e=2147483647&v=beta&t=Tpa_pnGTex4SBjMGlWHE-Wd65Dh3FvGbZa3BTbQ4etc",
    primaryEmailAddress: {
      emailAddress: "jalithakheminda@gmail.com",
    },
  };

  return (
    <View
      style={{
        padding: 20,
        paddingTop: 40,
        backgroundColor: Colors.PRIMARY,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        marginBottom: 20,
        marginTop: 0,
      }}
    >
      <FuelStationInfo  stationName="Central Fuel Station" licenseNumber="ABC123456" />
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 6,
          padding: 1,
          alignItems: "center",
          backgroundColor: "#fff",
          borderRadius: 8,
          marginTop: 10,
          marginLeft:170,
          width:"10%",
          justifyContent:"center"
        }}
      >
        
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
          paddingTop: 10,
        }}
      >
        <Image
          style={{ width: 50, height: 50, borderRadius: 100 }}
          source={{ uri: user?.imageUrl }}
        />

        <View>
          <Text
            style={{
              color: "#fff",
              fontFamily: "outfit-medium",
              fontSize: 16,
            }}
          >
            Welcome,
          </Text>
          <Text
            style={{
              fontSize: 20,
              fontFamily: "outfit-medium",
              color: "#fff",
            }}
          >
            {user?.fullName}
          </Text>
        </View>
      </View>


      

      
    </View>
  );
}
