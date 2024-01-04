import React from "react";

function Modal({selectedModalOrder, closeModal}){

    return (
        <div className="modal-content">
            <div className="inner-modal">
            {selectedModalOrder?.order_items.map((item, index)=> (
                <div key={index}>
                    <h4 id="modalItem"><b>{item.quantity}</b> - {selectedModalOrder.foods[index].name}</h4>
                </div>
            ))}
            </div>
            <div id="modalButtons">
                <button onClick={closeModal} className="close">Cancel</button>
            </div>
        </div>
    )
}

export default Modal