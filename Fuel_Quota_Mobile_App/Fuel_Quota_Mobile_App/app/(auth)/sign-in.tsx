import { View, Text, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";
import Button from "../../components/Button";
import { Colors } from "../../constants/Colors";
import { Link, router, Stack } from "expo-router";
import Header from "../../components/Auth/Header";

const SignInScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View>
      {/* <Stack.Screen options={{ title: "Sign in" }} /> */}

      <Header />

      <Stack.Screen options={{ headerShown: false }} />

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
        <Link href={"/(user)"} asChild>
          <Button text="Sign in" />
        </Link>
        <Link href="/sign-up" style={styles.textButton}>
          Create an account
        </Link>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 10,
    justifyContent: "center",
    
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

export default SignInScreen;
