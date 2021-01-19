import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";
import styles from "../../../styles";

const FloatingContainer = styled(LinearGradient)`
  padding: 0 ${styles["spacing-5"]};
  padding-top: ${styles["spacing-4"]};
  position: absolute;
  left: 0;
  bottom: ${styles["spacing-2"]};
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

const FloatingContainerWrapper = ({ left, center, right }) => (
  <FloatingContainer
    colors={["rgba(255, 255, 255, 0)", styles["color-background"]]}
    locations={[0, 0.5]}
  >
    <LeftView>{left}</LeftView>
    <CenterView>{center}</CenterView>
    <RightView>{right}</RightView>
  </FloatingContainer>
);

export default FloatingContainerWrapper;
