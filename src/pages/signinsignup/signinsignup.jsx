import React from "react"
import "./signinsignup.scss"
import SignIn from "../../components/signin-signup/signin"
import SignUp from "../../components/signin-signup/signup"

const SignInSignUpPage = () => (
    <div className="signin-signup">
        <SignIn/>
        <SignUp/>
    </div>
    
    
)

export default SignInSignUpPage;