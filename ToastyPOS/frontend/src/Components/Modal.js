import React, { useEffect, useState } from "react";

function Modal({selectedModalOrder, closeModal}){
    const [itemToBeFulfilled, setItemToBeFulfilled] = useState([])

    function itemsSelected(index){
        if (selectedModalOrder?.is_complete === false && !itemToBeFulfilled.includes(selectedModalOrder.foods[index])){
            setItemToBeFulfilled([...itemToBeFulfilled, selectedModalOrder.foods[index]])
        } else if (selectedModalOrder?.is_complete === false && itemToBeFulfilled.includes(selectedModalOrder.foods[index])){
            const removedItem = itemToBeFulfilled.filter((item) => item !== selectedModalOrder.foods[index])
            setItemToBeFulfilled(removedItem)
        }
    }

    // useEffect(()=> {
    //     const filteredArray = selectedModalOrder?.order_items.filter((element) => element.fulfilled === true)
        
    // }, [itemToBeFulfilled])

    console.log(itemToBeFulfilled)

    return (
        <div className="modal-content">
            <form className="inner-modal">
            {selectedModalOrder?.order_items.map((item, index)=> (
                <div key={index}>
                    <h4 onClick={()=> itemsSelected(index)} id="modalItem"><b>{item.quantity}</b> - {selectedModalOrder.foods[index].name}</h4>
                </div>
            ))}
            </form>
            <div id="modalButtons">
                <button onClick={()=> (closeModal(), setItemToBeFulfilled([]))} className="modalButton">Cancel</button>
                <button className="modalButton">Fulfill</button>
            </div>
        </div>
    )
}

export default Modal