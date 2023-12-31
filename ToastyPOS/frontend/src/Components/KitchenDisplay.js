import React, { useEffect, useState } from "react";
import Header from "./Header";
import KitchenCard from "./KitchenCard";

// This component is the home page, which is conditionally set depending on the user's state
function KitchenDisplay() {
    const [incompleteOrders, setIncompleteOrders] = useState([])
    const [completeOrders, setCompleteOrders] = useState([])
    const [showRecentlyFulfilled, setShowRecentlyFulfilled] = useState(false)

    // Gets the incomplete orders and complete orders separately (and asynchronously)
    useEffect(()=> {
        completeOrdersGetterAndSetter()
        console.log(incompleteOrders)
    }, [showRecentlyFulfilled])

    function completeOrdersGetterAndSetter(){
        fetch("http://127.0.0.1:3001/orders/incomplete", {
            method: "GET",
            headers: {
            "Authorization": `Bearer ${localStorage.getItem("jwt")}`
            }
        })
        .then(res => res.json())
        .then(res => {setIncompleteOrders(res); console.log(res)})
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

    return (
        <div>
            <Header />
            <div>
                <button onClick={()=> setShowRecentlyFulfilled(!showRecentlyFulfilled)}>
                    {!showRecentlyFulfilled ? "Show Recently Fulfilled" : "Hide Recently Fulfilled"}
                </button>
                    <div className="CardDisplay-div">
                        {showRecentlyFulfilled === true && incompleteOrders.length > 0 ? 
                        [...completeOrders, ...incompleteOrders].map((order) => (<KitchenCard key={order.id} order={order} completeOrdersGetterAndSetter={completeOrdersGetterAndSetter}/>))
                        : incompleteOrders.length > 0 ? 
                        incompleteOrders.map((order) => (<KitchenCard key={order.id} order={order} completeOrdersGetterAndSetter={completeOrdersGetterAndSetter}/>))
                        : null}
                    </div>
            </div>
        </div>
    )
}

export default KitchenDisplay