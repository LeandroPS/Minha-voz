import React from "react";
import { View, FlatList } from "react-native";
import { useFavorites } from "../../../hooks/Favorites";
import FavoriteItem from "./FavoriteItem";
import NewFavorite from "./NewFavorite";

const FavoritesList = () => {
  const { favorites } = useFavorites();

  const renderItem = ({ item }) => <FavoriteItem {...item} />;

  return (
    <View>
      <FlatList
        scrollEnabled={false}
        renderItem={renderItem}
        keyExtractor={(item) => `draggable-item-${item.id}`}
        ListFooterComponent={<NewFavorite />}
        data={favorites}
      />
    </View>
  );
};

export default FavoritesList;
