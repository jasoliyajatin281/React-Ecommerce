import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./components/pages/homepage/homepage.component";

const HatsPage = () => (
  <div>
    <h1>HatPages</h1>
  </div>
);

function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage}></Route>
      <Route path="/hats" component={HatsPage}></Route>
    </Switch>
  );
}

export default App;
