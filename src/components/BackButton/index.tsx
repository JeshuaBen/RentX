import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { BorderlessButtonProps } from "react-native-gesture-handler";
import { useTheme } from "styled-components/native";

import { Container } from "./style";

interface Props extends BorderlessButtonProps {
  color?: string;
}

export const BackButton: React.FC<Props> = ({ color, ...rest }) => {
  const theme = useTheme();

  return (
    <Container {...rest}>
      <MaterialIcons
        name="chevron-left"
        size={24}
        color={color ? color : theme.colors.text}
      />
    </Container>
  );
};
