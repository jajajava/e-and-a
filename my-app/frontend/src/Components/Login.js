import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "./App";

// This component authenticates the user and has the input logic for the digital pin pad
function Login() {

    const {setUser, setIsSignedIn, handleSignIn} = useContext(Context);
    const [pin, setPin] = useState('')
    const [error, setError] = useState([])
    const navigate = useNavigate()

    function handlePin(e){
        e.preventDefault()
        setPin(pin + parseInt(e.target.innerText))
        if (pin.length === 4){
            setPin(pin)
        }
    }

    function keyboardInput(e) {
        if (e.key === 'Backspace'){
            setPin('')
        } else if (/[0-9]/.test(e.key) && pin.length < 4){
            setPin(pin + e.key)
        } else if (e.key === 'Enter'){
            handleStart(e)
        }
    }

    function handleClear(e){
        e.preventDefault();
        setPin('')
        setError([])
    }

    function removeLast(e){
        e.preventDefault()
        let poppedPin = pin.split('')
        poppedPin.pop()
        setPin(poppedPin.join(''))
    }

    // Regardless of whether the user is clocked in or not, this function will take them to the clocking page
    function handleClocking(e){
        e.preventDefault()
        fetch("http://127.0.0.1:3001/auth/login", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({
                    pin: pin
                }),
                })
                .then((res) => {
                    if (res.ok){
                        res.json()
                        .then((data) => {
                        localStorage.setItem("jwt", data.token);
                        setIsSignedIn(true);
                        setUser(data.user);
                        navigate('/timeclock')
                        })
                    } else {
                        res.json().then((data) => setError(data), setPin(''))
                    }
                })
    }
    // If the user is not clocked in, signing in takes them to the clocking page. If they are clocked in, it takes them to the home page
    function handleStart(e){
        e.preventDefault()
            fetch("http://127.0.0.1:3001/auth/login", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({
                    pin: pin
                }),
                })
                .then((res) => {
                    if (res.ok){
                        res.json()
                        .then((data) => {
                        localStorage.setItem("jwt", data.token);
                        setIsSignedIn(true);
                        setUser(data.user);
                        data.user.is_clocked_in? navigate('/home') : navigate('/timeclock')
                        })
                    } else {
                        res.json().then((data) => setError(data), setPin(''))
                    }
                })
    }

    return (
        <div className="background" style={{ backgroundColor: 'rgba(255, 166, 0, 0.884)' }}>
            <h1 className="loginLogo">🥐 toasty </h1>
            <h1 className="loginGreeting">Welcome!</h1>
            <form className='loginForm'>
            <div id="pinInputContainer">
                <input id="loginInput" type="password" maxLength="4" value={pin} onKeyDown={keyboardInput}></input>
            </div>
            {/* If the user enters a pin that's not in the database, it gives an error message ("User doesn't exist!") */}
            {error != [] ? <h4 style={{marginTop: '5px', marginBottom: '5px'}}>{error.message}</h4> : null}
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
            <tr>
                <td><button className="pinButton" onClick={handleClear} style={{fontSize: '25px'}}>Clear</button></td>
                <td><button className="pinButton" onClick={handlePin}>0</button></td>
                <td><button className="pinButton" onClick={removeLast}>X</button></td>
            </tr>
            </table>
            <div style={{alignSelf: 'center'}}>
                <button className='loginButton' style={{marginRight: '10px'}} onClick={handleClocking}>Time clock</button>
                <button className='loginButton' style={{marginLeft: '10px'}} onClick={handleStart}>Start</button>
            </div>
            </form>
        </div>
    )
}


//! REMEMBER TO MAKE SIGNUP/LOGIN PATHS!
//! Stretch goals: Make show password button and/or save password option



export default Login