import React from "react";
import { Outlet } from "react-router-dom";
import useMain from "./useMain";
import TypingSentence_Contact from "../TypingSentence/Contact";
import TypingSentence_Profil from "../TypingSentence/Profil";
import TypingSentence_Projet from "../TypingSentence/Projet";

function Main(){

    const { navigateTo } = useMain()

    return(
            <div className="mainDisplay">
                <div className="mainCategoryBox">
                    <div className="mainCategoryList">


                        <div onClick={() => navigateTo("Profil")} className="hexagon">
                            <svg viewBox="0 0 600 516.8">
                                <polygon points="150.7,516.8 1.5,258.4 150.7,0 449,0 598.2,258.4 449,516.8 "/>
                            </svg>
                            <div className="categorySentenceBox">
                                <div className="categoryName">
                                    <TypingSentence_Profil/>
                                </div>
                            </div>
                        </div>

                        <div onClick={() => navigateTo("Projet")} className="hexagon">
                            <svg viewBox="0 0 600 516.8">
                                <polygon points="150.7,516.8 1.5,258.4 150.7,0 449,0 598.2,258.4 449,516.8 "/>
                            </svg>
                            <div className="categorySentenceBox">
                                <div className="categoryName">
                                    <TypingSentence_Projet/>
                                </div>
                            </div>
                        </div>

                        <div onClick={() => navigateTo("/")} className="hexagon">
                            <svg viewBox="0 0 600 516.8">
                                <polygon points="150.7,516.8 1.5,258.4 150.7,0 449,0 598.2,258.4 449,516.8 "/>
                            </svg>
                            <div className="categorySentenceBox">
                                <div className="categoryName">
                                    <TypingSentence_Contact/>
                                </div>
                            </div>
                        </div>
                        
                    </div>


                    <div className="mainCategoryPresentationDisplay">
                        <Outlet/>
                    </div>

                </div>
            </div>
    )
}

export default Main;