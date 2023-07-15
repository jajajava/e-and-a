import React, { useContext } from "react";
import { Context } from "./App";

function TimePage(){
    let user = useContext(Context)
    return (
        <div>
            <form>
                <button>{user.time_in !== null ? "Clock out" : "Clock in"}</button>
            </form>
        </div>
    )
}







export default TimePage