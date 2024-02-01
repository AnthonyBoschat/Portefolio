import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import usePending from "./usePending";
import Sphere from "../Sphere/Sphere"
import TypingSentence_Loading from "../TypingSentence/TypingSentence_Loading/TypingSentence_Loading"

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
                        <TypingSentence_Loading/>
                        {/* <div style={visible} ref={cursorSentenceRef} className="pendingSentenceCursor"></div> */}
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