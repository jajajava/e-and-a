import React, { useEffect, useState } from "react";

function Modal({modalData}){
    const {
        selectedModalOrder,
        setSelectedModalOrder,
        closeModal,
        completeOrdersGetterAndSetter} = modalData

    const [itemToBeFulfilled, setItemToBeFulfilled] = useState([])

    function itemsSelected(index){
        if (selectedModalOrder?.is_complete === false && !itemToBeFulfilled.includes(selectedModalOrder.foods[index])){
            setItemToBeFulfilled([...itemToBeFulfilled, selectedModalOrder.foods[index]])
        } else if (selectedModalOrder?.is_complete === false && itemToBeFulfilled.includes(selectedModalOrder.foods[index])){
            const removedItem = itemToBeFulfilled.filter((item) => item !== selectedModalOrder.foods[index])
            setItemToBeFulfilled(removedItem)
        }
    }

    useEffect(()=>{
        console.log(itemToBeFulfilled)
    }, [itemToBeFulfilled])

    function updateFulfillmentStatus(e){
        e.preventDefault()
        
        for (let i = 0; i < itemToBeFulfilled.length; i++){
            const item = selectedModalOrder?.order_items.find((item)=> item.food_id === itemToBeFulfilled[i].id)
            fetch(`http://127.0.0.1:3001/order_items/${item.id}`, {
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
            })
            .then(()=> setSelectedModalOrder(selectedModalOrder))
            .then(()=> (closeModal(), setItemToBeFulfilled([])))
        }
    }

    return (
        <div className="modal-content">
            <form onSubmit={(e)=> updateFulfillmentStatus(e)}>
                <div className="inner-modal">
                {selectedModalOrder?.order_items.map((item, index)=> (
                    <div key={index}>
                        <h4 onClick={()=> itemsSelected(index)} className={`modalItem ${item.fulfilled || itemToBeFulfilled?.find((i) => item.food_id === i.id) ? 'itemFulfilled' : null}`}><b>{item.quantity}</b> - {selectedModalOrder.foods[index].name}</h4>
                    </div>
                ))}
                </div>
                <div id="modalButtons">
                    <button onClick={()=> (closeModal(), setItemToBeFulfilled([]))} className="modalButton">Cancel</button>
                    <button className="modalButton">Fulfill</button>
                </div>
            </form>
        </div>
    )
}

export default Modal