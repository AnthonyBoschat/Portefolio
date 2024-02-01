import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import Sphere from "../../Sphere/Sphere"
import TypingSentence_LoadingAnimation from "../../TypingSentence/TypingSentence_LoadingAnimation/TypingSentence_LoadingAnimation"
import Cursor_LoadingAnimation from "../../Cursor/Cursor_loadingAnimation/Cursor_loadingAnimation"


function LoadingAnimation(){

    const onLoad = useSelector(store => store.loading.sphere.onLoad)
    const presentationConsoleRef = useRef()


    return(
        <>
            {onLoad && (
                <div ref={presentationConsoleRef} className="mainCategoryPresentationConsoleBox">
                    <div className="pendingSentenceBox">
                        <TypingSentence_LoadingAnimation presentationConsoleRef={presentationConsoleRef}/>
                        <Cursor_LoadingAnimation/>
                    </div>
                </div>
            )}
            {!onLoad && (
                <Sphere/>
            )}
        </>
    )
    
}

export default LoadingAnimation;