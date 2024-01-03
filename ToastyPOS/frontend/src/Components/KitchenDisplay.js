import React, { useEffect, useState } from "react";
import Header from "./Header";
import KitchenCard from "./KitchenCard";

// This component is the home page, which is conditionally set depending on the user's state
function KitchenDisplay() {
    const [incompleteOrders, setIncompleteOrders] = useState([])
    const [completeOrders, setCompleteOrders] = useState([])
    const [showRecentlyFulfilled, setShowRecentlyFulfilled] = useState(false)
    const [showModal, setShowModal] = useState(false)

    // Gets the incomplete orders and complete orders separately (and asynchronously)
    useEffect(()=> {
        completeOrdersGetterAndSetter()
    }, [showRecentlyFulfilled])

    function completeOrdersGetterAndSetter(){
        fetch("http://127.0.0.1:3001/orders/incomplete", {
            method: "GET",
            headers: {
            "Authorization": `Bearer ${localStorage.getItem("jwt")}`
            }
        })
        .then(res => res.json())
        .then(res => {setIncompleteOrders(res)})
    }

    useEffect(()=> {
        fetch("http://127.0.0.1:3001/orders/complete", {
            method: "GET",
            headers: {
            "Authorization": `Bearer ${localStorage.getItem("jwt")}`
            }
        })
        .then(res => res.json())
        .then(res => {setCompleteOrders(res)})
    }, [incompleteOrders])

    // Will make this activate when singleClicked
    function openModal(){
        setShowModal(true)
    }

    function closeModal(){
        setShowModal(false)
    }

    const kitchenCardBody = {
        completeOrdersGetterAndSetter,
        showModal,
        openModal,
        closeModal
    }

    return (
        <div>
            <Header />
            <div>
                <div id={showModal ? "modalOpened" : "modalClosed"} className="modal" onClick={closeModal}>
                        <div class="modal-content">
                            <span onClick={closeModal} class="close">&times;</span>
                            <p>PUT THE ORDER INFO HERE- MATTER OF FACT, MAKE MODAL COMPONENT</p>
                    </div>
                </div>
                <button onClick={()=> setShowRecentlyFulfilled(!showRecentlyFulfilled)}>
                    {!showRecentlyFulfilled ? "Show Recently Fulfilled" : "Hide Recently Fulfilled"}
                </button>
                    <div className="CardDisplay-div">
                        {showRecentlyFulfilled === true && incompleteOrders.length > 0 ? 
                        [...completeOrders, ...incompleteOrders].map((order) => (<KitchenCard key={order.id} order={order} kitchenCardBody={kitchenCardBody}/>))
                        : incompleteOrders.length > 0 ? 
                        incompleteOrders.map((order) => (<KitchenCard key={order.id} order={order} kitchenCardBody={kitchenCardBody}/>))
                        : null}
                    </div>
            </div>
        </div>
    )
}

export default KitchenDisplay