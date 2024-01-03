import React from "react";

function Modal({selectedModalOrder, sharedData}){
    const {
        showModal,
        openModal,
        closeModal
        } = sharedData

    return (
        <div className="modal-content">
            <span onClick={closeModal} className="close">&times;</span>
            {selectedModalOrder?.order_items.map((item, index)=> (<div key={index}>
                <h4><b>{item.quantity}</b> - {selectedModalOrder.foods[index].name}</h4>
                </div>))}
        </div>
    )
}

export default Modal