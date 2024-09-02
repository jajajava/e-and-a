import React from "react";

function TabModal ({tab, setSelectedTab, setModalOpen}){
    
    function exitTab(){
        setModalOpen(false)
        setSelectedTab([])
    }

    return (
        <div className="modal-content">
            <h1>Tab: {tab.name} </h1>
            {tab.is_active ? <h2>Subtotal: ${tab.total}</h2> : <h2>Total: ${tab.total}</h2>}
            <button className="modalButton" onClick={exitTab}>Exit</button>
            {tab.is_active ? <button className="modalButton">Pay Tab</button> : null}
        </div>
    )
}



export default TabModal;