import React from "react";
import TypingSentence_Contact from "../TypingSentence/Contact";
import TypingSentence_Profil from "../TypingSentence/Profil";
import TypingSentence_Projet from "../TypingSentence/Projet";
import useMain from "../Main/useMain";

function Nav(){

    const { navigateTo } = useMain()

    const navigationHexagons = [
        {navigateTo:"Profil", typingSentence:<TypingSentence_Profil/>},
        {navigateTo:"Projet", typingSentence:<TypingSentence_Projet/>},
        {navigateTo:"Contact", typingSentence:<TypingSentence_Contact/>},
    ]

    return(
            <div className="navBox">
                {navigationHexagons.map(hexagon => (
                    <div onClick={() => navigateTo(hexagon.navigateTo)} className="hexagon">
                        <svg viewBox="0 0 600 516.8">
                            <polygon points="150.7,516.8 1.5,258.4 150.7,0 449,0 598.2,258.4 449,516.8 "/>
                        </svg>
                        <div className="hexagonSentenceBox">
                            <div className="hexagonName">
                                {hexagon.typingSentence}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
    )
}

export default Nav;