import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";

import { Container, Title } from "./style";

interface Props extends RectButtonProps {
  title: string;
  color?: string;
}

export const Button = ({ title, color, ...rest }: Props) => {
  return (
    <Container {...rest}>
      <Title>{title}</Title>
    </Container>
  );
};