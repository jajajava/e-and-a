import React, { useEffect, useState } from "react";

function Modal({modalData}){
    const {
        selectedModalOrder, // Clicking on a KitchenCard opens a modal with the Order on the card
        setSelectedModalOrder, 
        closeModal, // Method to close the modal
        completeOrdersGetterAndSetter,
        setShowRecentlyFulfilled
    } = modalData;

    const [itemsToBeFulfilled, setItemsToBeFulfilled] = useState([]) // State array holding all items to be fulfilled in a menu item

    function itemsSelected(index){
        // If the selected order isn't complete and the list of changes (selected/deselected items) DOESNT include item
        if (selectedModalOrder?.is_complete === false && !itemsToBeFulfilled.includes(selectedModalOrder.foods[index])){
            // Adds an item to the itemsToBeFulfilled array
            setItemsToBeFulfilled([...itemsToBeFulfilled, selectedModalOrder.foods[index]])
        } 
        // If the selected order isn't complete and the list of changes (selected/deselected items) includes item
        else if (selectedModalOrder?.is_complete === false && itemsToBeFulfilled.includes(selectedModalOrder.foods[index])){
            // Updates itemsToBeFulfilled array to exclude a removed item 
            const removedItem = itemsToBeFulfilled.filter((item) => item !== selectedModalOrder.foods[index])
            setItemsToBeFulfilled(removedItem)
        }
    }

    function markOrderFulfilled(){
        if (selectedModalOrder.is_complete === false){
            let fulfilledArray = selectedModalOrder.order_items.map(i => i.fulfilled)

            for (let i = 1; i <= selectedModalOrder.order_items.length; i++){ // Checks if each order item is fulfilled. If all are fulfilled, the order is marked completed
                if (fulfilledArray[i] === false){
                    return;
                }
                if (i === selectedModalOrder.order_items.length){
                    fetch(`http://127.0.0.1:3001/orders/${selectedModalOrder.id}`, {
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
        }
    }

    function returnOrder(){
        if (selectedModalOrder?.is_complete === true){
            fetch(`http://127.0.0.1:3001/orders/${selectedModalOrder.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("jwt")}`
                },
                body: JSON.stringify({
                    "order": {
                        is_complete: false
                    }
                })
            })
            .then(()=> {setShowRecentlyFulfilled(false); completeOrdersGetterAndSetter()})
        }
    }

    useEffect(()=>{
        console.log(itemsToBeFulfilled)
        console.log(selectedModalOrder)
    }, [itemsToBeFulfilled])

    async function updateFulfillmentStatus(e) {
        e.preventDefault();
    
        for (let i = 0; i < itemsToBeFulfilled.length; i++) {
            const item = selectedModalOrder?.order_items.find((orderItem) => orderItem.food_id === itemsToBeFulfilled[i].id);
            
            if (item) {
                try {
                    const response = await fetch(`http://127.0.0.1:3001/order_items/${item.id}`, {
                        method: "PATCH",
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": `Bearer ${localStorage.getItem("jwt")}`
                        },
                        body: JSON.stringify({
                            "order_item": {
                                fulfilled: !item.fulfilled
                            }
                        })
                    });
    
                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }

                    // Update the local state of the item
                    item.fulfilled = !item.fulfilled;
                } catch (error) {
                    console.error('Fetch error:', error);
                }
            }
        }

        setSelectedModalOrder({ ...selectedModalOrder });
        setItemsToBeFulfilled([]);
        closeModal();
    }
    return (
        <div className="modal-content">
            <form onSubmit={(e)=> updateFulfillmentStatus(e)}>
                <div className="inner-modal">
                {selectedModalOrder?.order_items.map((item, index)=> (
                    <div key={index}>
                        <h4 onClick={()=> itemsSelected(index)} className={`modalItem ${(item.fulfilled && !itemsToBeFulfilled?.some((i) => item.food_id === i.id) && selectedModalOrder.is_complete == false) || (!item.fulfilled && itemsToBeFulfilled?.some((i) => item.food_id === i.id) && selectedModalOrder.is_complete == false) ? 'itemFulfilled' : ''}`}><b>{item.quantity}</b> - {selectedModalOrder.foods[index].name}</h4>
                    </div>
                ))}
                </div>
                <div id="modalButtons">
                    <button onClick={()=> (closeModal(), setItemsToBeFulfilled([]))} className="modalButton">Cancel</button>
                    {selectedModalOrder?.is_complete === false ? <button className="modalButton" onClick={()=> markOrderFulfilled()}>Fulfill</button> : <button className="modalButton" onClick={()=> returnOrder()}>Return</button>}
                </div>
            </form>
        </div>
    )
}

export default Modal