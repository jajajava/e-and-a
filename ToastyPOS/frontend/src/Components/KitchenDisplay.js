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

    console.log(incompleteOrders)
    console.log(completeOrders)

    return (
        <div className="">
            <Header />
            <div></div>
        </div>
    )
}





export default KitchenDisplay