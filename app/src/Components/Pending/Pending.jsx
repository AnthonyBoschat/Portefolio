import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import usePending from "./usePending";
import Sphere from "../Sphere/Sphere"
import TypingSentence_LoadingAnimation from "../TypingSentence/TypingSentence_LoadingAnimation/TypingSentence_LoadingAnimation"
import Cursor_LoadingAnimation from "../Cursor/Cursor_loadingAnimation/Cursor_loadingAnimation"
function Pending(){

    const onPending = useSelector(store => store.pending.onPending)
    const {presentationConsoleRef} = usePending()


    return(
        <>
            {onPending && (
                <div ref={presentationConsoleRef} className="mainCategoryPresentationConsoleBox">
                    <div className="pendingSentenceBox">
                        <TypingSentence_LoadingAnimation/>
                        <Cursor_LoadingAnimation/>
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