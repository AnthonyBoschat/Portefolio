import React, { useEffect } from "react";
import useWhiteBar from "../../CustomHook/Loading/useWhiteBar";
import useWriteName from "../../CustomHook/Loading/useWriteName";

function Loading_AnthonyBoschatApparition(){

    const {whiteBarVisible} = useWhiteBar()
    const {nameToShow} = useWriteName()
    const visible = whiteBarVisible ? {visibility:"visible"} : {visibility:"hidden"}


    return(
        <div className="nameApparitionBox">
            <div className="nameApparition">
                <span className="nameBox">Anthony Boschat</span>
                <div className="cursorBox">
                    <div className="cursorBar"></div>
                </div>

                {/* {<span className="nameBox">{nameToShow.join("")}</span>} */}
                {/* {<div style={visible} className="whiteBar"></div> } */}
            </div>
            
        </div>
    )
}

export default Loading_AnthonyBoschatApparition;