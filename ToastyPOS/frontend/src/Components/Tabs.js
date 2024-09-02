import React, { useEffect, useState } from "react";
import Header from "./Header";
import TabModal from "./TabModal";

function Tabs(){

    const [allTabsArray, setAllTabsArray] = useState([])
    const [modalOpen, setModalOpen] = useState(false)
    const [selectedTab, setSelectedTab] = useState([])

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
    console.log(allTabsArray)

    function selectTab (tab){
        setSelectedTab(tab);
        setModalOpen(true);
    }

    return (
        <div>
            <Header />
            <div id={modalOpen ? "modalOpened" : "modalClosed"} className="modal">
                <TabModal tab={selectedTab} setSelectedTab={setSelectedTab} setModalOpen={setModalOpen}/>
            </div>
            {/* ALL ACTIVE TABS: */}
            <h1>Currently active tabs:</h1>
            {allTabsArray.length > 0 ? allTabsArray.filter((tab)=> (tab.is_active === true)).map((tab) => (<div key={tab.id}><h1 onClick={()=> selectTab(tab)}>{tab.name}</h1></div>)): null}

            {/* ALL INACTIVE TABS: */}
            <h1>Past tabs:</h1>
            {allTabsArray.length > 0 ? allTabsArray.filter((tab)=> (tab.is_active === false)).map((tab) => (<div key={tab.id}><h1 onClick={()=> selectTab(tab)}>{tab.name}</h1></div>)): null}
        </div>
    )
}

export default Tabs