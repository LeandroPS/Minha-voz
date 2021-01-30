import React, { useState, createContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import colors from "material-colors";
import generateUUID from "../../utils/generateUUID";

const initialValue = [
  {
    text: "Olá, tudo bem?",
    color: "green",
    id: generateUUID(),
  },
  {
    text: "Pode me ajudar com algo?",
    color: "red",
    id: generateUUID(),
  },
  {
    text: "Muito obrigado!",
    color: "blue",
    id: generateUUID(),
  },
  {
    text: "Até logo!",
    color: "purple",
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
    const colorExceptions = [
      "black",
      "darkIcons",
      "darkText",
      "grey",
      "lightIcons",
      "lightText",
      "white",
    ];
    const colorNames = Object.keys(colors).filter(
      (item) => !colorExceptions.includes(item)
    );

    const newColor = colorNames.find(
      (color) => !favorites.some((favorite) => favorite.color === color)
    );

    if (!Boolean(newColor)) {
      const color = colorNames[Math.floor(Math.random() * colors.length)];
      return color;
    }

    return newColor;
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
      value={{ favorites, setFavorites, addFavorite, removeFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesProvider;
export { FavoritesContext };
