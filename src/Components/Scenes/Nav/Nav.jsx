import React, { useEffect } from "react";
import HexagonCompiler from "../../Constructors/Hexagon/HexagonCompiler";
import useNav from "./useNav";
import { useSelector } from "react-redux";
import CircuitCompiler from "../../Constructors/Circuit/CircuitCompiler";
import ImpulseActivity from "../ImpulseActivity/ImpulseActivity";

function Nav(){

    const {hexagonsConfiguration} = useNav()

    return(
        <div className="navBox">
            <HexagonCompiler hexagonsConfiguration={hexagonsConfiguration}/>
        </div>
    )
}

export default Nav;