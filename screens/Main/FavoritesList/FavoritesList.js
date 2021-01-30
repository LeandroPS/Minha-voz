import React from "react";
import DraggableFlatList from "react-native-draggable-flatlist";
import { useFavorites } from "../../../hooks/Favorites";
import FavoriteItem from "./FavoriteItem";
import NewFavorite from "./NewFavorite";

const FavoritesList = () => {
  const { favorites, setFavorites } = useFavorites();

  const renderItem = ({ item, ...props }) => (
    <FavoriteItem {...item} {...props} />
  );

  return (
    <DraggableFlatList
      renderItem={renderItem}
      keyExtractor={(item) => `draggable-item-${item.id}`}
      ListFooterComponent={<NewFavorite />}
      data={favorites}
      scrollPercent={5}
      onDragEnd={({ data }) => setFavorites(data)}
    />
  );
};

export default FavoritesList;
