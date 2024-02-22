import React from "react";
import useHexagon from "./useHexagon";
import TypingSentenceCompiler from "../TypingSentence/TypingSentenceCompiler";

function Hexagon({hexagon}){

    const {
        dashOffset,
        svgRef
    } = useHexagon()

    return(
        <div onClick={() => hexagon.onClick && hexagon.onClick()} className="hexagon">
            <svg ref={svgRef} className={hexagon.selected === true ? "hexagonSelected" : null} viewBox="0 0 600 516.8">
                <polygon strokeDashoffset={`${dashOffset}%`} className="navPolygon" points="150.7,516.8 1.5,258.4 150.7,0 449,0 598.2,258.4 449,516.8 "/>
            </svg>
            
            <div className="hexagonSentenceBox">
                <div className="hexagonName">
                    <TypingSentenceCompiler sentencesConfiguration={hexagon.sentencesConfiguration} />
                </div>
            </div>
        </div>
    )
}

export default Hexagon;