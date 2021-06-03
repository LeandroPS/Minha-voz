import React from "react";
import styled from "styled-components/native";
import * as Icon from "react-native-feather";
import colors from "material-colors";
import styles from "../../../styles";

const Wrapper = styled.View`
  padding: ${styles["spacing-2"]} ${styles["spacing-3"]};
  background-color: ${colors["red"]["100"]};
  border-radius: 20px;

  flex-direction: row;
  align-items: center;
`;

const Text = styled.Text`
  font-size: ${styles["font-sizing-3"]};
  color: ${styles["color-text"]};
`;

const AlertIcon = styled(Icon.WifiOff)`
  color: ${colors["red"]["300"]};
  margin-right: ${styles["spacing-2"]};
`;

const Alert = ({ icon, text }) => {
  return (
    <Wrapper>
      <AlertIcon width={20} height={20} />
      <Text>{text}</Text>
    </Wrapper>
  );
};

export default Alert;
