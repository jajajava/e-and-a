import React, { useEffect, useState } from "react";
import Header from "./Header";

//! Modify the seed data after whole menu is done to create all items in DB
// This component is for the page used to create new orders
function OrderPage({toHomepage}){

    const [selectedMainCategory, setSelectedMainCategory] = useState("food");
    const [selectedSubCategory, setSelectedSubCategory] = useState("mains");
    // I'm not yet sure if subcategory2 needs to exist for foods, but it does for drink types.
    const [selectedSubCategory2, setSelectedSubCategory2] = useState("soft drinks");
    const [selectedSubCategory2Array, setSelectedSubCategory2Array] = useState([])
    const [orderArray, setOrderArray] = useState([])

    // <button className="orderSubCategory"></button>

    useEffect(()=> { //! Add onClick to all buttons that adds it to the array that is the order- json body for POST call
        let tempArray = []
        if (selectedSubCategory2 === "soft drinks"){
            tempArray = [
            <button onClick={()=> setOrderArray([...orderArray, "Coca Cola"])} className="orderSubCategory">Coca Cola</button>,
            <button onClick={()=> setOrderArray([...orderArray, "Diet Coke"])} className="orderSubCategory">Diet Coke</button>,
            <button onClick={()=> setOrderArray([...orderArray, "Sprite"])} className="orderSubCategory">Sprite</button>,
            <button onClick={()=> setOrderArray([...orderArray, "Pepsi"])} className="orderSubCategory">Pepsi</button>,
            <button onClick={()=> setOrderArray([...orderArray, "Fanta"])} className="orderSubCategory">Fanta</button>,
            <button onClick={()=> setOrderArray([...orderArray, "Root Beer"])} className="orderSubCategory">Root Beer</button>,
            <button onClick={()=> setOrderArray([...orderArray, "Ginger Ale"])} className="orderSubCategory">Ginger Ale</button>
            ]
        } else if (selectedSubCategory2 === "lemonades"){
            tempArray = [
            <button onClick={()=> setOrderArray([...orderArray, "Classic Lemonade"])} className="orderSubCategory">Classic</button>,
            <button onClick={()=> setOrderArray([...orderArray, "Pink Lemonade"])} className="orderSubCategory">Pink</button>,
            <button onClick={()=> setOrderArray([...orderArray, "Raspberry Lemonade"])} className="orderSubCategory">Raspberry</button>
            ]
        } else if (selectedSubCategory2 === "frozen"){
            tempArray = [
            <button onClick={()=> setOrderArray([...orderArray, "Frozen Strawberry"])} className="orderSubCategory">Strawberry limeade</button>,
            <button onClick={()=> setOrderArray([...orderArray, "Frozen Blueberry"])} className="orderSubCategory">Blueberry limeade</button>,
            <button onClick={()=> setOrderArray([...orderArray, "Frozen Cherry"])} className="orderSubCategory">Cherry limeade</button>,
            <button onClick={()=> setOrderArray([...orderArray, "Frozen Peach"])} className="orderSubCategory">Peach limeade</button>,
            <button onClick={()=> setOrderArray([...orderArray, "Frozen Mango"])} className="orderSubCategory">Mango limeade</button>
            ]
        }
        setSelectedSubCategory2Array(tempArray)
    }, [selectedSubCategory2, orderArray])

    console.log(orderArray)
    return(
        <div>
            <Header toHomepage={toHomepage}/>
            <div className="orderMainCategory">
                    {/* Food has "mains", "sauces", and "sides" */}
                    <button onClick={()=>{setSelectedMainCategory("food"); setSelectedSubCategory("mains")}}>Food</button> 
                    {/* Drink has "drinks" */}
                    <button onClick={()=> {setSelectedMainCategory("drink"); setSelectedSubCategory("non-alc")}}>Drink</button>
                    {selectedMainCategory === "food" ? 
                        <div>
                            
                        </div> 
                    :   <div>
                            <button className="orderSubCategory" onClick={() => {setSelectedSubCategory("non-alc"); setSelectedSubCategory2("soft drinks")}}>Non-alc</button>
                            <button className="orderSubCategory" onClick={() => {setSelectedSubCategory("alcohol"); setSelectedSubCategory2("beers")}}>Alcohol</button>
                            {selectedSubCategory === "non-alc" ?
                            <div>
                                <div>
                                    <button id="orderSubCategory2" className="orderSubCategory" onClick={() => {setSelectedSubCategory2("soft drinks");}}>Soft drinks</button>
                                    <button id="orderSubCategory2" className="orderSubCategory" onClick={() => {setSelectedSubCategory2("lemonades");}}>Lemonades</button>
                                    <button id="orderSubCategory2" className="orderSubCategory" onClick={() => {setSelectedSubCategory2("frozen");}}>Frozen Drinks</button>
                                </div>
                                {selectedSubCategory2Array}
                            </div>
                            :   <div>
                                    <button className="orderSubCategory">Beers</button>
                                    <button className="orderSubCategory">Wines</button>
                                    <button className="orderSubCategory">Cocktails</button>
                                    <button className="orderSubCategory">Liquors</button>
                                    {/* Make happy hour access certain alcoholic drinks at a reduced price! */}
                                    <button className="orderSubCategory">Happy Hour</button>
                                </div>
                            }
                        </div>}
            </div>
        </div>
    )
}

export default OrderPage