import React, { useEffect, useState } from "react";
import Header from "./Header";

// This component is for the page used to create new orders
function OrderPage({toHomepage}){

    const [selectedMainCategory, setSelectedMainCategory] = useState("food")
    const [selectedSubcategory, setSelectedSubcategory] = useState("")
    const [alcoholSelected, setAlcoholSelected] = useState(true)
    const [orderArray, setOrderArray] = useState([])
    const [foodsArray, setFoodsArray] = useState([])
    const [drinksArray, setDrinksArray] = useState([])
    const [tabID, setTabID] = useState(null)
    const [currentlyActiveTabs, setCurrentlyActiveTabs] = useState([])
    const [modalStatus, setModalStatus] = useState(false)
    const [searchTerm, setSearchTerm] = useState("")
    // Not necessary but it makes the code less crowded and confusing
    const longTabFilter = currentlyActiveTabs.filter(tab => tab.name.toLowerCase().includes(searchTerm))

    //! Need to fix styling on buttons
    // Fetches menu
    useEffect(()=> {
        fetch("http://127.0.0.1:3001/foods", {
            method: "GET",
            headers: {
            "Authorization": `Bearer ${localStorage.getItem("jwt")}`
            }
        })
        .then(res => res.json())
        .then(data => {
            // Use the functional update to correctly update foodsArray
            setFoodsArray(prevFoodsArray => [...prevFoodsArray, ...data.filter(x => x.category === "foods")])
            setDrinksArray(prevDrinksArray => [...prevDrinksArray, ...data.filter(x => x.category === "drinks")])})
    }, [])

    useEffect(()=> {
        fetch("http://127.0.0.1:3001/tabs", {
            method: "GET",
            headers: {
            "Authorization": `Bearer ${localStorage.getItem("jwt")}`
            }
        })
        .then(res => res.json())
        .then(res => setCurrentlyActiveTabs(res.filter(x => x.is_active === true)))
    }, [])

    // Keeps the console clean, only logs orderArray when there's a state change
    useEffect(()=> {
        console.log(orderArray)
    }, [orderArray])

    //! MAKE TABS A THING (need to add setTabID usability that preferably checks existing tabs first)

    function createATabModal(){
        setModalStatus(!modalStatus)
    }

    function handleCloseModal(){
        setModalStatus(false)
        setSearchTerm("")
    }

    function searchTabs(e){
        setSearchTerm(e.target.value.toLowerCase())
    }

    useEffect(() => {
        const filteredTabs = longTabFilter
        console.log(filteredTabs)
    }, [searchTerm, currentlyActiveTabs])

    function foodFormatter(x) {
        const existingItemIndex = orderArray.findIndex(item => item.food_id === x.id)
    
        if (existingItemIndex >= 0) {
            const updatedOrderArray = orderArray.map((item, index) => 
                index === existingItemIndex ? {...item, quantity: item.quantity + 1, totalPrice: item.unitPrice * (item.quantity + 1)} : item)
            setOrderArray(updatedOrderArray)
        } else {
            setOrderArray([...orderArray, { name: x.name, unitPrice: x.price, totalPrice: x.price, food_id: x.id, quantity: 1 }])
        }
    }

    function quantityIncrementer(foodId){
        setOrderArray(orderArray.map(item => 
            item.food_id === foodId ? {...item, quantity: item.quantity + 1, totalPrice: item.unitPrice * (item.quantity + 1)} : item
        ))
    }

    function quantityDecrementer(foodId) {
        const updatedOrderArray = orderArray.map(item => item.food_id === foodId ? 
        {...item, quantity: Math.max(item.quantity - 1, 0), totalPrice: item.unitPrice * (item.quantity - 1)} 
        : item)
        const filteredOrderArray = updatedOrderArray.filter(item => item.quantity > 0)
        setOrderArray(filteredOrderArray)
    }

    //! Figure out how to make tab's total (all order totals) add up in backend
    function createTab(){
        fetch("http://127.0.0.1:3001/tabs", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("jwt")}`
            },
            body: JSON.stringify({
                "tab": {
                    name: searchTerm
                }
            })
        })
        //! Might have to make it conditional- if error with tab, fail order, else .then(createOrder)
        .then(createOrder)
    }

    function createOrder(){
        if (orderArray.length > 0) {
            console.log(orderArray)
            fetch("http://127.0.0.1:3001/orders", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("jwt")}`
                },
                body: JSON.stringify({
                    "order": {
                        //! tabID is an existing state- find out how to change it and you don't have to add it directly to the orderArray (delete reminder when you finish)
                        "tab_id": tabID,
                        "order_items_attributes": orderArray.map((item) => ({food_id: item.food_id, quantity: item.quantity}))
                    }
                })
            })
            // To be able to see the total in the console:
            .then(res => res.json())
            .then(res => {console.log(res)})
            .then(setOrderArray([]), 
                setSelectedMainCategory("food"), 
                setSelectedSubcategory(""), 
                setAlcoholSelected(true),
                setTabID(null)
            )
        }
    }

    function cancelOrder(){
        setOrderArray([])
        setSelectedMainCategory("food")
        setSelectedSubcategory("")
        setAlcoholSelected(true)
        setTabID(null)
    }

    // If longTabFilter.length === 0, when you createOrder, first create a tab

    return(
        <div>
            <Header toHomepage={toHomepage}/>
            <button onClick={createATabModal}>Tab</button>
            {modalStatus === true ?
            <div>
                    <input onInput={searchTabs}></input>
                    <button onClick={handleCloseModal}>Close</button>
            </div>
            : null}
            <div className="orderMainCategory">
                <button onClick={() => setSelectedMainCategory("food")}>Food</button>
                <button onClick={() => setSelectedMainCategory("drinks")}>Drinks</button>
                {selectedMainCategory === "food" ? 
                    <div>
                        {foodsArray.map((x) => <button key={x.id} onClick={()=> foodFormatter(x)}>{x.name}</button>)} 
                    </div>
                    : <div>
                        <button onClick={() => setAlcoholSelected(true)}>Alcohol</button>
                        <button onClick={() => setAlcoholSelected(false)}>Non-Alc</button>
                        {alcoholSelected === true ? 
                            <div>
                                <button onClick={()=> setSelectedSubcategory("cocktails")}>Cocktails</button>
                                <button onClick={()=> setSelectedSubcategory("wines")}>Wines</button>
                                <button onClick={()=> setSelectedSubcategory("spirits")}>Spirits</button>
                                <button onClick={()=> setSelectedSubcategory("beers")}>Beers</button>
                                {selectedSubcategory === "cocktails" ?
                                <div> {drinksArray.filter((x) => (x.is_alc === true && x.subcategory === "cocktails")).map((y) => <button key={y.id} onClick={()=> foodFormatter(y)}>{y.name}</button>)} </div>
                                : selectedSubcategory === "wines" ? 
                                <div> {drinksArray.filter((x) => (x.is_alc === true && x.subcategory === "wines")).map((y) => <button key={y.id} onClick={()=> foodFormatter(y)}>{y.name}</button>)} </div>
                                : selectedSubcategory === "spirits" ? 
                                <div> {drinksArray.filter((x) => (x.is_alc === true && x.subcategory === "spirits")).map((y) => <button key={y.id} onClick={()=> foodFormatter(y)}>{y.name}</button>)} </div>
                                : selectedSubcategory === "beers" ? 
                                <div> {drinksArray.filter((x) => (x.is_alc === true && x.subcategory === "beers")).map((y) => <button key={y.id} onClick={()=> foodFormatter(y)}>{y.name}</button>)} </div>
                                : null
                            }
                            </div> 
                            : <div>
                                <button onClick={()=> setSelectedSubcategory("soft drinks")}>Soft drinks</button>
                                <button onClick={()=> setSelectedSubcategory("lemonades")}>Lemonades</button>
                                <button onClick={()=> setSelectedSubcategory("frozen")}>Frozen</button>
                                {/* Loads options for selected category (non alcoholic drinks) */}
                                {selectedSubcategory === "soft drinks" ? 
                                <div> {drinksArray.filter((x) => (x.is_alc === false && x.subcategory === "soft drinks")).map((y) => <button key={y.id} onClick={()=> foodFormatter(y)}>{y.name}</button>)} </div>
                                : selectedSubcategory === "lemonades" ? 
                                <div> {drinksArray.filter((x) => (x.is_alc === false && x.subcategory === "lemonades")).map((y) => <button key={y.id} onClick={()=> foodFormatter(y)}>{y.name}</button>)} </div>
                                : selectedSubcategory === "frozen" ? 
                                <div> {drinksArray.filter((x) => (x.is_alc === false && x.subcategory === "frozen")).map((y) => <button key={y.id} onClick={()=> foodFormatter(y)}>{y.name}</button>)} </div>
                                : null
                                }
                            </div>}
                </div>}
                {/* Buttons to create/cancel order appear when menu items are selected; maybe change this so that they were greyed out but changed css to light up when first item selected */}
                {orderArray.length > 0 ? 
                <div>
                    <button onClick={createOrder}>Create Order</button>
                    <button onClick={cancelOrder}>Cancel Order</button>
                    <div className="orderDisplay">
                        {orderArray.map((item) => <h1>{`${item.name}:`}
                        <div>
                            <button onClick={()=> quantityIncrementer(item.food_id)}>+</button>
                            <h3>{item.quantity}</h3>
                            <button onClick={()=> quantityDecrementer(item.food_id)}>-</button>
                        </div>
                        </h1>)}
                    </div>
                </div> 
                : null}
                {modalStatus ?
                    longTabFilter.length > 0 ? 
                    longTabFilter.map(tab => (<h1 key={tab.id}>{tab.name}</h1>)) 
                    : <h1>Tab doesn't exist yet!</h1> 
                : null}
            </div>
        </div>
    )
}

export default OrderPage