import React, { useEffect, useState } from "react";

function Modal({modalData}){
    const {
        selectedModalOrder, // Clicking on a KitchenCard opens a modal with the Order on the card
        setSelectedModalOrder, 
        closeModal, // Method to close the modal
        completeOrdersGetterAndSetter
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

     useEffect(()=> {console.log(selectedModalOrder)}, [])

    useEffect(()=>{
        console.log(itemsToBeFulfilled)
    }, [itemsToBeFulfilled])

    async function updateFulfillmentStatus(e) {
        e.preventDefault();
    
        const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
    
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
    
                    const data = await response.json();
                    console.log(`Updated item: ${data}`);
                    // Update the local state of the item
                    item.fulfilled = !item.fulfilled;
                } catch (error) {
                    console.error('Fetch error:', error);
                }
    
                // Delay between requests to prevent database locking
                await delay(200); // Adjust delay as needed
            }
        }
    
        // Update state and UI after all fetch requests
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
                        <h4 onClick={()=> itemsSelected(index)} className={`modalItem ${(item.fulfilled && !itemsToBeFulfilled?.some((i) => item.food_id === i.id)) || (!item.fulfilled && itemsToBeFulfilled?.some((i) => item.food_id === i.id)) ? 'itemFulfilled' : ''}`}><b>{item.quantity}</b> - {selectedModalOrder.foods[index].name}</h4>
                    </div>
                ))}
                </div>
                <div id="modalButtons">
                    <button onClick={()=> (closeModal(), setItemsToBeFulfilled([]))} className="modalButton">Cancel</button>
                    <button className="modalButton">Fulfill</button>
                </div>
            </form>
        </div>
    )
}

export default Modal