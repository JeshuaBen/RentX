import React from "react";
import { StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../Routes/stack.routes";
import { BackButton } from "../../components/BackButton";
import { useTheme } from "styled-components";
import {
  Container,
  Header,
  Title,
  RentalPeriod,
  DateInfo,
  DateTitle,
  DateValue,
  Content,
  Footer,
} from "./style";

import ArrowSvg from "../../assets/arrow.svg";
import { Button } from "../../components/Button";
import { Calendar } from "../../components/Calendar";

type SchedulingScreenProps = StackNavigationProp<RootStackParamList>;

export const Scheduling: React.FC = () => {
  const navigation = useNavigation<SchedulingScreenProps>();
  const theme = useTheme();

  const handleConfirmScheduling = () => {
    navigation.navigate("SchedulingDetails");
  };

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <Header>
        <BackButton onPress={() => {}} color={theme.colors.shape} />

        <Title>
          Escolha uma {"\n"}
          data de início e {"\n"}
          fim do aluguel
        </Title>

        <RentalPeriod>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue selected={false}>18/06/2021</DateValue>
          </DateInfo>

          <ArrowSvg />
          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue selected={false}>18/06/2021</DateValue>
          </DateInfo>
        </RentalPeriod>
      </Header>

      <Content>
        <Calendar />
      </Content>

      <Footer>
        <Button
          title="Confirmar"
          onPress={handleConfirmScheduling}
          type="confirm"
        />
      </Footer>
    </Container>
  );
};
