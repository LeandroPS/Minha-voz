import React, { useState, createContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import generateUUID from "../../utils/generateUUID";
import styles from "../../styles";

const initialValue = [
  {
    text: "Olá, tudo bem?",
    color: styles["color-light"].red,
    id: generateUUID(),
  },
  {
    text: "Meu nome não é johnny",
    color: styles["color-light"].green,
    id: generateUUID(),
  },
  {
    text: "Minha mãe me disse",
    color: styles["color-light"].purple,
    id: generateUUID(),
  },
];

const FavoritesContext = createContext();

const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(initialValue);

  useEffect(() => {
    const getFavorites = async () => {
      const persistedFavorites = await AsyncStorage.getItem("favorites");
      if (persistedFavorites) {
        const parsedFavorites = JSON.parse(persistedFavorites);
        setFavorites(parsedFavorites);
        console.log(parsedFavorites);
      }
    };

    getFavorites();
  }, []);

  useEffect(() => {
    const saveFavorites = async () => {
      const stringfiedFavorites = JSON.stringify(favorites);
      await AsyncStorage.setItem("favorites", stringfiedFavorites);
    };

    saveFavorites();
  }, [favorites]);

  const getNewFavoriteColor = () => {
    const colors = Object.keys(styles["color-light"]);

    const newColor = colors.find(
      (color) =>
        !favorites.some(
          (favorite) => favorite.color === styles["color-light"][color]
        )
    );

    if (!Boolean(newColor)) {
      const color = colors[Math.floor(Math.random() * colors.length)];
      return styles["color-light"][color];
    }

    return styles["color-light"][newColor];
  };

  const removeFavorite = (removeId) => {
    const newFavoritesList = favorites.filter((item) => item.id != removeId);

    setFavorites(newFavoritesList);
  };

  const addFavorite = (text) => {
    const newFavorite = {
      text,
      color: getNewFavoriteColor(),
      id: generateUUID(),
    };
    setFavorites([...favorites, newFavorite]);
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesProvider;
export { FavoritesContext };
