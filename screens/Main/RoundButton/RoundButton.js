import React from "react";
import styled from "styled-components/native";
import * as Icon from "react-native-feather";
import styles from "../../../styles";

const RoundButton = styled.TouchableOpacity`
  background: red;
  color: white;
  text-align: center;
  align-self: flex-start;
  padding: ${styles["spacing-3"]} ${styles["spacing-5"]};
`;

const PlayIcon = styled(Icon.Play)`
  color: white;
`;

const RoundButtonWrapper = ({ title, ...rest }) => {
  return (
    <RoundButton {...rest}>
      <PlayIcon />
    </RoundButton>
  );
};

export default RoundButtonWrapper;
