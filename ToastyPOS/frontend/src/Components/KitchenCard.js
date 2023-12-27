import React, { useEffect, useState } from "react";

function KitchenCard({order}){
    const [loadedOrders, setLoadedOrders] = useState([])

    // CALL THIS IN A USE EFFECT
    useEffect(()=> {
        orderLoad()
    }, [])

    function orderLoad() {
        const newOrders = order.order_items.map((item, index) => (
            <h4 key={index}>{order.foods[index].name} - {item.quantity}</h4>
        ));
        setLoadedOrders(newOrders);
    }
    
    return (
        <div>
            <h3>Order #{order.id}:</h3>
            <h4>{order.order_items.length > 0 ? loadedOrders : null}</h4>
        </div>
    )
}

export default KitchenCard