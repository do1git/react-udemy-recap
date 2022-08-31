import { Route, Switch } from "react-router-dom";
import MainNavigation from "./components/layout/MainNavigation";
import AllMeetupsPage from "./pages/AllMeetups";
import FavoritesPage from "./pages/Favorites";
import NewMeetupPage from "./pages/NewMeetup.js";

function App() {
  return (
    <div>
      <MainNavigation />
      <Switch>
        <Route path="/" exact>
          <AllMeetupsPage />
        </Route>
        <Route path="/new">
          <NewMeetupPage />
        </Route>
        <Route path="/fav">
          <FavoritesPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
