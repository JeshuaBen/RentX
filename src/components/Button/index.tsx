import React from "react";

import { Container, Title } from "./style";

interface Props {
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
