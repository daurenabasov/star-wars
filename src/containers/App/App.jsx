import { BrowserRouter, NavLink, Route, Switch } from "react-router-dom";
import routesConfig from "@routes/routesConfig";
import s from "./App.module.css";
import Header from "@components/Header/Header";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className={s.wrapper}>
          <Header />
          <Switch>
            {routesConfig.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.component}
              />
            ))}
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
