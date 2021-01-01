import React from "react";
import styled from "styled-components/native";
import ImageLogo from "../../assets/logo.png";
import styles from "../../styles";

const Wrapper = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  padding: 0 ${styles["spacing-4"]};
`;

const Logo = styled.Image`
  width: 28px;
  height: 22px;
  border-radius: 5px;
`;

const Text = styled.Text`
  font-weight: bold;
  font-size: ${styles["font-sizing-3"]};
  color: ${styles["color-text"]};
  margin-left: 8px;
`;

const HeaderLogo = () => {
  return (
    <Wrapper>
      <Logo source={ImageLogo} />
      <Text>Minha voz</Text>
    </Wrapper>
  );
};

export default HeaderLogo;
