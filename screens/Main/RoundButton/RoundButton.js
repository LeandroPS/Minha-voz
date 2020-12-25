import React from "react";
import styled from "styled-components/native";
import styles from "../../../styles";

const RoundButton = styled.TouchableOpacity`
  background: red;
  color: white;
  text-align: center;
  align-self: flex-start;
  padding: ${styles["spacing-3"]} ${styles["spacing-5"]};
`;

const Text = styled.Text`
  text-align: center;
  color: white;
  font-size: ${styles["font-sizing-3"]};
`;

const RoundButtonWrapper = ({ title, ...rest }) => {
  return (
    <RoundButton {...rest}>
      <Text>{title}</Text>
    </RoundButton>
  );
};

export default RoundButtonWrapper;
