import React from "react";
import { useNavigate } from "react-router-dom";


function BlankPage (){

    const navigate = useNavigate()

    function goBack(){
        navigate(-1)
    }

    return (
        <div className="background" style={{ backgroundColor: 'rgba(255, 166, 0, 0.884)' , display: "flex", justifyContent: 'center' , alignItems: 'center'}}>
            <h1 className="loginLogo" style={{padding: '0'}}>This page does not exist... yet?</h1>
            <button onClick={goBack}>Take me back!</button>
        </div>
    )
}




export default BlankPage