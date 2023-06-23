import React from "react";

function Login() {

    return (
        <div className="background" style={{ backgroundColor: 'rgba(255, 166, 0, 0.884)' }}>
            <h1 className="loginLogo">🥐 toasty </h1>
            <h1 className="loginGreeting">Welcome!</h1>
            <form className='loginForm'>
            <table>
            <tr>
                <td><button className="pinButton">1</button></td>
                <td><button className="pinButton">2</button></td>
                <td><button className="pinButton">3</button></td>
            </tr>
            <tr>
                <td><button className="pinButton">4</button></td>
                <td><button className="pinButton">5</button></td>
                <td><button className="pinButton">6</button></td>
            </tr>
            <tr>
                <td><button className="pinButton">7</button></td>
                <td><button className="pinButton">8</button></td>
                <td><button className="pinButton">9</button></td>
            </tr>
            </table>
            <div style={{alignSelf: 'center'}}>
                <button className='loginButton' style={{marginRight: '10px'}}>Time clock</button>
                <button className='loginButton' style={{marginLeft: '10px'}}>Start</button>
            </div>
            </form>
        </div>
    )
}


//! REMEMBER TO MAKE SIGNUP/LOGIN PATHS!
//! Stretch goals: Make show password button and/or save password option



export default Login