import React, { useEffect } from "react";
import useProgressBar from "./useProgressBar";

function ProgressBar({level, impulseHyperActivation}){

    const {progressBarWidth} = useProgressBar(level)

    return(
        <div className="languageProgressBar" style={{width:`${progressBarWidth}%`}}></div>
    )
}

export default ProgressBar;