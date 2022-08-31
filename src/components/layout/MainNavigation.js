import { Link } from "react-router-dom";
import styles from "./MainNavigation.module.css";

export default function MainNavigation() {
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
            <Link to="/fav">my-fav</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
