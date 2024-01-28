import React from "react";
import { Outlet } from "react-router-dom";
import useMain from "./useMain";

function Main(){

    const {
        profilSentence,
        projetSentence,
        contactSentence,
        navigateTo,
    } = useMain()

    return(
            <div className="mainDisplay">
                <div className="mainCategoryBox">
                    <div className="mainCategoryList">


                        <div onClick={() => navigateTo("Profil")} className="hexagon profilCategoryBox">
                            <svg viewBox="0 0 600 516.8">
                                <polygon points="150.7,516.8 1.5,258.4 150.7,0 449,0 598.2,258.4 449,516.8 "/>
                            </svg>
                            <div className="categorySentenceBox">
                                <div className="categoryName">{profilSentence}</div>
                            </div>
                        </div>

                        <div onClick={() => navigateTo("Projet")} className="hexagon projetCategoryBox">
                            <svg viewBox="0 0 600 516.8">
                                <polygon points="150.7,516.8 1.5,258.4 150.7,0 449,0 598.2,258.4 449,516.8 "/>
                            </svg>
                            <div className="categorySentenceBox">
                                <div className="categoryName">{projetSentence}</div>
                            </div>
                        </div>

                        <div onClick={() => navigateTo("/")} className="hexagon contactCategoryBox">
                            <svg viewBox="0 0 600 516.8">
                                <polygon points="150.7,516.8 1.5,258.4 150.7,0 449,0 598.2,258.4 449,516.8 "/>
                            </svg>
                            <div className="categorySentenceBox">
                                <div className="categoryName">{contactSentence}</div>
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