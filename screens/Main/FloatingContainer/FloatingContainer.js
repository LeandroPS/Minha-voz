import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import styled from "styled-components/native";
import useKeyboard from "../../../hooks/useKeyboard";
import styles from "../../../styles";

const Container = styled(LinearGradient)`
  padding: 0 ${styles["spacing-5"]};
  padding-top: ${styles["spacing-4"]};
  padding-bottom: ${styles["spacing-3"]};
  position: absolute;
  left: 0;
  bottom: ${(props) => props.bottom};
  flex: 1;

  flex-direction: column;
  width: 100%;
`;

const Row = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-top: ${styles["spacing-2"]};
`;

const SingleSpaceCell = styled.View`
  flex: 1;
  justify-content: center;
  height: 100%;
`;

const DoubleSpaceCell = styled(SingleSpaceCell)`
  flex: 2;
`;

const FloatingContainer = ({ top, left, center, right }) => {
  const paddedInset = Math.min(useSafeAreaInsets().bottom, 20);
  const bottomPadding = `${paddedInset}px`;
  const isKeyboardVisible = useKeyboard();

  return (
    <Container
      colors={["rgba(255, 255, 255, 0)", styles["color-background"]]}
      locations={[0, 0.7]}
      bottom={isKeyboardVisible ? 0 : bottomPadding}
    >
      {top && <Row>{top}</Row>}
      <Row>
        <SingleSpaceCell>{left}</SingleSpaceCell>
        <DoubleSpaceCell>{center}</DoubleSpaceCell>
        <SingleSpaceCell>{right}</SingleSpaceCell>
      </Row>
    </Container>
  );
};

export default FloatingContainer;
