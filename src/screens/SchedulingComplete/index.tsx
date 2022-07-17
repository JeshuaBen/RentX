import React from "react";
import { useWindowDimensions } from "react-native";

import BackgroundGraySvg from "../../assets/logo_background_gray.svg";
import DoneSvg from "../../assets/done.svg";

import { Container, Content, Title, Message } from "./style";

export const SchedulingComplete: React.FC = () => {
  const { width } = useWindowDimensions();
  return (
    <Container>
      <BackgroundGraySvg width={width} />

      <Content>
        <DoneSvg width={80} height={80} />
        <Title>Carro Alugado!</Title>

        <Message>
          Agora você só precisa ir {"\n"}
          até a concessionária da RENTX {"\n"}
          pegar o seu automóvel.
        </Message>
      </Content>
    </Container>
  );
};
