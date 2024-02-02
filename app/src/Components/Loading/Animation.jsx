import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import Sphere from "../Sphere/Sphere"
import Console from "../Console/Console";
import TypingSentence_LoadingAnimation from "../TypingSentence/LoadingAnimation"
import Cursor_Console from "../Cursor/Console";


function LoadingAnimation(){

    const onLoad = useSelector(store => store.loading.sphere.onLoad)
    const presentationConsoleRef = useRef()

    return(
        <>
            {onLoad && (
                <Console 
                    consoleConfiguration = {{
                        typingSentence:<TypingSentence_LoadingAnimation presentationConsoleRef={presentationConsoleRef}/>,
                        cursor:<Cursor_Console/>,
                        presentationConsoleRef:presentationConsoleRef
                    }}
                />
            )}
            {!onLoad && (
                <Sphere/>
            )}
        </>
    )
    
}

export default LoadingAnimation;