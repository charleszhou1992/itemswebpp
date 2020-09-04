import React from "react";
import HomePage from "./pages/homepage";

import ShopPage from "../src/pages/shop/shoppage";
import { Route, Switch } from "react-router-dom";

import "./App.css"

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
