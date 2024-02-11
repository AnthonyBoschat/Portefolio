import React from "react";
import { Outlet } from "react-router-dom";
import useRender from "./useRender";
import { useSelector } from "react-redux";

function Render(){

    const {renderBoxRef} = useRender()
    const navRenderOnChange = useSelector(store => store.nav.navRenderOnChange)
    
    return(
        <div ref={renderBoxRef} className={!navRenderOnChange ? "renderBox renderIn" : "renderBox renderOut"}>
            <Outlet/>
        </div>
    )
}

export default Render;