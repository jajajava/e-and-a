import React from "react";
import { useNavigate } from "react-router-dom";


function BlankPage (){

    const navigate = useNavigate()

    function goBack(){
        navigate(-1)
    }

    return (
        <div className="background" id="blankBackground">
            <h1 className="loginLogo" style={{padding: '0'}}>This page does not exist... yet?</h1>
            <button onClick={goBack}>Go back</button>
        </div>
    )
}




export default BlankPage