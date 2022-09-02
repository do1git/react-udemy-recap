import { useContext } from "react";
import { Link } from "react-router-dom";
import FavoritesContext from "../store/favorites-context";
import styles from "./MainNavigation.module.css";

export default function MainNavigation() {
  const favoritesCtx = useContext(FavoritesContext);
  return (
    <header className={styles.header}>
      <div className={styles.logo}>React AllMeetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">home-all</Link>
          </li>
          <li>
            <Link to="/new">add-new</Link>
          </li>
          <li>
            <Link to="/fav">
              my-fav{" "}
              <small className={styles.badge}>
                {favoritesCtx.totalFavorites}
              </small>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
