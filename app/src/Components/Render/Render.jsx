import React from "react";
import { Outlet } from "react-router-dom";

function Render(){

    return(
        <div className="renderBox">
            <Outlet/>
        </div>
    )
}

export default Render;