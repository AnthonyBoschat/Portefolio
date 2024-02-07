import React, { useEffect } from "react";
import HexagonCompiler from "../Hexagon/HexagonCompiler";
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