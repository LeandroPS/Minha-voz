import React from "react";
import styled from "styled-components/native";
import * as Icon from "react-native-feather";
import styles from "../../../styles";
import ActivityIndicator from "../../../components/ActivityIndicator";

const SpeakButton = styled.TouchableOpacity`
  background: ${styles["color-primary"]};
  color: white;
  justify-content: center;
  align-items: center;
  align-self: center;
  padding: ${styles["spacing-3"]} ${styles["spacing-5"]};
  width: 200px;
  height: 60px;
  border-radius: 40px;
`;

const PlayIcon = styled(Icon.Play)`
  color: white;
  text-align: center;
`;

const SpeakButtonWrapper = ({ title, loading, ...rest }) => {
  return (
    <SpeakButton {...rest}>
      {loading ? <ActivityIndicator color="#fff" /> : <PlayIcon />}
    </SpeakButton>
  );
};

export default SpeakButtonWrapper;
