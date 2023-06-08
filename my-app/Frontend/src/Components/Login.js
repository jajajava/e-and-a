import React from "react";

function Login() {

    return (
        <div className="background" style={{ backgroundColor: 'rgba(255, 166, 0, 0.884)' }}>
            <h1 className="loginLogo">🥐 toasty </h1>
            <h1 className="loginGreeting">Welcome!</h1>
            <form className='loginForm'>
                <label>Username:</label>
                <input></input>
                <label>Password:</label>
                <input></input>
                <button>Login</button>
            </form>
            <a className='loginAnchorTag' href="/Signup">Create an account</a>
        </div>
    )
}


//! REMEMBER TO MAKE SIGNUP/LOGIN PATHS!
//! Stretch goals: Make show password button and/or save password option



export default Login