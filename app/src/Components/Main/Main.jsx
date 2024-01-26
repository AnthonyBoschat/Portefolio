import React, { useEffect, useRef, useState } from "react";
import useWhiteBar from "../../Features/Writter/CustomHook/useWhiteBar";
import { useDispatch } from "react-redux";
import { updateCursor } from "../../Features/Writter/Slice/WritterSlice";
import useWrite from "../../Features/Writter/CustomHook/useWrite";

function Main(){

    const [profilSentence, setProfilSentence] = useState([])
    const [projetSentence, setProjetSentence] = useState([])
    const [contactSentence, setContactSentence] = useState([])
    const profilCursorRef = useRef()
    const projetCursorRef = useRef()
    const contactCursorRef = useRef()
    const {write} = useWrite()
    const {cursorVisible, cursorDisparition} = useWhiteBar()
    const visible = cursorVisible ? {visibility:"visible"} : {visibility:"hidden"}
    const dispatch = useDispatch()

    
    useEffect(() => {
        dispatch(updateCursor(true))
        const timeoutID1 = write({
            timeout:500,
            sentence:"Profil",
            speed:70,
            setter:setProfilSentence,
            ending:() => cursorDisparition(profilCursorRef, 200)
        })
        const timeoutID2 = write({
            timeout:700,
            sentence:"Projet",
            speed:100,
            setter:setProjetSentence,
            ending:() => cursorDisparition(projetCursorRef, 200)
        })
        const timeoutID3 = write({
            timeout:900,
            sentence:"Contact",
            speed:50,
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

                    <div className="categoryBox">
                        <div className="categoryName">{profilSentence}</div>
                        <div ref={profilCursorRef} style={visible} className="categoryCursorBar"></div>
                    </div>

                    <div className="categoryBox">
                        <div className="categoryName">{projetSentence}</div>
                        <div ref={projetCursorRef} style={visible} className="categoryCursorBar"></div>
                    </div>

                    <div className="categoryBox">
                        <div className="categoryName">{contactSentence}</div>
                        <div ref={contactCursorRef} style={visible} className="categoryCursorBar"></div>
                    </div>
                    
                    
                    
                </div>
                <div className="mainCategoryDisplay">

                </div>
            </div>
        </div>
    )
}

export default Main;