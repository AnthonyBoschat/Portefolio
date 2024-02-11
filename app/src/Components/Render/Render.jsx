import React, { useEffect, useRef } from "react";
import { Outlet } from "react-router-dom";
import useRender from "./useRender";

function Render(){

    const {renderBoxRef} = useRender()

    return(
        <div ref={renderBoxRef} className="renderBox">
            <Outlet/>
        </div>
    )
}

export default Render;