import React from "react";
import { Animated, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import * as Icon from "react-native-feather";
import colors from "material-colors";
import { useSpeech } from "../../../hooks/Speech";
import { useFavorites } from "../../../hooks/Favorites";
import styles from "../../../styles";

const Wrapper = styled.TouchableOpacity`
  border-radius: 25px;
  background-color: ${(props) => colors[props.color]["400"]};
  margin-top: 5px;
  padding: ${styles["spacing-3"]} ${styles["spacing-4"]};
  align-self: flex-start;
`;

const Text = styled.Text`
  color: ${styles["color-white"]};
  font-size: ${styles["font-sizing-4"]};
`;

const DeleteContainer = styled(Animated.View)`
  flex: 1;
  width: 70px;
  justify-content: center;
  align-items: center;
`;

const DeleteIcon = styled(Icon.Trash)`
  color: ${styles["color-primary"]};
`;

const FavoriteItem = ({ text, color, id }) => {
  const { speak } = useSpeech();
  const { removeFavorite } = useFavorites();

  const handleDelete = () => {
    removeFavorite(id);
  };

  const handlePress = async (text) => {
    speak(text);

    await Analytics.logEvent("favoritePlayed", {
      length: text.length,
    });
  };

  const leftSwipe = (_, dragX) => {
    const scale = dragX.interpolate({
      inputRange: [0, 100],
      outputRange: [0, 1],
      extrapolate: "clamp",
    });

    return (
      <TouchableOpacity onPress={handleDelete} activeOpacity={0.6}>
        <DeleteContainer style={{ transform: [{ scale: scale }] }}>
          <DeleteIcon size={80} />
        </DeleteContainer>
      </TouchableOpacity>
    );
  };

  return (
    <Swipeable renderLeftActions={leftSwipe}>
      <Wrapper color={color} onPress={() => handlePress(text)}>
        <Text>{text}</Text>
      </Wrapper>
    </Swipeable>
  );
};

export default FavoriteItem;
