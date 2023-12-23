import React, { useEffect, useState } from "react";
import Header from "./Header";

function Tabs(){
    const [allTabsArray, setAllTabsArray] = useState([])

    useEffect(()=> {
        fetch("http://127.0.0.1:3001/tabs", {
            method: "GET",
            headers: {
            "Authorization": `Bearer ${localStorage.getItem("jwt")}`
            }
        })
        .then(res => res.json())
        .then(res => setAllTabsArray(res))
    }, [])

    return (
        <div>
            <Header />
            {/* ALL ACTIVE TABS: */}
            <h1>Currently active tabs:</h1>
            {allTabsArray.length > 0 ? allTabsArray.filter((tab)=> (tab.is_active === true)).map((tab) => (<div><h1>{tab.name}</h1></div>)): null}

            {/* ALL INACTIVE TABS: */}
            <h1>Currently inactive tabs:</h1>
            {allTabsArray.length > 0 ? allTabsArray.filter((tab)=> (tab.is_active === false)).map((tab) => (<div><h1>{tab.name}</h1></div>)): null}

            
        </div>
    )
}

export default Tabs