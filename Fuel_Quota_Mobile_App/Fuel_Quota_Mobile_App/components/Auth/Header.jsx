import { View, Text, Image } from "react-native";
import React from "react";
import { Colors } from "../../constants/Colors";
import FuelStationInfo from "../Home/FuelStationInfo";

export default function Header() {
  return (
    <View
      style={{
        padding: 20,
        paddingTop: 40,
        backgroundColor: Colors.PRIMARY,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        paddingBottom: 40,
        marginTop: 0,
        marginBottom: 30,
      }}
    >
      <FuelStationInfo
        stationName="Central Fuel Station"
        licenseNumber="ABC123456"
      />

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
          marginLeft: 170,
          width: "10%",
          justifyContent: "center",
        }}
      ></View>

      <Image
        style={{
          width: 300,
          height: 200,
          borderColor: "black",
          borderRadius: 4,
          paddingTop:20,
          marginTop: 40,
          marginLeft: 40,
        }}
        source={require("./../../assets/images/loginpage.png")}
      />
    </View>
  );
}
