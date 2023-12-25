import React, { useEffect, useState } from "react";
import Header from "./Header";

// This component is the home page, which is conditionally set depending on the user's state
function KitchenDisplay() {
    const [incompleteOrders, setIncompleteOrders] = useState([])
    const [completeOrders, setCompleteOrders] = useState([])
    const [orderItemsArray, setOrderItemsArray] = useState([])

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

    

    useEffect(() => {
        // Create an array of fetch promises
        const fetchPromises = incompleteOrders.map(order => {
            return fetch(`http://127.0.0.1:3001/orders/${order.id}/items`, {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("jwt")}`
                }
            })
            .then(res => res.json())
            .then(items => ({ orderId: order.id, items }));
        });
    
        // Execute all fetch promises and update state once all are done
        Promise.all(fetchPromises)
            .then(results => {
                const newOrderItemsArray = {};
                results.forEach(result => {
                    newOrderItemsArray[result.orderId] = result.items;
                });
                setOrderItemsArray(newOrderItemsArray);
            })
            .catch(error => console.error('Error fetching order items:', error));
    }, [incompleteOrders]);
    console.log(orderItemsArray)

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