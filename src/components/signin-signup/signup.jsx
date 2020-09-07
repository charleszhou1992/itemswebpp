import React from "react";
import "./signup.scss";
import FormInput from "../form.input/form-input";
import SignButton from "../signin-signup/sign-button";
import {
  userAuth,
  createUserProfileDocument,
  auth,
} from "../../firebase/fire-config";

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      comfirmPassword: "",
    };
  }

  handleSubmit = async(e) => {
    e.preventDefault();
    const {displayName, email, password, confirmPassword} = this.state;

    // if (password !== confirmPassword){
    //     alert("Password not match")
    //     return;
    // }

    try {
        const {user} = await auth.createUserWithEmailAndPassword(
            email, password
        );

        await createUserProfileDocument(user, {displayName});

        this.setState(
            {
                displayName:"",
                email: "",
                password: "",
                comfirmPassword: "",
            }
        )
    } catch (error) {
        console.log(error);
    }
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { email, displayName, password, comfirmPassword } = this.state;
    return (
      <div className="signup">
        <h2>I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label="Display Name"
            required
          />
          <FormInput
            type="text"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
            required
          />
          <FormInput
            type="password"
            name="comfirmPassword"
            value={comfirmPassword}
            onChange={this.handleChange}
            label="Comfirm Password"
            required
          />
          <SignButton type="submit">SIGN UP</SignButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
