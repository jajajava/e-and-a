import React, { useEffect, useState } from "react";
import Header from "./Header";

// This component is for the page used to create new orders
function OrderPage({toHomepage}){

    const [selectedMainCategory, setSelectedMainCategory] = useState("food");
    const [selectedSubcategory, setSelectedSubcategory] = useState("cocktails")
    //I'm not yet sure if subcategory2 needs to exist for foods, but it does for drink types.
    const [alcoholSelected, setAlcoholSelected] = useState(true)
    const [orderArray, setOrderArray] = useState([])
    const [foodsArray, setFoodsArray] = useState([])
    const [drinksArray, setDrinksArray] = useState([])

    //! orderArray to be used as JSON body for POST call. 
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
            setFoodsArray(prevFoodsArray => [...prevFoodsArray, ...data.filter(x => x.category === "foods")]);
            setDrinksArray(prevDrinksArray => [...prevDrinksArray, ...data.filter(x => x.category === "drinks")])})
    }, [])

    // Keeps the console clean, only logs orderArray when there's a state change
    useEffect(()=> {
        console.log(orderArray)
    }, [orderArray])

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
                                {/* You will need to replace .subcategory2 with category in the backend */}
                                {selectedSubcategory === "cocktails" ?
                                <div> {drinksArray.filter((x) => (x.is_alc === true && x.subcategory2 === "cocktails")).map((y) => <button key={y.id} onClick={() => setOrderArray([...orderArray, y])}>{y.name}</button>)} </div>
                                : selectedSubcategory === "wines" ? 
                                <div> {drinksArray.filter((x) => (x.is_alc === true && x.subcategory2 === "wines")).map((y) => <button key={y.id} onClick={() => setOrderArray([...orderArray, y])}>{y.name}</button>)} </div>
                                : selectedSubcategory === "spirits" ? 
                                <div> {drinksArray.filter((x) => (x.is_alc === true && x.subcategory2 === "spirits")).map((y) => <button key={y.id} onClick={() => setOrderArray([...orderArray, y])}>{y.name}</button>)} </div>
                                : selectedSubcategory === "beers" ? 
                                <div> {drinksArray.filter((x) => (x.is_alc === true && x.subcategory2 === "beers")).map((y) => <button key={y.id} onClick={() => setOrderArray([...orderArray, y])}>{y.name}</button>)} </div>
                                : null
                            }
                            </div> 
                            : <div>
                                <button onClick={()=> setSelectedSubcategory("soft drinks")}>Soft drinks</button>
                                <button onClick={()=> setSelectedSubcategory("lemonades")}>Lemonades</button>
                                <button onClick={()=> setSelectedSubcategory("frozen")}>Frozen</button>
                                {/* Loads options for selected category (non alcoholic drinks) */}
                                {selectedSubcategory === "soft drinks" ? 
                                <div> {drinksArray.filter((x) => (x.is_alc === false && x.subcategory2 === "soft drinks")).map((y) => <button key={y.id} onClick={() => setOrderArray([...orderArray, y])}>{y.name}</button>)} </div>
                                : selectedSubcategory === "lemonades" ? 
                                <div> {drinksArray.filter((x) => (x.is_alc === false && x.subcategory2 === "lemonades")).map((y) => <button key={y.id} onClick={() => setOrderArray([...orderArray, y])}>{y.name}</button>)} </div>
                                : selectedSubcategory === "frozen" ? 
                                <div> {drinksArray.filter((x) => (x.is_alc === false && x.subcategory2 === "frozen")).map((y) => <button key={y.id} onClick={() => setOrderArray([...orderArray, y])}>{y.name}</button>)} </div>
                                : null
                                }
                            </div>}
                </div>}
            </div>
        </div>
    )
}

export default OrderPage