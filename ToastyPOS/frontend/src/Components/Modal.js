import React from "react";

function Modal({sharedData}){
    const {
        showModal,
        openModal,
        closeModal
        } = sharedData

    return (
        <div className="modal-content">
            <span onClick={closeModal} className="close">&times;</span>
            <p>PUT THE ORDER INFO HERE- MATTER OF FACT, MAKE MODAL COMPONENT</p>
        </div>
    )
}

export default Modal