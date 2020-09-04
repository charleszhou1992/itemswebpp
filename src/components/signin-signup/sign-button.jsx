import React from 'react';
import "./sign-button.scss"

const SignButton = ({children, ...otherProps}) => (
    <button className="custom-button" {...otherProps}>
        {children}
    </button>
)

export default SignButton;