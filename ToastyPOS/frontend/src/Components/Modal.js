import React, { useEffect, useState } from "react";

function Modal({ modalData }) {
    const {
        selectedModalOrder,
        setSelectedModalOrder,
        closeModal,
        completeOrdersGetterAndSetter
    } = modalData;

    const [itemToBeFulfilled, setItemToBeFulfilled] = useState([]);

    useEffect(() => {
        if (selectedModalOrder) {
            // Load fulfilled items from localStorage when the component mounts
            const fulfilledItems = localStorage.getItem("fulfilled");
            if (fulfilledItems) {
                const fulfilledArray = fulfilledItems.split(",").map(id => parseInt(id, 10));
                setItemToBeFulfilled(selectedModalOrder.order_items.filter(item => fulfilledArray.includes(item.id)));
            }
        }
    }, [selectedModalOrder]);

    function itemsSelected(index) {
        if (!selectedModalOrder) return;

        const selectedItem = selectedModalOrder.order_items[index];

        const itemExists = itemToBeFulfilled.find(item => item.id === selectedItem.id);
        if (selectedModalOrder?.is_complete === false && !itemExists) {
            setItemToBeFulfilled([...itemToBeFulfilled, selectedItem]);
        } else if (selectedModalOrder?.is_complete === false && itemExists) {
            itemRemover(selectedItem);
        }
    }

    function itemRemover(selectedItem) {
        const removedItems = itemToBeFulfilled.filter(item => item.id !== selectedItem.id);
        setItemToBeFulfilled(removedItems);
    }

    function cancelChanges() {
        if (!selectedModalOrder){
            return
        }

        const fulfilledItems = localStorage.getItem("fulfilled");
        if (fulfilledItems) {
            const fulfilledArray = fulfilledItems.split(",").map(id => parseInt(id, 10));
            setItemToBeFulfilled(selectedModalOrder.order_items.filter(item => fulfilledArray.includes(item.id)));
        } else {
            setItemToBeFulfilled([]);
        }
        closeModal();
    }

    function updateFulfillmentStatus(e) {
        e.preventDefault();
        if (!selectedModalOrder){
            return
        }

        const tempArray = itemToBeFulfilled.map(item => item.id);
        localStorage.setItem("fulfilled", tempArray.toString());
        closeModal();
    }

    function isItemFulfilled(item) {
        return item.fulfilled || itemToBeFulfilled.find(i => i.id === item.id);
    }

    if (!selectedModalOrder) {
        return null;
    }

    return (
        <div className="modal-content">
            <form>
                <div className="inner-modal">
                    {selectedModalOrder.order_items.map((item, index) => (
                        <div key={item.id}>
                            <h4
                                onClick={() => itemsSelected(index)}
                                className={`modalItem ${isItemFulfilled(item) ? 'itemFulfilled' : ''}`}
                            >
                                <b>{item.quantity}</b> - {selectedModalOrder.foods.find(food => food.id === item.food_id)?.name || 'Unknown Food'}
                            </h4>
                        </div>
                    ))}
                </div>
                <div id="modalButtons">
                    <button type="button" onClick={cancelChanges} className="modalButton">Cancel</button>
                    <button type="button" onClick={updateFulfillmentStatus} className="modalButton">Fulfill</button>
                </div>
            </form>
        </div>
    );
}

export default Modal;