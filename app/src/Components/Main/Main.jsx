import React from "react";
import { Outlet } from "react-router-dom";
import useMain from "./useMain";

function Main(){

    const {
        profilSentence,
        projetSentence,
        contactSentence,
        navigateTo,
        presentationBoxRef
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
                    

                        {/* <div className="categorySentenceBox">
                            <Link to="Profil" className="categoryName">{profilSentence}</Link>
                            <div ref={profilCursorRef} className="categoryCursorBar"></div>
                        </div>

                        <div className="categorySentenceBox">
                            <Link to="Projet" className="categoryName">{projetSentence}</Link>
                            <div ref={projetCursorRef} className="categoryCursorBar"></div>
                        </div>

                        <div className="categorySentenceBox">
                            <Link to="/" className="categoryName">{contactSentence}</Link>
                            <div ref={contactCursorRef} className="categoryCursorBar"></div>
                        </div> */}
                        
                    </div>


                    <div className="mainCategoryPresentationDisplay">
                        <div ref={presentationBoxRef} className="mainCategoryPresentationBox">
                            <Outlet />
                        </div>
                    </div>

                </div>
            </div>
    )
}

export default Main;