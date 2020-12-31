import React from "react";
import styled from "styled-components/native";
import styles from "../../../styles";

const FloatingContainer = styled.View`
  padding: 0 ${styles["spacing-5"]};
  position: absolute;
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
  <FloatingContainer>
    <LeftView>{left}</LeftView>
    <CenterView>{center}</CenterView>
    <RightView>{right}</RightView>
  </FloatingContainer>
);

export default FloatingContainerWrapper;
