import React, { useEffect, useState } from "react";
import Header from "./Header";
import KitchenCard from "./KitchenCard";
import Modal from "./Modal";

// This component is the home page, which is conditionally set depending on the user's state
function KitchenDisplay() {
    const [incompleteOrders, setIncompleteOrders] = useState([])
    const [completeOrders, setCompleteOrders] = useState([])
    const [showRecentlyFulfilled, setShowRecentlyFulfilled] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [selectedModalOrder, setSelectedModalOrder] = useState(null)

    useEffect(()=> {
        completeOrdersGetterAndSetter()
    }, [showRecentlyFulfilled, selectedModalOrder])

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

    const kitchenCardData = {
        setSelectedModalOrder,
        completeOrdersGetterAndSetter,
        openModal,
        closeModal
    }

    const modalData = {
        selectedModalOrder,
        setSelectedModalOrder,
        closeModal,
        completeOrdersGetterAndSetter,
        setShowRecentlyFulfilled
    }

    useEffect(()=> {
        if (showModal === false){
            setSelectedModalOrder(null)
        }
    }, [openModal])

    return (
        <div>
            <Header/>
            <div>
                <div id={showModal ? "modalOpened" : "modalClosed"} className="modal">
                    <Modal modalData={modalData}/>
                </div>
                <button tabIndex={showModal === true ? "-1" : "0"} onClick={()=> setShowRecentlyFulfilled(!showRecentlyFulfilled)}>
                    {!showRecentlyFulfilled ? "Show Recently Fulfilled" : "Hide Recently Fulfilled"}
                </button>
                    <div className="CardDisplay-div">
                        {showRecentlyFulfilled === true && completeOrders.length > 0 ? 
                        [...completeOrders, ...incompleteOrders].map((order) => (<KitchenCard key={order.id} order={order} kitchenCardData={kitchenCardData}/>))
                        : incompleteOrders.length > 0 ? 
                        incompleteOrders.map((order) => (<KitchenCard key={order.id} order={order} kitchenCardData={kitchenCardData}/>))
                        : null}
                    </div>
            </div>
        </div>
    )
}

export default KitchenDisplay