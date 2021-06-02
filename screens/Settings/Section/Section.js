import React from "react";
import styles from "../../../styles";
import colors from "material-colors";
import styled from "styled-components/native";

const Wrapper = styled.View`
  margin: ${styles["spacing-2"]} 0;
  /* border-top-width: 1px;
  border-bottom-width: 1px; */
  border-radius: 8px;
  background-color: ${colors["grey"]["100"]};
  padding: ${styles["spacing-4"]} ${styles["spacing-4"]};
`;

const Content = styled.View``;

const Title = styled.Text`
  text-transform: uppercase;
  margin-bottom: 10px;
  font-weight: bold;
`;

const Section = ({ title, children }) => {
  return (
    <Wrapper>
      {title && <Title>{title}</Title>}
      <Content>{children}</Content>
    </Wrapper>
  );
};

export default Section;
