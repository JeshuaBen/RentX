import React from "react";
import {
  useNavigation,
} from "@react-navigation/native";

import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from "../../Routes/stack.routes";


import { StatusBar } from "react-native";

import { Container, CarList } from "./style";
import { Header } from "../../components/Header";
import { Car } from "../../components/Car";

type HomeScreenProps = StackNavigationProp<RootStackParamList>

export const Home: React.FC = () => {
  const navigation = useNavigation<HomeScreenProps>();

  const carData = {
    brand: "Audi",
    name: "RS 5 Coupé",
    rent: {
      period: "AO DIA",
      price: 120,
    },
    thumbnail: "https://freepngimg.com/thumb/audi/35227-5-audi-rs5-red.png",
  };

  const handleCarDetails = () => {
    navigation.navigate("CarDetails");
  };

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header />
      <CarList
        data={[1, 2, 3, 4, 5, 6]}
        keyExtractor={(item) => String(item)}
        renderItem={({ item }) => (
          <Car data={carData} onPress={handleCarDetails} />
        )}
      />
    </Container>
  );
};
