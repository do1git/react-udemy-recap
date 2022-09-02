import { useContext } from "react";
import FavoritesContext from "../components/store/favorites-context";
import MeetupList from "../meetups/MeetupList";

export default function FavoritesPage() {
  const FavoritesCtx = useContext(FavoritesContext);

  if (FavoritesCtx.totalFavorites === 0) {
    return <p>No thing for the meetups</p>;
  }

  return (
    <section>
      <h1>My favs</h1>
      <MeetupList meetups={FavoritesCtx.favorites} />
    </section>
  );
}
