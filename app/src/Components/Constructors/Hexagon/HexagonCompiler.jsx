import React from "react";
import TypingSentenceCompiler from "../TypingSentence/TypingSentenceCompiler";

function HexagonCompiler({hexagonsConfiguration}){


    return(
        <>
            {hexagonsConfiguration.map((hexagon, index)=> (
                <div key={index} onClick={() => hexagon.onClick && hexagon.onClick()} className="hexagon">
                    <svg className={hexagon.selected === true ? "hexagonSelected" : null} viewBox="0 0 600 516.8">
                        <polygon points="150.7,516.8 1.5,258.4 150.7,0 449,0 598.2,258.4 449,516.8 "/>
                    </svg>
                    
                    <div className="hexagonSentenceBox">
                        <div className="hexagonName">
                            <TypingSentenceCompiler sentencesConfiguration={hexagon.sentencesConfiguration} />
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default HexagonCompiler;