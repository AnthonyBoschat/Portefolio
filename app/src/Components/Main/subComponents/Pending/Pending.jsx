import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useWhiteBar from "../../../../Features/Writter/CustomHook/useWhiteBar";
import useWrite from "../../../../Features/Writter/CustomHook/useWrite";
import usePending from "./usePending"
import Sphere from "./subComponents/Sphere/Sphere";

function Pending(){

    const onPending = useSelector(store => store.pending.onPending)

    const {
        visible,
        pendingSentence1,
        pendingSentence2,
        cursorSentenceRef
    } = usePending()


    return(
        <>
            {onPending && (
                <div className="pendingSentenceBox">
                    {pendingSentence1}
                    {pendingSentence2}
                    <div style={visible} ref={cursorSentenceRef} className="pendingSentenceCursor"></div>
                </div>
            )}
            {!onPending && (
                <Sphere/>
            )}
        </>
    )
    
}

export default Pending;