import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import usePending from "./usePending";
import Sphere from "../Sphere/Sphere"
import TypingSentence_LoadingAnimation from "../TypingSentence/TypingSentence_LoadingAnimation/TypingSentence_LoadingAnimation"

function Pending(){

    const onPending = useSelector(store => store.pending.onPending)
    const {
        visible,
        cursorSentenceRef,
        presentationConsoleRef
    } = usePending()


    return(
        <>
            {onPending && (
                <div ref={presentationConsoleRef} className="mainCategoryPresentationConsoleBox">
                    <div className="pendingSentenceBox">
                        <TypingSentence_LoadingAnimation/>
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