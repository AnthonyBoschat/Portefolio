import React, { useEffect, useState } from "react";
import useWhiteBar from "../../Features/Writter/CustomHook/useWhiteBar";
import useWrite from "../../Features/Writter/CustomHook/useWrite";
import { useDispatch } from "react-redux";
import { update_onLoad } from "./LoadingSlice";
import { updateCursor } from "../../Features/Writter/Slice/WritterSlice";

function Loading_AnthonyBoschatApparition(){

    
    const dispatch = useDispatch()
    const [nameToLoad, setNameToLoad] = useState([])
    const {write} = useWrite()

    useEffect(() => {
        const timeoutID = write({
            timeout:1500,
            sentence:"Anthony Boschat",
            speed:100,
            setter:setNameToLoad,
            ending:() => {
                setTimeout(() => {
                    dispatch(update_onLoad(false))
                }, 2500);
            }
        })

        return(() => {
            clearTimeout(timeoutID)
        })
    }, [])


    return(
        <div className="loadingDisplay">
            <div className="loadingBox">
                <div className="nameApparitionBox">
                    <div className="nameApparition">
                        {/* <span className="nameBox">Anthony Boschat</span>
                        <div className="cursorBox">
                            <div style={visible} className="cursorBar"></div>
                        </div> */}

                        <span className="nameBox">{nameToLoad.join("")}</span>
                        <div className="loadingCursorBar"></div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loading_AnthonyBoschatApparition;