import React, { useState } from "react";
import styled from "styled-components/native";
import * as Icon from "react-native-feather";
import { useFavorites } from "../../../hooks/Favorites";
import styles from "../../../styles";

const Wrapper = styled.View`
  border-radius: 25px;
  border-width: 1px;
  border-color: ${styles["color-secondary-button"]};
  margin-top: ${styles["spacing-2"]};
`;

const TextInput = styled.TextInput`
  padding: ${styles["spacing-3"]} ${styles["spacing-4"]};
  padding-right: 45px;
  font-size: ${styles["font-sizing-3"]};
`;

const NewFavoriteButton = styled.TouchableOpacity`
  width: 35px;
  height: 35px;
  border-radius: 25px;
  background-color: ${styles["color-primary"]};
  position: absolute;
  bottom: 5px;
  right: 5px;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const NewFavorite = () => {
  const [text, setText] = useState();
  const { addFavorite } = useFavorites();

  const handleAddFavorite = () => {
    if (!text) return;

    addFavorite(text);
    setText();
  };

  return (
    <Wrapper>
      <TextInput
        value={text}
        onChangeText={setText}
        placeholder="+ Adicionar Favorito"
        multiline={true}
      />
      <NewFavoriteButton onPress={handleAddFavorite}>
        <Icon.Plus color="#fff" />
      </NewFavoriteButton>
    </Wrapper>
  );
};

export default NewFavorite;
