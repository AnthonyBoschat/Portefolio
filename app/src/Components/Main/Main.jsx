import React, { useEffect, useRef, useState } from "react";
import useWhiteBar from "../../Features/Writter/CustomHook/useWhiteBar";
import { useDispatch } from "react-redux";
import { updateCursor } from "../../Features/Writter/Slice/WritterSlice";
import useWrite from "../../Features/Writter/CustomHook/useWrite";
import AnthonyBoschat from "../../Ressource/AnthonyBoschat.png"
import { Outlet } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function Main(){

    const [profilSentence, setProfilSentence] = useState([])
    const [projetSentence, setProjetSentence] = useState([])
    const [contactSentence, setContactSentence] = useState([])
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
            ending:() => cursorDisparition(profilCursorRef, 200)
        })
        const timeoutID2 = write({
            timeout:300,
            sentence:"Projet",
            speed:70,
            setter:setProjetSentence,
            ending:() => cursorDisparition(projetCursorRef, 200)
        })
        const timeoutID3 = write({
            timeout:500,
            sentence:"Contact",
            speed:40,
            setter:setContactSentence,
            ending:() => cursorDisparition(contactCursorRef, 200)
        })

        return(() => {
            clearTimeout(timeoutID1)
            clearTimeout(timeoutID2)
            clearTimeout(timeoutID3)
        })
    }, [])

    return(
            <div className="mainDisplay">
                <div className="mainCategoryBox">

                    <div className="mainCategoryList">

                        <div className="categorySentenceBox">
                            <Link to="Profil" className="categoryName">{profilSentence}</Link>
                            <div ref={profilCursorRef} className="categoryCursorBar"></div>
                        </div>

                        <div className="categorySentenceBox">
                            <Link to="Projet" className="categoryName">{projetSentence}</Link>
                            <div ref={projetCursorRef} className="categoryCursorBar"></div>
                        </div>

                        <div className="categorySentenceBox">
                            <Link to="Contact" className="categoryName">{contactSentence}</Link>
                            <div ref={contactCursorRef} className="categoryCursorBar"></div>
                        </div>

                        <div className="categorySentenceBox">
                            <Link to="/" className="categoryName">Retour</Link>
                        </div>
                        
                    </div>


                    <div className="mainCategoryPresentationDisplay">
                        <div className="mainCategoryPresentationBox">
                            <Outlet/>
                        </div>
                    </div>

                </div>
            </div>
    )
}

export default Main;