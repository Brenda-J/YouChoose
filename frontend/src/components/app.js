import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch } from "react-router-dom";
import NavBarContainer from "./nav/navbar_container";

import MainPageContainer from "./main/main_page_container";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import RestaurantListContainer from "./restaurants/restaurant_list_container";
import SplashContainer from "./splash/splash_container"

const App = () => (
  <div>
    <NavBarContainer />
    <Switch>
      <ProtectedRoute exact path="/wheel" component={MainPageContainer} />
      <ProtectedRoute path="/restaurants" component={RestaurantListContainer} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <AuthRoute path="/" component={SplashContainer} />
    </Switch>
  </div>
);

export default App;
