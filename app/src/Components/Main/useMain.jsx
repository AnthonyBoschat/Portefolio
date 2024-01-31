import React, { useEffect, useRef, useState } from "react";
import useWrite from "../../Features/Writter/CustomHook/useWrite";
import { useNavigate } from "react-router-dom";

export default function useMain(){

    const navigate = useNavigate()

    const [profilSentence, setProfilSentence] = useState([])
    const [projetSentence, setProjetSentence] = useState([])
    const [contactSentence, setContactSentence] = useState([])
    const hexagonRef = useRef()

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
        })
        const timeoutID2 = write({
            timeout:300,
            sentence:"Projet",
            speed:70,
            setter:setProjetSentence,
        })
        const timeoutID3 = write({
            timeout:500,
            sentence:"Contact",
            speed:40,
            setter:setContactSentence,
        })

        return(() => {
            clearTimeout(timeoutID1)
            clearTimeout(timeoutID2)
            clearTimeout(timeoutID3)
        })

    }, [])

    return{
        profilSentence,
        projetSentence,
        contactSentence,
        navigateTo,
        hexagonRef,
    }
}