import React from "react";
import "./signin.scss";
import FormInput from "../form.input/form-input";
import SignButton from "./sign-button";
import { auth, signInWithGoogle } from "../../firebase/fire-config";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    const {email, password} = this.state;

    try {
        await auth.signInWithEmailAndPassword(email, password);
        this.setState({ email: "", password: "" });
    } catch (error) {
        console.log(error);
    }

    
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    
  };

  render() {
      const {email, password} = this.state;
    return (
      <div className="sign-in">
        <h2>I have already have an account.</h2>
        <span>Sign in with your email and password.</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            onChange={this.handleChange}
            label="Email"
            type="text"
            value={email}
            required
          />

          <FormInput
            name="password"
            onChange={this.handleChange}
            label="Password"
            type="password"
            value={password}
            required
          />
          <div className="buttons">
            <SignButton type="submit">Sign In</SignButton>
            {/* using one more className to differenciate the button */}
            <SignButton onClick={signInWithGoogle} isgooglesignin>
              Sign In With Google
            </SignButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
