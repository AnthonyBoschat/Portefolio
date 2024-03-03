import React, { useEffect, useRef, useState } from "react";
import useLanguage from "./useLanguage";
import ProgressBar from "../ProgressBar/ProgressBar";
import { useSelector } from "react-redux";

function Language({familly}){

    const impulseHyperActivation = useSelector(store => store.circuit.impulseHyperActivation)
    const [dashArray, setDashArray] = useState(105)

    const {
        h1Ref,
        languageListRef,
        svgPoint,
        circlePointX,
        circlePointY
    } = useLanguage(familly)

    const numberOfLanguage = familly.languages.length
    const dashArrayGoal =  105 + 100 + (20 * numberOfLanguage)

    useEffect(() => {
        let step = 105
        const intervalID = setInterval(() => {
            step += 0.5
            setDashArray(step)
            if(step >= dashArrayGoal){
                clearInterval(intervalID)
            }
        }, 10);

        return () => clearInterval(intervalID)
    }, [])



    

    return(
        <React.Fragment key={familly.famillyName}>
            <div className="languageBox">
                <div className="title">
                    <h1 ref={h1Ref}>{familly.famillyName}</h1>
                </div>
                
                <div ref={languageListRef} className="languagesList">
                    {familly.languages.map(language => (
                        <div key={language.name} className="language">
                            <div className="languageName">{language.name}</div>
                            <div className="languageLevelBox">
                                <ProgressBar impulseHyperActivation={impulseHyperActivation} level={language.level}/>
                            </div>
                        </div>
                    ))}
                </div>
                <svg strokeDasharray={`${dashArray}%`} >
                    <polyline
                        className={impulseHyperActivation ? "impulseHyperActivation" : null}
                        points={svgPoint}
                    />
                    <circle 
                    className={impulseHyperActivation ? "impulseHyperActivation" : null}
                        cx={circlePointX}
                        cy={circlePointY}
                        r={4}
                    />
                    
                </svg>
            </div>
            

        </React.Fragment>
        
    )
}

export default Language;