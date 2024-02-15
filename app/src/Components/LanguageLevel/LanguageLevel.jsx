import React, { useEffect, useRef, useState } from "react";

function LanguageLevelBox(){

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
        <div className="languagesLevelBox">


            <div className="languageBox">
                <div className="title">
                    <h1 ref={h1Ref}>Front-end</h1>
                    <svg width="100%" height="850%">
                        <polyline
                         points={svgStyle.points}
                         fill={svgStyle.fill} 
                         stroke={svgStyle.stroke} 
                         strokeWidth={svgStyle.strokeWitdh}
                         />
                    </svg>
                </div>
                
                <div ref={languageListRef} className="languagesList">

                    <div className="language">
                        <div className="languageName">HTML</div>
                        <div className="languageLevelBox">
                            <div className="languageLevel"></div>
                        </div>
                    </div>

                    <div className="language">
                        <div className="languageName">CSS</div>
                        <div className="languageLevelBox">
                            <div className="languageLevel"></div>
                        </div>
                    </div>

                    <div className="language">
                        <div className="languageName">Javascript</div>
                        <div className="languageLevelBox">
                            <div className="languageLevel"></div>
                        </div>
                    </div>

                </div>
            </div>



            <div className="languageBox">
                <div className="title">
                    <h1>Back-end</h1>
                    
                </div>
                <div className="languagesList">
                    <div className="language">
                        <div className="languageName">PHP</div>
                        <div className="languageLevelBox">
                            <div className="languageLevel"></div>
                        </div>
                    </div>
                    <div className="language">
                        <div className="languageName">MySQL</div>
                        <div className="languageLevelBox">
                            <div className="languageLevel"></div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="languageBox">
                <div className="title">
                    <h1>Framework</h1>
                </div>
                <div className="languagesList">
                    <div className="language">
                        <div className="languageName">React</div>
                        <div className="languageLevelBox">
                            <div className="languageLevel"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LanguageLevelBox;