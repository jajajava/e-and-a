import React from "react";

function Login() {

    return (
        <div>
            <h1 id="loginLogo">🥐 toasty </h1>
            <h1 id="loginGreeting">Welcome!</h1>
            <form id='loginForm'>
                <label>Username:</label>
                <input></input>
                <label>Password:</label>
                <input></input>
                <button>Submit</button>
            </form>
        </div>
    )
}


//! REMEMBER TO MAKE SIGNUP/LOGIN PATHS!
//! Stretch goals: Make show password button and/or save password option



export default Login