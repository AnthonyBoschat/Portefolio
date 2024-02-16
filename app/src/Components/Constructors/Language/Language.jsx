import React, { useEffect, useRef, useState } from "react";
import useLanguage from "./useLanguage";
import ProgressBar from "../ProgressBar/ProgressBar";

function Language({familly}){

    const [dashArray, setDashArray] = useState(105)

    const {
        h1Ref,
        languageListRef,
        svgPoint,
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
                                <ProgressBar className={"languageProgressBar"} level={language.level}/>
                            </div>
                        </div>
                    ))}
                </div>
                <svg strokeDasharray={`${dashArray}%`} >
                <polyline
                    points={svgPoint}
                    />
            </svg>
            </div>
            

        </React.Fragment>
        
    )
}

export default Language;