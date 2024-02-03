import React from "react";
import useMain from "../Main/useMain";
import TypingSentenceCompiler from "../TypingSentence/TypingSentenceCompiler";

function HexagonCompiler({hexagonConfiguration}){

    const { navigateTo } = useMain()

    return(
        <>
            {hexagonConfiguration.map(hexagon => (
                <div onClick={() => navigateTo(hexagon.navigateTo)} className="hexagon">
                    <svg viewBox="0 0 600 516.8">
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