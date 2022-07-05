import React from "react";
import { Header } from "../../components/Header";

import { StatusBar } from "react-native";

import { Container } from "./style";

export function Home() {
  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header />
    </Container>
  );
}
