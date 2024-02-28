import React from "react";
import TypingSentenceCompiler from "../TypingSentence/TypingSentenceCompiler";
import Hexagon from "./Hexagon";

function HexagonCompiler({hexagonsConfiguration}){

    

    return(
        <>
            {hexagonsConfiguration.map((hexagon, index) => <Hexagon key={index} hexagon={hexagon} />)}
        </>
    )
}

export default HexagonCompiler;