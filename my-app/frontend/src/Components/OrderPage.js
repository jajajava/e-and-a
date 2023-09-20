import React, { useState } from "react";
import Header from "./Header";

// This component is for the page used to create new orders
function OrderPage({toHomepage}){

    const [selectedMainCategory, setSelectedMainCategory] = useState("food");
    // const [selectedSubCategory, setSelectedSubCategory] = useState("mains") // Make this conditional so that if the main is food, it's "mains", else "drinks"

    return(
        <div>
            <Header toHomepage={toHomepage}/>
            <div className="orderMainCategory">
                    {/* Food has "mains", "sauces", and "sides" */}
                    <button onClick={()=>{setSelectedMainCategory("food")}}>Food</button> 
                    {/* Drink has "drinks" */}
                    <button onClick={()=> {setSelectedMainCategory("drink")}}>Drink</button>
                    {selectedMainCategory === "food" ? 
                        <div>
                            <div className="orderSubCategory"></div>
                        </div> 
                    :   <div></div>}
            </div>
        </div>
    )
}





export default OrderPage