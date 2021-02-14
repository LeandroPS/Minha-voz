import React from "react";
import * as Icon from "react-native-feather";
import styled from "styled-components/native";
import styles from "../../styles";

const Wrapper = styled.TouchableOpacity``;

const HeaderButton = ({ navigation, destiny, icon, ...props }) => {
  const SliderIcon = styled(Icon.Sliders)`
    color: ${styles["color-primary"]};
  `;

  return (
    <Wrapper {...props}>
      <SliderIcon name={icon} />
    </Wrapper>
  );
};

export default HeaderButton;
