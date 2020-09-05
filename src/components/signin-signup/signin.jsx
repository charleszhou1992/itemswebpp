import React from "react";
import "./signin.scss";
import FormInput from "../form.input/form-input";
import SignButton from "./sign-button";
import {signInWithGoogle} from "../../firebase/fire-config"

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ email: "", password: "" });
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I have already have an account.</h2>
        <span>Sign in with your email and password.</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            handleChange={this.handleChange}
            label="email"
            type="email"
            value={this.state.email}
            require
          />

          <FormInput
            name="password"
            handleChange={this.handleChange}
            label="password"
            type="password"
            value={this.state.password}
            require
          />

          <SignButton type="submit">
            Sign In
          </SignButton>
          <SignButton onClick={signInWithGoogle}>
            Sign In With Google
          </SignButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
