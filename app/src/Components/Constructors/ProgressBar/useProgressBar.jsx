import React, { useEffect, useState } from "react";

export default function useProgressBar(goal){

    const [progressBarWidth, setProgressBarWidth] = useState(0)
    
    useEffect(() => {
        let step = 0
        const intervalID = setInterval(() => {
            step++
            if(step === goal){
                clearInterval(intervalID)
            }
            setProgressBarWidth(step)
        }, 40);

        return () => clearInterval(intervalID)
    }, [])

    





    return{
        progressBarWidth
    }
}