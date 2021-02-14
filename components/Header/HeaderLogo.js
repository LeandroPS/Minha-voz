import React from "react";
import styled from "styled-components/native";
import ImageLogo from "../../assets/logo.png";
import styles from "../../styles";

const Wrapper = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${styles["spacing-4"]};
`;

const LogoWrapper = styled.View`
  flex: 1;
  flex-direction: row;
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

const Header = ({ right }) => {
  return (
    <Wrapper>
      <LogoWrapper>
        <Logo resizeMode={"contain"} source={ImageLogo} />
        <Text>Minha voz</Text>
      </LogoWrapper>
      {right}
    </Wrapper>
  );
};

export default Header;
