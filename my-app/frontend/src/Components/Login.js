import React, { useState } from "react";
import { TiDelete } from "react-icons/ti";

function Login() {

    const [pin, setPin] = useState('')

    function handlePin(e){
        e.preventDefault()
        setPin(pin + e.target.innerText)
        if (pin.length === 4){
            setPin(pin)
        }
    }
    console.log(pin)

    return (
        <div className="background" style={{ backgroundColor: 'rgba(255, 166, 0, 0.884)' }}>
            <h1 className="loginLogo">🥐 toasty </h1>
            <h1 className="loginGreeting">Welcome!</h1>
            <form className='loginForm'>
            <div id="pinInputContainer">
                <input id="loginInput" type="password" maxlength="4"></input>
                <TiDelete id="TiDelete"/>
            </div>
            <table>
            <tr>
                <td><button className="pinButton" onClick={handlePin}>1</button></td>
                <td><button className="pinButton" onClick={handlePin}>2</button></td>
                <td><button className="pinButton" onClick={handlePin}>3</button></td>
            </tr>
            <tr>
                <td><button className="pinButton" onClick={handlePin}>4</button></td>
                <td><button className="pinButton" onClick={handlePin}>5</button></td>
                <td><button className="pinButton" onClick={handlePin}>6</button></td>
            </tr>
            <tr>
                <td><button className="pinButton" onClick={handlePin}>7</button></td>
                <td><button className="pinButton" onClick={handlePin}>8</button></td>
                <td><button className="pinButton" onClick={handlePin}>9</button></td>
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