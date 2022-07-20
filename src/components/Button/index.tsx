import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";

import { Container, Title } from "./style";

interface Props extends RectButtonProps {
  title: string;
  type: "rent" | "confirm";
}

export const Button: React.FC<Props> = ({ title, type, ...rest }) => {
  return (
    <Container {...rest} type={type}>
      <Title>{title}</Title>
    </Container>
  );
};
