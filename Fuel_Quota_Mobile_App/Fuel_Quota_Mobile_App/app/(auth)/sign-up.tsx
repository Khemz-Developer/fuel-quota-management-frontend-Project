import { View, Text, TextInput, StyleSheet, Alert } from "react-native";
import React, { useState } from "react";
import Button from "../../components/Button";
import { Colors } from "../../constants/Colors";
import { Link, Stack } from "expo-router";
import Header from "@/components/Auth/Header";

const SignUpScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function signUpWithEmailAndPassword() {
    setLoading(true);
    console.warn("Sign up with email and password");
  }

  return (
    <View >
      <Stack.Screen options={{ headerShown:false}} />

      <Header/>

      <View style={styles.container}>
      <Text style={styles.label}>Email</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="jon@gmail.com"
        style={styles.input}
      />

      <Text style={styles.label}>Password</Text>
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder=""
        style={styles.input}
        secureTextEntry
      />

      <Button
        disabled={loading}
        onPress={signUpWithEmailAndPassword}
        text={loading ? "Creating Account..." : "Create account"}
      />
      <Link href='/sign-in'  style={styles.textButton}>
        Sign in
      </Link>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: "center",
    marginTop:5,
  },
  label: {
    color: "gray",
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    marginTop: 5,
    marginBottom: 20,
    backgroundColor: "white",
    borderRadius: 5,
  },
  textButton: {
    alignSelf: "center",
    fontWeight: "bold",
    color: Colors.PRIMARY,
    marginVertical: 10,
  },
});

export default SignUpScreen;
