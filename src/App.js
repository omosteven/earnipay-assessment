import React from "react";

import {
  Route,
  Switch,
  BrowserRouter as Router,
} from "react-router-dom";

import "./App.css";
import '../src/styles/Utils.css';

import { HomePage } from "./pages";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="*" component={HomePage} />
      </Switch>
    </Router>
  );
}

export default App;
