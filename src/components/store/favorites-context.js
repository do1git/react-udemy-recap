import { createContext, useState } from "react";

const FavoritesContext = createContext({
  //initial value
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteMeetup) => {},
  removeFavorite: (meetupId) => {},
  itemIsFavorite: (meetupId) => {},
});

export function FavoritesContextProvider(props) {
  const [userFav, setUserFav] = useState([]);

  const addFavoriteHandler = (favoriteMeetup) => {
    setUserFav((prev) => prev.concat(favoriteMeetup));
  };

  const removeFavoriteHandler = (id) => {
    setUserFav((prev) => prev.filter((meetup) => meetup.id !== id));
  };
  const itemIsFavoriteHandler = (id) => {
    console.log("FAv?", id);
    return userFav.some((meetup) => meetup.id === id);
  };

  const context = {
    favorites: userFav,
    totalFavorites: userFav.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
