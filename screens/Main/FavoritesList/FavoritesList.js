import React from "react";
import styled from "styled-components/native";
import styles from "../../../styles";
import FavoriteItem from "./FavoriteItem";
import NewFavorite from "./NewFavorite";

const FavoritesList = styled.FlatList`
  /* margin: ${styles["spacing-2"]} ${styles["spacing-4"]}; */
`;

const renderItem = ({ item }) => (
  <FavoriteItem color={item.color}>{item.text}</FavoriteItem>
);

FavoritesList.defaultProps = {
  renderItem,
  keyExtractor: (item) => item.color,
  ListFooterComponent: <NewFavorite />,
};

export default FavoritesList;
