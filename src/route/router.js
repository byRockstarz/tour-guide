import { Route, Switch } from "react-router-dom";
import BookmarkPage from "../page/bookmark";
import HomePage from "../page/home";
import LoginPage from "../page/login";
import RegisterPage from "../page/register";
import { path } from "./path";

const RouterPage = () => {
  return (
    <Switch>
      <Route exact path={path.home}>
        <HomePage />
      </Route>
      <Route path={path.bookmark}>
        <BookmarkPage />
      </Route>
      <Route path={path.login}>
        <LoginPage />
      </Route>
      <Route path={path.register}>
        <RegisterPage />
      </Route>
      <Route path="*">
        <div>ERROR 404</div>
      </Route>
    </Switch>
  );
};

export default RouterPage;
