import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import FuelStationInfo from "../../../components/Home/FuelStationInfo";
import FuelTypes from "../../../components/Home/FuelTypes";
import Header from "../../../components/Home/Header";

const Index = () => {
  return (
    <ScrollView>
      
      <Header />

      <FuelTypes />

    </ScrollView>
  );
};

export default Index;
