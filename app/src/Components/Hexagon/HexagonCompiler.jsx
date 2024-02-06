import React from "react";
import useMain from "../Main/useMain";
import TypingSentenceCompiler from "../TypingSentence/TypingSentenceCompiler";
import useNav from "../Nav/useNav";

function HexagonCompiler({hexagonConfiguration}){

    const { navigateTo } = useMain()
    const {determineClickAction} = useNav()

    const handleClick = (hexagon) => {
        determineClickAction(hexagon.navigateTo)
        navigateTo(hexagon.navigateTo)
    }

    return(
        <>
            {hexagonConfiguration.map((hexagon, index)=> (
                <div key={index} onClick={() => handleClick(hexagon)} className="hexagon">
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