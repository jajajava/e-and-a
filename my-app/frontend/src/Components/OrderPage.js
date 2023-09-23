import React, { useEffect, useState } from "react";
import Header from "./Header";

//! Because of the subcategory, you'll need to modify the backend (seed data, database)
// This component is for the page used to create new orders
function OrderPage({toHomepage}){

    const [selectedMainCategory, setSelectedMainCategory] = useState("food");
    const [selectedSubCategory, setSelectedSubCategory] = useState("mains");
    // I'm not yet sure if subcategory2 needs to exist for foods, but it does for drink types.
    const [selectedSubCategory2, setSelectedSubCategory2] = useState("soft drinks");
    const [selectedSubCategory2Array, setSelectedSubCategory2Array] = useState([])

    // <button className="orderSubCategory"></button>

    useEffect(()=> {
        let tempArray = []
        if (selectedSubCategory2 === "soft drinks"){
            tempArray = [
            <button className="orderSubCategory">Coca Cola</button>,
            <button className="orderSubCategory">Diet Coke</button>,
            <button className="orderSubCategory">Sprite</button>,
            <button className="orderSubCategory">Pepsi</button>,
            <button className="orderSubCategory">Fanta</button>,
            <button className="orderSubCategory">Root Beer</button>,
            <button className="orderSubCategory">Ginger Ale</button>
            ]
        } else if (selectedSubCategory2 === "lemonades"){
            tempArray = [
            <button className="orderSubCategory">Classic</button>,
            <button className="orderSubCategory">Pink</button>,
            <button className="orderSubCategory">Blueberry</button>
            ]
        } else if (selectedSubCategory2 === "frozen"){
            tempArray = [
            <button className="orderSubCategory">Strawberry limeade</button>,
            <button className="orderSubCategory">Blueberry limeade</button>,
            <button className="orderSubCategory">Cherry limeade</button>,
            <button className="orderSubCategory">Peach limeade</button>,
            <button className="orderSubCategory">Mango limeade</button>
            ]
        }
        setSelectedSubCategory2Array(tempArray)
    }, [selectedSubCategory2])


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