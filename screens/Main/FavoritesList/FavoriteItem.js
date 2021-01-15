import React from "react";
import styled from "styled-components/native";
import styles from "../../../styles";

const Wrapper = styled.View`
  border-radius: 20px;
  background-color: ${(props) => props.color};
  margin-top: 5px;
  padding: ${styles["spacing-3"]} ${styles["spacing-4"]};
`;

const Text = styled.Text`
  color: ${styles["color-text"]};
  font-size: ${styles["font-sizing-3"]};
`;

const FavoriteItem = ({ children, color }) => (
  <Wrapper color={color}>
    <Text>{children}</Text>
  </Wrapper>
);

export default FavoriteItem;
