import React, { useEffect, useRef, useState } from "react";
import useWrite from "../../Features/Writter/CustomHook/useWrite";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export default function useMain(){

    const navigate = useNavigate()

    const onPending = useSelector(store => store.pending.onPending)

    const [profilSentence, setProfilSentence] = useState([])
    const [projetSentence, setProjetSentence] = useState([])
    const [contactSentence, setContactSentence] = useState([])
    
    const presentationBoxRef = useRef()

    // const {cursorDisparition} = useWhiteBar()
    const {write} = useWrite()

    const navigateTo = (route) => {
        navigate(route)
    }

    useEffect(() => {

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

    useEffect(() => {
        if(!onPending){
            if(presentationBoxRef?.current){
                presentationBoxRef.current.classList.add("presentationBox-fade-out")
            }
            
        }
    }, [onPending])

    return{
        profilSentence,
        projetSentence,
        contactSentence,
        navigateTo,
        presentationBoxRef
    }
}