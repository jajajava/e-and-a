import React from "react";

function Signup() {

    return (
        <div>
            <h1 className="loginLogo">🥐 toasty </h1>
            <h1 className="loginGreeting">Welcome!</h1>
            <form className='loginForm'>
                <label>Username:</label>
                <input></input>
                <label>Password:</label>
                <input></input>
                <button>Sign up</button>
            </form>
            <a className='loginAnchorTag' href="/login">Log in</a>
        </div>
    )
}


//! REMEMBER TO MAKE SIGNUP/Signup PATHS!
//! Stretch goals: Make show password button and/or save password option



export default Signup