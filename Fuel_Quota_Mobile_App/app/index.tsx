import { Text, View } from "react-native";
import Button from "../components/Button";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Let's Start Journey</Text>

      <Link href={'/(auth)'} asChild>
      <Button text="Login" />
      </Link>
    </View>
  );
}
