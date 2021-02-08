import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import styled from "styled-components/native";
import useKeyboard from "../../../hooks/useKeyboard";
import styles from "../../../styles";

const FloatingContainer = styled(LinearGradient)`
  padding: 0 ${styles["spacing-5"]};
  padding-top: ${styles["spacing-4"]};
  padding-bottom: ${styles["spacing-3"]};
  position: absolute;
  left: 0;
  bottom: ${(props) => props.bottom};
  flex: 1;
  align-items: center;
  flex-direction: row;
  width: 100%;
`;

const LeftView = styled.View`
  flex: 1;
`;

const CenterView = styled.View`
  flex: 2;
`;

const RightView = styled.View`
  flex: 1;
`;

const FloatingContainerWrapper = ({ left, center, right }) => {
  const paddedInset = Math.min(useSafeAreaInsets().bottom, 20);
  const bottomPadding = `${paddedInset}px`;
  const isKeyboardVisible = useKeyboard();

  return (
    <FloatingContainer
      colors={["rgba(255, 255, 255, 0)", styles["color-background"]]}
      locations={[0, 0.7]}
      bottom={isKeyboardVisible ? 0 : bottomPadding}
    >
      <LeftView>{left}</LeftView>
      <CenterView>{center}</CenterView>
      <RightView>{right}</RightView>
    </FloatingContainer>
  );
};

export default FloatingContainerWrapper;
