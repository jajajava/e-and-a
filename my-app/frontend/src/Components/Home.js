import React from "react";
import Header from "./Header";


function Home({handleSignout}) {
    return (
        <div className="body2">
            <Header handleSignout={handleSignout} />
            <div></div>
        </div>
    )
}





export default Home