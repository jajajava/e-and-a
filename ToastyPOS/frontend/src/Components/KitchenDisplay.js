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
        fetch("http://127.0.0.1:3001/orders/incomplete", {
            method: "GET",
            headers: {
            "Authorization": `Bearer ${localStorage.getItem("jwt")}`
            }
        })
        .then(res => res.json())
        .then(res => {setIncompleteOrders(res)})
    }, [])

    useEffect(()=> {
        fetch("http://127.0.0.1:3001/orders/complete", {
            method: "GET",
            headers: {
            "Authorization": `Bearer ${localStorage.getItem("jwt")}`
            }
        })
        .then(res => res.json())
        .then(res => {setCompleteOrders(res)})
    }, [])

    console.log(incompleteOrders)

    return (
        <div>
            <Header />
            <div>
                <button onClick={()=> setShowRecentlyFulfilled(!showRecentlyFulfilled)}>Show Recently Fulfilled</button>
                    <div id="CardDisplay-mainDiv">
                        {showRecentlyFulfilled == true ? 
                        completeOrders.map((order)=> (<KitchenCard key={order.id} order={order}/>)) : null}
                        {incompleteOrders.length > 0 ? 
                        <div className="CardDisplay-div">
                            {incompleteOrders.map((order)=> (<KitchenCard key={order.id} order={order}/>))}
                        </div>
                    : null}
                </div> 
            </div>
        </div>
    )
}

export default KitchenDisplay