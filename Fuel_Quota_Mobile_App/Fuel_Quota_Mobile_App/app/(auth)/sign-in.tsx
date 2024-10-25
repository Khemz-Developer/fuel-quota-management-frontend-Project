import { View, Text, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";
import Button from "../../components/Button";
import { Colors } from "../../constants/Colors";
import { Link, router, Stack } from "expo-router";
import Header from "../../components/Auth/Header";
import axios from "axios";
import { useAuth } from "../provider/AuthProvider";
import { Alert } from "react-native";

const SignInScreen = () => {
  const [userName, setuserName] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = useAuth();


    // Function to handle sign-in
    const handleSignIn = async () => {
      try {
        const response = await axios.post("http://192.168.8.100:8081/api/auth/login", {
          username: userName, // Assuming the backend expects "username"
          password: password,
        });
  
        // Assuming your backend returns a JWT token
        const { jwtToken } = response.data;
  
        // Store the token in the context
        signIn(jwtToken, userName);
        
  
        Alert.alert("Login Successfully!");
       
        router.push("/(user)");

      } catch (error) {
        console.error(error);
        Alert.alert("Login Failed", "Invalid email or password.");
      }
    };

  return (
    <View>
      {/* <Stack.Screen options={{ title: "Sign in" }} /> */}

      <Header />

      <Stack.Screen options={{ headerShown: false }} />

      <View style={styles.container}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          value={userName}
          onChangeText={setuserName}
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
       
        <Button text="Sign in" onPress={handleSignIn} />
       
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
