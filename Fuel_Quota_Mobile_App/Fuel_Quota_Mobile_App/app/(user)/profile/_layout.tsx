import { Stack } from "expo-router";
import React from "react";

function HomeStack() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{headerShown:false}} />
      <Stack.Screen name="StationDetails" options={{headerShown:false}} />
    </Stack>
  );
}

export default HomeStack;
