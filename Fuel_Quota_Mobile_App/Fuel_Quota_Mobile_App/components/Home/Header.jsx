
import { View, Text, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { Colors } from "../../constants/Colors";
import FuelStationInfo from "./FuelStationInfo";
import { useAuth } from '../../app/provider/AuthProvider';

export default function Header() {
  const { userName, token, signOut } = useAuth();
  const [stationData, setStationData] = useState(null);

  const user = {
    fullName: `${userName}`,
    imageUrl:
      "https://cdn-icons-png.flaticon.com/128/236/236832.png",
  };

  useEffect(() => {
    const fetchStationDetails = async () => {
      try {
        const response = await fetch("http://192.168.8.100:8081/api/operators/station-details", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        
        if (response.ok) {
          const data = await response.json();
          setStationData(data);
        } else {
          console.error("Failed to fetch station details");
        }
      } catch (error) {
        console.error("Error fetching station details:", error);
      }
    };

    fetchStationDetails();
  }, [token]);

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
      {stationData && (
        <FuelStationInfo stationName={stationData.name} stationAddress={stationData.address} />
      )}
      
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
