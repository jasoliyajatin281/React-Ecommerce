import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./components/pages/homepage/homepage.component";
import ShopPage from "./components/pages/shop/shop.component";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage}></Route>
      <Route path="/shops" component={ShopPage}></Route>
    </Switch>
  );
}

export default App;
