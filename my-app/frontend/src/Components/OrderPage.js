import React, { useState } from "react";
import Header from "./Header";

//! Because of the subcategory, you'll need to modify the backend (seed data, database)
// This component is for the page used to create new orders
function OrderPage({toHomepage}){

    const [selectedMainCategory, setSelectedMainCategory] = useState("food");
    const [selectedSubCategory, setSelectedSubCategory] = useState("mains");

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
                            <div className="orderSubCategory"></div>
                        </div> 
                    :   <div></div>}
            </div>
        </div>
    )
}





export default OrderPage