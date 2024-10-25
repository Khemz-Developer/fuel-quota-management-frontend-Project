import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { AuthProvider } from "./provider/AuthProvider";



export default function RootLayout() {
  useFonts({
    'outfit': require('../assets/fonts/Outfit-Regular.ttf'),
    'outfit-bold': require('../assets/fonts/Outfit-Bold.ttf'),
    'outfit-medium': require('../assets/fonts/Outfit-Medium.ttf'),
    'outfit-light': require('../assets/fonts/Outfit-Light.ttf'),
    'outfit-thin': require('../assets/fonts/Outfit-Thin.ttf'),
    'outfit-extralight': require('../assets/fonts/Outfit-ExtraLight.ttf'),
    'outfit-black': require('../assets/fonts/Outfit-Black.ttf'),
    'outfit-semibold': require('../assets/fonts/Outfit-SemiBold.ttf'),
    'outfit-extrabold': require('../assets/fonts/Outfit-ExtraBold.ttf'),
  })
  return (
    <AuthProvider>
    <Stack>
      <Stack.Screen name="index" options={{headerShown:false}}/>
      <Stack.Screen name="(auth)" options={{headerShown:false}} />
      <Stack.Screen name="(user)" options={{ headerShown: false }} />
      <Stack.Screen name="(startup)" options={{ headerShown: false }} />
    </Stack>
    </AuthProvider>
  );
}
