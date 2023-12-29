import React, { useEffect, useState } from "react";

function KitchenCard({order}){
    const [loadedOrders, setLoadedOrders] = useState([])
    const [showModal, setShowModal] = useState(false)

    useEffect(()=> {
        orderLoad()
    }, [order])

    // Will make this activate when singleClicked
    function openModal(){
        setShowModal(true)
    }

    //! Must make handleDoubleClick close the order

    function handleDoubleClick() {
        console.log("Double click detected");
    }

    let clickCount = 0;
    let clickTimeout;
    
    function handleSingleClick() {
        clickCount++;

        if (clickCount === 1) {
            // Set a timeout to wait for a potential second click
            clickTimeout = setTimeout(function() {
            // If no second click, treat it as a single click
            console.log("Single click detected! ID: " + order.id);
            // Reset click count
            clickCount = 0;
          }, 300); // Adjust the timeout value as needed
        } else if (clickCount === 2) {
            clearTimeout(clickTimeout);
            handleDoubleClick();
            // Reset click count
            clickCount = 0;
            }
        }

    function orderLoad() {
        const newOrders = order.order_items.map((item, index) => (
            <div key={index}>
            <h4><b>{item.quantity}</b> - {order.foods[index].name}</h4>
            </div>
        ));
        setLoadedOrders(newOrders);
    }
    
    return (
        <div onClick={handleSingleClick} className="KitchenCard-div">
            <h3>Order #{order.id}:</h3>
            <h4>{order.order_items.length > 0 ? loadedOrders : null}</h4>
        </div>
    )
}

export default KitchenCard