import React from "react";
import styled from "styled-components/native";
import * as Icon from "react-native-feather";
import styles from "../../../styles";

const DeleteButton = styled.TouchableOpacity`
  background-color: transparent;
  align-self: flex-end;
`;

const DeleteIcon = styled(Icon.Delete)`
  color: ${styles["color-text"]};
`;

const DeleteButtonWrapper = (props) => {
  return (
    <DeleteButton {...props}>
      <DeleteIcon width={40} height={40} />
    </DeleteButton>
  );
};

export default DeleteButtonWrapper;
