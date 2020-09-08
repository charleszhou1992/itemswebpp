import React from "react";
import "./header.scss"
import {ReactComponent as Logo} from "../../assets/crown.svg"

import {Link} from "react-router-dom"
import {auth} from "../../firebase/fire-config"

import {connect} from "react-redux"

const HeaderComponent = ({currentUser}) => (
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo className="logo" />
        </Link>
        <div className="options">
            <Link className="option" to="/shop">
                SHOP
            </Link>
            <Link className="option" to="/contact">
                CONTACT
            </Link>
            {
                currentUser ? (
                    <div className="option" onClick={() => auth.signOut()}>
                        SIGN OUT
                    </div>

                ) : (
                    <Link className="option" to="/signin">
                        SIGN IN
                    </Link>
                )
            }
        </div>
    </div>
)

// when components need to receive state
// connect props in this component to receive value (user) from reducer, therefore, there is no need to pass state from app.js (preventing the state drilling)
const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(HeaderComponent);