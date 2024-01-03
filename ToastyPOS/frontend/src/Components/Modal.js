import React from "react";

function Modal({selectedCard, sharedData}){
    const {
        showModal,
        openModal,
        closeModal
        } = sharedData

        console.log(selectedCard?.foods[0])
    return (
        <div className="modal-content">
            <span onClick={closeModal} className="close">&times;</span>
            {selectedCard?.order_items.map((item, index)=> (<div key={index}>
                <h4><b>{item.quantity}</b> - {selectedCard.foods[index].name}</h4>
                </div>))}
        </div>
    )
}

export default Modal