import React, { useEffect } from "react";
import HexagonCompiler from "../../Constructors/Hexagon/HexagonCompiler";
import useNav from "./useNav";

function Nav(){

    const {hexagonsConfiguration} = useNav()

    return(
        <div className="navBox">
            <HexagonCompiler hexagonsConfiguration={hexagonsConfiguration}/>
        </div>
    )
}

export default Nav;