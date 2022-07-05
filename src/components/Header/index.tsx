import React from "react";
import { RFValue } from "react-native-responsive-fontsize";

import Logo from "../../assets/logo.svg";

import { Container, HeaderContent, TotalCars } from "./style";

export const Header = () => {
  return (
    <Container>
      <HeaderContent>
        <Logo width={RFValue(108)} height={RFValue(12)} />
        <TotalCars>Total de 12 carros</TotalCars>
      </HeaderContent>
    </Container>
  );
};
