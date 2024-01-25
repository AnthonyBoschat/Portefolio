import React, { useEffect, useState } from "react";
import useWhiteBar from "../../CustomHook/useWrite/useWhiteBar";
import useWrite from "../../CustomHook/useWrite/useWrite";
import { useDispatch, useSelector } from "react-redux";

function Loading_AnthonyBoschatApparition(){

    
    const dispatch = useDispatch()
    const [nameToLoad, setNameToLoad] = useState([])
    const {write} = useWrite()
    const {cursorVisible} = useWhiteBar()
    const visible = cursorVisible ? {visibility:"visible"} : {visibility:"hidden"}

    useEffect(() => {
        const timeoutID = write({ timeout:1500, sentence:"Anthony Boschat", speed:100, setter:setNameToLoad})

        return(() => {
            clearTimeout(timeoutID)
        })
    }, [])


    return(
        <div className="nameApparitionBox">
            <div className="nameApparition">
                {/* <span className="nameBox">Anthony Boschat</span>
                <div className="cursorBox">
                    <div style={visible} className="cursorBar"></div>
                </div> */}

                <span className="nameBox">{nameToLoad.join("")}</span>
                <div style={visible} className="cursorBar"></div>
                
            </div>
        </div>
    )
}

export default Loading_AnthonyBoschatApparition;