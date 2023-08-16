import React, { useEffect } from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";


function Home({toHomepage, isSignedIn, user}) {

    let navigate = useNavigate()

    useEffect(()=> {
        if (isSignedIn && user.is_clocked_in === false){
            navigate('/timeclock')
        } else if (!isSignedIn && user?.is_clocked_in === false){
            navigate('/login')
        }
    }, [isSignedIn, user.is_clocked_in])

    return (
        <div className="body2">
            <Header toHomepage={toHomepage} />
            <div></div>
        </div>
    )
}





export default Home