import React, { useEffect, useState } from "react";
import Header from "./Header";

// This component is for the page used to create new orders
function OrderPage({toHomepage}){

    const [selectedMainCategory, setSelectedMainCategory] = useState("food");
    const [selectedSubcategory, setSelectedSubcategory] = useState("")
    const [alcoholSelected, setAlcoholSelected] = useState(true)
    const [orderArray, setOrderArray] = useState([])
    const [foodsArray, setFoodsArray] = useState([])
    const [drinksArray, setDrinksArray] = useState([])
    const [finalizedOrderArray, setFinalizedOrderArray] = useState([])
    const [tabID, setTabID] = useState(null)

    //! Need to fix styling on buttons
    //! Make a way to view active tabs (GET /tabs route)
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
            setFoodsArray(prevFoodsArray => [...prevFoodsArray, ...data.filter(x => x.category === "foods")]);
            setDrinksArray(prevDrinksArray => [...prevDrinksArray, ...data.filter(x => x.category === "drinks")])})
    }, [])

    // Keeps the console clean, only logs orderArray when there's a state change
    useEffect(()=> {
        console.log(orderArray)
    }, [orderArray])

    //! FIX THIS TO ACCEPT OTHER QUANTITIES AND MAKE TABS A THING (need to add setTabID usability that preferably checks existing tabs first)
    function convertMenuItem(){
        setFinalizedOrderArray(orderArray.map(item => {
            console.log(item); // Log the current item
            return {
                food_id: item.id,
                quantity: 1
            };
        }));
    }

    // This useEffect is triggered by the createOrder function
    useEffect(() => {
        if (finalizedOrderArray.length > 0) {
            console.log(finalizedOrderArray);
            fetch("http://127.0.0.1:3001/orders", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("jwt")}`
                },
                body: JSON.stringify({
                    "order": {
                        "tab_id": tabID,
                        "order_items_attributes": finalizedOrderArray
                    }
                })
            })
            .then(setOrderArray([]), 
                setSelectedMainCategory("food"), 
                setSelectedSubcategory(""), 
                setAlcoholSelected(true),
                setTabID(null)
            )
        }
    }, [finalizedOrderArray, tabID]);

    // When convertMenuItem sets the finalizedOrderArray, the useEffect above is triggered!
    function createOrder(){
        convertMenuItem();
    }

    function cancelOrder(){
        setOrderArray([])
        setSelectedMainCategory("food")
        setSelectedSubcategory("")
        setAlcoholSelected(true)
        setTabID(null)
    }

    return(
        <div>
            <Header toHomepage={toHomepage}/>
            <div className="orderMainCategory">
                <button onClick={() => setSelectedMainCategory("food")}>Food</button>
                <button onClick={() => setSelectedMainCategory("drinks")}>Drinks</button>
                {selectedMainCategory === "food" ? 
                    <div>
                        {foodsArray.map((x) => <button key={x.id} onClick={() => setOrderArray([...orderArray, x])}>{x.name}</button>)} 
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
                                <div> {drinksArray.filter((x) => (x.is_alc === true && x.subcategory === "cocktails")).map((y) => <button key={y.id} onClick={() => setOrderArray([...orderArray, y])}>{y.name}</button>)} </div>
                                : selectedSubcategory === "wines" ? 
                                <div> {drinksArray.filter((x) => (x.is_alc === true && x.subcategory === "wines")).map((y) => <button key={y.id} onClick={() => setOrderArray([...orderArray, y])}>{y.name}</button>)} </div>
                                : selectedSubcategory === "spirits" ? 
                                <div> {drinksArray.filter((x) => (x.is_alc === true && x.subcategory === "spirits")).map((y) => <button key={y.id} onClick={() => setOrderArray([...orderArray, y])}>{y.name}</button>)} </div>
                                : selectedSubcategory === "beers" ? 
                                <div> {drinksArray.filter((x) => (x.is_alc === true && x.subcategory === "beers")).map((y) => <button key={y.id} onClick={() => setOrderArray([...orderArray, y])}>{y.name}</button>)} </div>
                                : null
                            }
                            </div> 
                            : <div>
                                <button onClick={()=> setSelectedSubcategory("soft drinks")}>Soft drinks</button>
                                <button onClick={()=> setSelectedSubcategory("lemonades")}>Lemonades</button>
                                <button onClick={()=> setSelectedSubcategory("frozen")}>Frozen</button>
                                {/* Loads options for selected category (non alcoholic drinks) */}
                                {selectedSubcategory === "soft drinks" ? 
                                <div> {drinksArray.filter((x) => (x.is_alc === false && x.subcategory === "soft drinks")).map((y) => <button key={y.id} onClick={() => setOrderArray([...orderArray, y])}>{y.name}</button>)} </div>
                                : selectedSubcategory === "lemonades" ? 
                                <div> {drinksArray.filter((x) => (x.is_alc === false && x.subcategory === "lemonades")).map((y) => <button key={y.id} onClick={() => setOrderArray([...orderArray, y])}>{y.name}</button>)} </div>
                                : selectedSubcategory === "frozen" ? 
                                <div> {drinksArray.filter((x) => (x.is_alc === false && x.subcategory === "frozen")).map((y) => <button key={y.id} onClick={() => setOrderArray([...orderArray, y])}>{y.name}</button>)} </div>
                                : null
                                }
                            </div>}
                </div>}
                {/* Buttons to create/cancel order appear when menu items are selected; maybe change this so that they were greyed out but changed css to light up when first item selected */}
                {orderArray.length > 0 ? 
                <div>
                    <button onClick={createOrder}>Create Order</button>
                    <button onClick={cancelOrder}>Cancel Order</button>
                </div> 
                : null}
            </div>
        </div>
    )
}

export default OrderPage