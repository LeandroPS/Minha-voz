import { useContext } from "react";
import { FavoritesContext } from "./FavoritesProvider";

const useFavorites = () => useContext(FavoritesContext);

export { useFavorites };
