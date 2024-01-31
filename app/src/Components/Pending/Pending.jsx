import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import usePending from "./usePending";
import Sphere from "../Sphere/Sphere"

function Pending(){

    const onPending = useSelector(store => store.pending.onPending)

    const {
        visible,
        pendingSentence1,
        pendingSentence2,
        cursorSentenceRef,
        presentationConsoleRef
    } = usePending()


    return(
        <>
            {onPending && (
                <div ref={presentationConsoleRef} className="mainCategoryPresentationConsoleBox">
                    <div className="pendingSentenceBox">
                        {pendingSentence1}
                        {pendingSentence2}
                        <div style={visible} ref={cursorSentenceRef} className="pendingSentenceCursor"></div>
                    </div>
                </div>
            )}
            {!onPending && (
                <Sphere/>
            )}
        </>
    )
    
}

export default Pending;