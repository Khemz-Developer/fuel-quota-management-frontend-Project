import { Stack } from "expo-router";
import React from "react";

function StartupStack() {
  return (
    <Stack >
      <Stack.Screen name="index"  />
    </Stack>
  );
}

export default StartupStack;
