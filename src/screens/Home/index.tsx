import React from "react";
import { Header } from "../../components/Header";

import { StatusBar } from "react-native";

import { Container } from "./style";
import { Car } from "../../components/Car";

export function Home() {
  const carData = {
    brand: "Audi",
    name: "RS 5 Coupé",
    rent: {
      period: "AO DIA",
      price: 120,
    },
    thumbnail: "https://freepngimg.com/thumb/audi/35227-5-audi-rs5-red.png",
  };

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header />
      <Car data={carData} />
    </Container>
  );
}
