import React, { useEffect, useRef, useState } from "react";
import useLanguage from "./useLanguage";
import ProgressBar from "../ProgressBar/ProgressBar";

function Language({familly}){

    
    const {
        progressBarRef,
        h1Ref,
        languageListRef,
        svgPoint,
    } = useLanguage(familly)

    

    return(
        <React.Fragment key={familly.name}>

            <div className="languageBox">
                <div className="title">
                    <h1 ref={h1Ref}>{familly.name}</h1>
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
                <svg width="100%" height="100%">
                <polyline
                    points={svgPoint}
                    />
            </svg>
            </div>
            

        </React.Fragment>
        
    )
}

export default Language;