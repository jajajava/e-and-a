import React, { useState } from "react";
import { HiXCircle } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

function Login() {

    const [pin, setPin] = useState('')
    const [currentUser, setCurrentUser] = useState([])
    const [error, setError] = useState([])
    const [IsSignedIn, setIsSignedIn] = useState(false)
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
        }
    }
    
    function handleStart(e){
        e.preventDefault()
            fetch("http://127.0.0.1:3000/auth/login", {
                method: "POST",
                headers: {
                  "Content-type": "application/json",
                },
                body: JSON.stringify({
                  pin: pin,
                }),
              })
                .then((res) => {
                    if (res.ok){
                        res.json()
                        .then((data) => {
                        localStorage.setItem("jwt", data.token);
                        setIsSignedIn(true);
                        setCurrentUser(data.user)
                        navigate('/home')
                        })
                    } else {
                        res.json().then((data) => setError(data))
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
                <HiXCircle id="delete" onClick={()=> {setPin('')}}/>
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
                <button className='loginButton' style={{marginLeft: '10px'}} onClick={handleStart}>Start</button>
            </div>
            </form>
        </div>
    )
}


//! REMEMBER TO MAKE SIGNUP/LOGIN PATHS!
//! Stretch goals: Make show password button and/or save password option



export default Login