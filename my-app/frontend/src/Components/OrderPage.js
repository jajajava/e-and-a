import React, { useState } from "react";
import Header from "./Header";

//! Because of the subcategory, you'll need to modify the backend (seed data, database)
// This component is for the page used to create new orders
function OrderPage({toHomepage}){

    const [selectedMainCategory, setSelectedMainCategory] = useState("food");
    const [selectedSubCategory, setSelectedSubCategory] = useState("mains");
    // I'm not yet sure if subcategory2 needs to exist for foods, but it does for drink types.
    const [selectedSubCategory2, setSelectedSubCategory2] = useState("soft drinks");

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
                                    <button id="orderSubCategory2" className="orderSubCategory">Soft drinks</button>
                                    <button id="orderSubCategory2" className="orderSubCategory">Lemonades</button>
                                    <button id="orderSubCategory2" className="orderSubCategory">Frozen Drinks</button>
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