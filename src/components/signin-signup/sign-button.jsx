import React from 'react';
import "./sign-button.scss"

const SignButton = ({children, isgooglesignin, ...otherProps}) => (
    <button className={`${isgooglesignin ? "google-sign-in" : ""} custom-button`} {...otherProps}>
        {children}
    </button>
)

export default SignButton;