import React, { Component } from 'react';
import {HashRouter as Router, Switch, Redirect, Route} from "react-router-dom";
import './App.css';
import {ROUTES} from "./Constants";
import SignInView from "./SignIn";
import GameView from "./Game";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
              <Route exact path={ROUTES.signIn} component={SignInView} />
              <Route path={ROUTES.game} component={GameView} />
              <Redirect to={ROUTES.signIn} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
