import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import { Home } from "../screens/Home";
import { CarDetails } from "../screens/CarDetails";
import { Scheduling } from "../screens/Scheduling";
import { SchedulingComplete } from "../screens/SchedulingComplete";
import { SchedulingDetails } from "../screens/SchedulingDetails";
import { CarDTO } from "../dtos/CarDTO";

export type RootStackParamList = {
  Home: undefined;
  CarDetails: { car: CarDTO };
  Scheduling: { car: CarDTO };
  SchedulingDetails: { car: CarDTO };
  SchedulingComplete: undefined;
};

const { Navigator, Screen } = createStackNavigator<RootStackParamList>();

export const StackRoutes: React.FC = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Home" component={Home} />
      <Screen name="CarDetails" component={CarDetails} />
      <Screen name="Scheduling" component={Scheduling} />
      <Screen name="SchedulingDetails" component={SchedulingDetails} />
      <Screen name="SchedulingComplete" component={SchedulingComplete} />
    </Navigator>
  );
};
