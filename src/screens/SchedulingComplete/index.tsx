import React from "react";
import { StatusBar, useWindowDimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { ConfirmButton } from "../../components/ConfirmButton";
import BackgroundGraySvg from "../../assets/logo_background_gray.svg";
import DoneSvg from "../../assets/done.svg";

import {
  Container,
  BackgroundContainer,
  Content,
  Title,
  Message,
  Footer,
} from "./style";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../Routes/stack.routes";

type SchedulingCompleteScreenProps = StackNavigationProp<RootStackParamList>;

export const SchedulingComplete: React.FC = () => {
  const navigation = useNavigation<SchedulingCompleteScreenProps>();
  const { width } = useWindowDimensions();

  const handleConfirm = () => {
    navigation.navigate("Home");
  };

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <BackgroundContainer>
        <BackgroundGraySvg width={width} />
      </BackgroundContainer>

      <Content>
        <DoneSvg width={80} height={80} />
        <Title>Carro Alugado!</Title>

        <Message>
          Agora você só precisa ir {"\n"}
          até a concessionária da RENTX {"\n"}
          pegar o seu automóvel.
        </Message>
      </Content>

      <Footer>
        <ConfirmButton title="OK" onPress={handleConfirm} />
      </Footer>
    </Container>
  );
};
