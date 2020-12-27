import React from "react";
import styled from "styled-components/native";
import * as Icon from "react-native-feather";
import styles from "../../../styles";

const SpeakButton = styled.TouchableOpacity`
  background: red;
  color: white;
  justify-content: center;
  align-items: center;
  padding: ${styles["spacing-3"]} ${styles["spacing-5"]};
  width: 200px;
  height: 60px;
  border-radius: 40px;
`;

const PlayIcon = styled(Icon.Play)`
  color: white;
  text-align: center;
`;

const SpeakButtonWrapper = ({ title, ...rest }) => {
  return (
    <SpeakButton {...rest}>
      <PlayIcon />
    </SpeakButton>
  );
};

export default SpeakButtonWrapper;
