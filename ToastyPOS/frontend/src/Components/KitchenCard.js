import React, { useEffect, useState } from "react";

//! need to pass down open and close modal from parent
function KitchenCard({order, kitchenCardBody}){
    const [loadedOrders, setLoadedOrders] = useState([])
    const [elapsedTime, setElapsedTime] = useState(getElapsedTime(order.created_at))
    const [completionTime, setCompletionTime] = useState(()=> getCompletedTime())
    const [cardHeaderID, setCardHeaderID] = useState(!order.is_complete ? cardHeaderStyler(elapsedTime) : cardHeaderStyler(completionTime))
    const [timerID, setTimerID] = useState(()=> timerStyler())
    const [kitchenCardComplete, setKitchenCardComplete] = useState(null)
    const [headerName, setHeaderName] = useState(upperHeaderContent())

    const {
        completeOrdersGetterAndSetter,
        showModal,
        openModal,
        closeModal
      } = kitchenCardBody;

    useEffect(()=> {
        orderLoad()
    }, [order])

    function getElapsedTime(createdAt) {
        // Calculate the elapsed time in seconds
        const currentTime = new Date().getTime()
        const createdAtTime = new Date(createdAt).getTime()
        const elapsedSeconds = Math.floor((currentTime - createdAtTime) / 1000)
        const elapsedMinutes = Math.floor(elapsedSeconds / 60)
        const remainingSeconds = (elapsedSeconds % 60 < 10) ? `0${elapsedSeconds % 60}` : elapsedSeconds % 60
        return `${elapsedMinutes}:${remainingSeconds}`
    }

    function getCompletedTime(){
        const createdAtTime = new Date(order.created_at).getTime()
        const updatedAtTime = new Date(order.updated_at).getTime()
        const elapsedSeconds = Math.floor((updatedAtTime - createdAtTime) / 1000)
        const elapsedMinutes = Math.floor(elapsedSeconds / 60)
        const remainingSeconds = (elapsedSeconds % 60 < 10) ? `0${elapsedSeconds % 60}` : elapsedSeconds % 60
        return `${elapsedMinutes}:${remainingSeconds}`
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            const newElapsedTime = getElapsedTime(order.created_at)
            setElapsedTime(newElapsedTime)
            if (order.is_complete === false){
                setCardHeaderID(cardHeaderStyler(newElapsedTime))
                setTimerID(timerStyler())
            }
        }, 1000)
        
        return () => clearInterval(intervalId)
        }, [order])

    useEffect(()=> {
        if (order.is_complete === true){
            setKitchenCardComplete("KitchenCard-div-completed")
        }
    }, [order])

    function handleDoubleClick() {
        markOrderFulfilled()
    }

    let clickCount = 0
    let clickTimeout
    
    function handleSingleClick() {
        clickCount++

        if (clickCount === 1) {
            // Set a timeout to wait for a potential second click
            clickTimeout = setTimeout(()=> {
            // If no second click, treat it as a single click
            openModal()
            // Reset click count
            clickCount = 0
            }, 300) 
        } else if (clickCount === 2) {
            clearTimeout(clickTimeout)
            handleDoubleClick()
            // Reset click count
            clickCount = 0
            }
        }

    function orderLoad() {
        if (order.order_items.length > 18) {
            const newOrders = order.order_items.slice(0, 17).map((item, index) => (
                <div key={index}>
                <h4><b>{item.quantity}</b> - {order.foods[index].name}</h4>
                </div>
            ))
            setLoadedOrders(newOrders)
        } else {
            const newOrders = order.order_items.map((item, index) => (
                <div key={index}>
                <h4><b>{item.quantity}</b> - {order.foods[index].name}</h4>
                </div>
            ))
            setLoadedOrders(newOrders)
        }
    }

    function upperHeaderContent(){
        if (order.tab?.name.length > 10){
            const cutName = order.tab.name.substring(0, 7)
            return `Tab: ${cutName}...`
        } else if (order.tab !== null) {
            return `Tab: ${order.tab.name}`
        }
    }

    // Should be accessible from double click and modal getting all orders fulfilled
    function markOrderFulfilled(){
        if (order.is_complete === false){
            fetch(`http://127.0.0.1:3001/orders/${order.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("jwt")}`
                },
                body: JSON.stringify({
                    "order": {
                        is_complete: true
                    }
                })
            })
            .then(()=> completeOrdersGetterAndSetter())
        }
    }

    function cardHeaderStyler(elapsedTime){
        if (parseInt(elapsedTime) < 5) {
            return 1
        } else if (parseInt(elapsedTime) < 10) {
            return 2
        } else if (parseInt(elapsedTime) < 20) {
            return 3
        }
        return 4
    }

    function timerStyler(){
        const timeSelection = order.is_complete ? completionTime : elapsedTime
        const timeSelectionLength = timeSelection.length

        if (timeSelectionLength < 5) {
            return 1
        } else if (timeSelectionLength < 6) {
            return 2
        }
        return 3
    }

    return (
        <div>
            <div onClick={handleSingleClick} className="KitchenCard-div" id={kitchenCardComplete}>
                <div className="cardHeader" id={`cardHeader${cardHeaderID}`}>
                    {/* If order.tab_id === null, make order name a separate name */}
                    <h3>{order.tab_id !== null ? <span>{headerName}<br/></span> : null} Order #{order.id}</h3>
                    <h3 id={`cardHeader-timer-${timerID}`}>{!order.is_complete ? elapsedTime : completionTime}</h3>
                </div>
                <h4>{order.order_items.length > 0 ? loadedOrders : null}</h4>
                {order.order_items.length > 18 ? <h4><b>Tap to see more</b></h4> : null}
            </div>
        </div>
    )
}

export default KitchenCard