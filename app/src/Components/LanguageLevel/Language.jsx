import React, { useEffect, useRef, useState } from "react";

function Language({familly}){

    const h1Ref = useRef()
    const languageListRef = useRef()
    const [svgStyle, setSvgStyle] = useState({
        points:null,
        fill:"transparent",
        stroke:"white",
        strokeWitdh:"1.5"
    })

    useEffect(() => {
        if(h1Ref.current && languageListRef.current){
            setSvgStyle(current => {
                const copyCurrent = {...current}
                const pointXBase = h1Ref.current.clientWidth
                const languageBoxHeight = languageListRef.current.clientHeight
                const point1 = `${pointXBase + 25},30`
                const point2 = `${pointXBase + 25},50`
                const point3 = `5,50`
                const point4 = `5,50`
                const point5 = `5,${languageBoxHeight  + 80}`
                const point6 = `20,${languageBoxHeight  + 80}`
                copyCurrent.points = `${point1} ${point2} ${point3} ${point4} ${point5} ${point6}`
                return copyCurrent
            })
        }
    }, [])

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
                                <div className="languageLevel"></div>
                            </div>
                        </div>
                    ))}
                </div>
                <svg width="100%" height="100%">
                <polyline
                    points={svgStyle.points}
                    fill={svgStyle.fill} 
                    stroke={svgStyle.stroke} 
                    strokeWidth={svgStyle.strokeWitdh}
                    />
            </svg>
            </div>
            

        </React.Fragment>
        
    )
}

export default Language;