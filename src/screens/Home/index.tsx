import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../Routes/stack.routes";

import { StatusBar } from "react-native";

import { Container, CarList } from "./style";
import { Header } from "../../components/Header";
import { Car } from "../../components/Car";
import { api } from "../../services/api";
import { CarDTO } from "../../dtos/CarDTO";
import { Load } from "../../Load";

type HomeScreenProps = StackNavigationProp<RootStackParamList>;

export const Home: React.FC = () => {
  const [cars, setCars] = useState<CarDTO[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const navigation = useNavigation<HomeScreenProps>();

  const handleCarDetails = (car: CarDTO) => {
    navigation.navigate("CarDetails", { car });
  };

  const fetchCars = async () => {
    try {
      const response = await api.get("/cars");
      setCars(response.data);
    } catch (error) {
      console.log("Ocorreu um erro. FILE: 'home'", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCars();
  }, []);

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header />

      {loading ? (
        <Load />
      ) : (
        <CarList
          data={cars}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <Car data={item} onPress={() => handleCarDetails(item)} />
          )}
        />
      )}
    </Container>
  );
};
