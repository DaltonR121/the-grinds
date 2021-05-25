import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import Coffees from "./components/Coffees";
import AddCoffee from "./components/AddCoffee";
import SignupFormPage from "./components/SignupFormPage";
import SingleCoffee from "./components/SingleCoffee";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Landing from "./components/Landing";
import Footer from "./components/Footer";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/" exact>
          <Landing />
          </Route>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/coffees" exact>
            <Coffees />
          </Route>
          <Route path="/coffees/add" exact>
            <AddCoffee />
          </Route>
          <Route path="/coffees/:id" exact>
            <SingleCoffee />
          </Route>
        </Switch>
      )}
      <Footer />
    </>
  );
}

export default App;
