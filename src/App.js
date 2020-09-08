import React from "react";
import HomePage from "./pages/homepage";

import ShopPage from "../src/pages/shop/shoppage";
import { Route, Switch } from "react-router-dom";

import "./App.css";

import HeaderComponent from "../src/components/header/header";
import SignInSignUpPage from "../src/pages/signinsignup/signinsignup";

import { auth, createUserProfileDocument } from "./firebase/fire-config";

import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user-action";

class App extends React.Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     currentUser: null,
  //   };
  // }

  unsubscribefromAuth = null;
  // persistant data
  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribefromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribefromAuth();
  }

  render() {
    return (
      <div>
        {/* there is no state required in headerComponent */}
        <HeaderComponent />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SignInSignUpPage} />
        </Switch>
      </div>
    );
  }
}

// return an object (complicated hahaha)
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
// null means it does not need any props from reducer (only set the state, not use state)
export default connect(null, mapDispatchToProps)(App);
