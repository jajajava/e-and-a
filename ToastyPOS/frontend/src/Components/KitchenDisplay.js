import React, { useEffect, useState } from "react";
import Header from "./Header";

// This component is the home page, which is conditionally set depending on the user's state
function KitchenDisplay() {
    const [incompleteOrders, setIncompleteOrders] = useState([])
    const [completeOrders, setCompleteOrders] = useState([])

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

    // for (let i = 0; i < incompleteOrders.length; i++){
    //     let currentFetch = incompleteOrders[i]
    //     fetch("")
    // }

    useEffect(()=> {
        fetch("http://127.0.0.1:3001/orders/8/items", {
            method: "GET",
            headers: {
            "Authorization": `Bearer ${localStorage.getItem("jwt")}`
            }
        })
        .then(res => res.json())
        .then(res => {console.log(res)})
    }, [])

    console.log(incompleteOrders)
    console.log(completeOrders)

    return (
        <div className="">
            <Header />
            <div>
                {incompleteOrders.length > 0 ? 
                <div>
                    <h2>Current Orders:</h2>
                    {incompleteOrders.map((order)=> (<h1 key={order.id}>{order.id}</h1>))}
                </div> 
                : null}
            </div>
        </div>
    )
}





export default KitchenDisplay