import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./components/pages/homepage/homepage.component";
import signInAndSignUp from "./components/pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import ShopPage from "./components/pages/shop/shop.component";
import Header from "./components/header/header.component";
import { auth } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentuser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentuser: user });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentuser={this.state.currentuser} />
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/shops" component={ShopPage}></Route>
          <Route path="/signin" component={signInAndSignUp}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
