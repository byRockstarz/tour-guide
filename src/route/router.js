import { Route, Switch } from "react-router-dom";
import BookmarkPage from "../page/bookmark";
import HomePage from "../page/home";
import LoginPage from "../page/login";

const RouterPage = () => {
  <Switch>
    <Route path="/">
      <HomePage />
    </Route>
    <Route path="/bookmark">
      <BookmarkPage />
    </Route>
    <Route path="/login">
      <LoginPage />
    </Route>
  </Switch>;
};

export default RouterPage;
