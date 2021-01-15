import React, { useState, createContext } from "react";
import styles from "../../styles";

const initialValue = [
  {
    text: "Olá, tudo bem?",
    color: styles["color-light"].red,
  },
  {
    text: "Meu nome não é johnny",
    color: styles["color-light"].green,
  },
  {
    text: "Minha mãe me disse",
    color: styles["color-light"].purple,
  },
];

const FavoritesContext = createContext(initialValue);

const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(initialValue);

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

  const addFavorite = (text) => {
    const newFavorite = {
      text,
      color: getNewFavoriteColor(),
    };
    setFavorites([...favorites, newFavorite]);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesProvider;
export { FavoritesContext };
