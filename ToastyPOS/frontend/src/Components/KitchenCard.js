import React, { useEffect, useState } from "react";

function KitchenCard({order}){
    const [loadedOrders, setLoadedOrders] = useState([])
    const [showModal, setShowModal] = useState(false)
    const [elapsedTime, setElapsedTime] = useState(getElapsedTime(order.created_at))
    // Figure out how to make the color right right away
    const [cardHeaderID, setCardHeaderID] = useState(1)

    useEffect(()=> {
        orderLoad()
    }, [order])

    // Will make this activate when singleClicked
    function openModal(){
        setShowModal(true)
    }

    function getElapsedTime(createdAt) {
        // Calculate the elapsed time in seconds
        const currentTime = new Date().getTime()
        const createdAtTime = new Date(createdAt).getTime()
        const elapsedSeconds = Math.floor((currentTime - createdAtTime) / 1000)
        const elapsedMinutes = Math.floor(elapsedSeconds / 60)
        const remainingSeconds = (elapsedSeconds % 60 < 10) ? `0${elapsedSeconds % 60}` : elapsedSeconds % 60
        return `${elapsedMinutes}:${remainingSeconds}`
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            const newElapsedTime = getElapsedTime(order.created_at)
            setElapsedTime(newElapsedTime)
            cardHeaderStyler(newElapsedTime)
        }, 1000)
        
        return () => clearInterval(intervalId)
        }, [order])
    
    //! Must make handleDoubleClick close the order

    function handleDoubleClick() {
        console.log("Double click detected")
    }

    let clickCount = 0
    let clickTimeout
    
    function handleSingleClick() {
        clickCount++

        if (clickCount === 1) {
            // Set a timeout to wait for a potential second click
            clickTimeout = setTimeout(()=> {
            // If no second click, treat it as a single click
            //! REMEMBER THAT YOU DONT WANT TO MAKE ORDER.ID YOUR PATCH REQUEST ID
            console.log("Single click detected! Order#: " + (order.id))
            // Reset click count
            clickCount = 0
          }, 300) // Adjust the timeout value as needed
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

    function cardHeaderStyler(elapsedTime){
        setCardHeaderID(prevCardHeaderID => {
            if (parseInt(elapsedTime) >= 20) {
                return 4
            } else if (parseInt(elapsedTime) >= 10) {
                return 3
            } else if (parseInt(elapsedTime) >= 5) {
                return 2
            }
            return prevCardHeaderID
        })
    }
    
    return (
        <div onClick={handleSingleClick} className="KitchenCard-div">
            <div className="cardHeader" id={`cardHeader${cardHeaderID}`}>
                <h3>{order.tab_id != null ? <span>Tab: {order.tab.name}<br/></span> : null} Order #{order.id}</h3>
                <h3 id="cardHeader-timer" className={parseInt(elapsedTime) > 1000 ? "long-timer" : null}>{elapsedTime}</h3>
            </div>
            <h4>{order.order_items.length > 0 ? loadedOrders : null}</h4>
            {order.order_items.length > 18 ? <h4><b>Tap to see more</b></h4> : null}
        </div>
    )
}

export default KitchenCard