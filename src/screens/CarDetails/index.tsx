import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../Routes/stack.routes";

import { Accessory } from "../../components/Accessory";
import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";

import {
  Container,
  Header,
  CarImages,
  Content,
  Details,
  Accessories,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  About,
  Footer,
} from "./style";
import { Button } from "../../components/Button";
import { CarDTO } from "../../dtos/CarDTO";
import { getAccessoryIcon } from "../../utils/getAccessoryIcon";

type CarDetailsScreenProps = StackNavigationProp<RootStackParamList>;

interface Params {
  car: CarDTO;
}

export const CarDetails: React.FC = () => {
  const navigation = useNavigation<CarDetailsScreenProps>();
  const route = useRoute();
  const { car } = route.params as Params;

  const handleConfirmRental = () => {
    navigation.navigate("Scheduling");
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <Container>
      <Header>
        <BackButton onPress={handleGoBack} />
      </Header>

      <CarImages>
        <ImageSlider imagesUrl={car.photos} />
      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand>{car.brand}</Brand>
            <Name>{car.name}</Name>
          </Description>
          <Rent>
            <Period>{car.rent.period}</Period>
            <Price>R$ {car.rent.price}</Price>
          </Rent>
        </Details>

        <Accessories>
          {car.accessories.map((accessory) => (
            <Accessory
              key={accessory.type}
              name={accessory.name}
              icon={getAccessoryIcon(accessory.type)}
            />
          ))}
        </Accessories>

        <About>{car.about}</About>
      </Content>
      <Footer>
        <Button
          title="Escolher período do aluguel"
          onPress={handleConfirmRental}
          type="confirm"
        />
      </Footer>
    </Container>
  );
};
