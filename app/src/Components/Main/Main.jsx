import React, { useEffect, useRef, useState } from "react";
import useWhiteBar from "../../Features/Writter/CustomHook/useWhiteBar";
import { useDispatch } from "react-redux";
import { updateCursor } from "../../Features/Writter/Slice/WritterSlice";
import useWrite from "../../Features/Writter/CustomHook/useWrite";
import AnthonyBoschat from "../../Ressource/AnthonyBoschat.png"
import { Outlet, useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function Main(){

    const [profilSentence, setProfilSentence] = useState([])
    const [projetSentence, setProjetSentence] = useState([])
    const [contactSentence, setContactSentence] = useState([])
    const navigate = useNavigate()
    const profilCursorRef = useRef()
    const projetCursorRef = useRef()
    const contactCursorRef = useRef()
    const {write} = useWrite()
    const {cursorDisparition} = useWhiteBar()
    const dispatch = useDispatch()

    
    useEffect(() => {
        dispatch(updateCursor(true))
        const timeoutID1 = write({
            timeout:100,
            sentence:"Profil",
            speed:60,
            setter:setProfilSentence,
            // ending:() => cursorDisparition(profilCursorRef, 200)
        })
        const timeoutID2 = write({
            timeout:300,
            sentence:"Projet",
            speed:70,
            setter:setProjetSentence,
            // ending:() => cursorDisparition(projetCursorRef, 200)
        })
        const timeoutID3 = write({
            timeout:500,
            sentence:"Contact",
            speed:40,
            setter:setContactSentence,
            // ending:() => cursorDisparition(contactCursorRef, 200)
        })

        return(() => {
            clearTimeout(timeoutID1)
            clearTimeout(timeoutID2)
            clearTimeout(timeoutID3)
        })
    }, [])

    const navigateTo = (route) => {
        navigate(route)
    }

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
                        <div className="mainCategoryPresentationBox">
                            <Outlet />
                        </div>
                    </div>

                </div>
            </div>
    )
}

export default Main;