import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";

import Header from "./components/Header";
import Home from "../src/pages/Home";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
