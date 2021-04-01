import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import HomePage from "./pages/home";

const App = () => {
  return (
      <Router>
              <Switch>
                  <Route path="/auth/sign-up">
                      <RegisterPage />
                  </Route>
                  <Route path="/auth/sign-in">
                      <LoginPage />
                  </Route>
                  <Route path="/">
                      <HomePage />
                  </Route>
              </Switch>
      </Router>
  );
}

export default App;
