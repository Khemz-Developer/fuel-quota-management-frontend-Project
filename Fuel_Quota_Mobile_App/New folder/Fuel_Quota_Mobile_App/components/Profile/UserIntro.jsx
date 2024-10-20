import { View, Text, Image } from "react-native";
import React from "react";
import {Colors} from "../../constants/Colors";

export default function UserIntro() {
  const  user  = {
    imageUrl:
      "https://media.licdn.com/dms/image/D4E03AQFzkf0M0HUsdQ/profile-displayphoto-shrink_200_200/0/1721762203507?e=2147483647&v=beta&t=Tpa_pnGTex4SBjMGlWHE-Wd65Dh3FvGbZa3BTbQ4etc",
    fullName: "John Doe",
    primaryEmailAddress: {
      emailAddress: "jalithakheminda@gmail.com",
    },
  };
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
      }}
    >
      <Image
        style={{
          width: 100,
          height: 100,
          borderRadius: 50,
        }}
        source={{ uri: user?.imageUrl }}
      />

      <Text
        style={{
          fontFamily: "outfit-medium",
          fontSize: 20,
          marginTop: 20,
        }}
      >
        {user?.fullName}
      </Text>
      <Text
        style={{
          fontFamily: "outfit-medium",
          color: Colors.GRAY,
        }}
      >
        {user.primaryEmailAddress.emailAddress}
      </Text>
    </View>
  );
}
