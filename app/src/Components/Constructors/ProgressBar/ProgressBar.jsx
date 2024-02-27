import React, { useEffect } from "react";
import useProgressBar from "./useProgressBar";

function ProgressBar({className,level}){

    const {progressBarWidth} = useProgressBar(level)

    return(
        <div style={{width:`${progressBarWidth}%`}} className={className}></div>
    )
}

export default ProgressBar;