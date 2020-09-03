import React from "react";
import HomePage from "./pages/homepage";
import HatsPage from "./pages/hatspage"
import {Route, Switch} from "react-router-dom"


function App() {
  return (
    <div>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/shop/hats" component={HatsPage} />
    </Switch>
    </div>
  );
}

export default App;
