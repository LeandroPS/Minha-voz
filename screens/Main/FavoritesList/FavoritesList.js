import React from "react";
import { FlatList } from "react-native";
import { useFavorites } from "../../../hooks/Favorites";
import FavoriteItem from "./FavoriteItem";
import NewFavorite from "./NewFavorite";

const FavoritesList = () => {
  const { favorites } = useFavorites();

  const renderItem = ({ item }) => (
    <FavoriteItem color={item.color}>{item.text}</FavoriteItem>
  );

  return (
    <FlatList
      renderItem={renderItem}
      keyExtractor={(item) => item.color}
      ListFooterComponent={<NewFavorite />}
      nestedScrollEnabled
      scrollEnabled={false}
      data={favorites}
    />
  );
};

export default FavoritesList;
