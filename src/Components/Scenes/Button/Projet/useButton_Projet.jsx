import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { update_projetSelected } from "../../Projet/ProjetSlice";

export default function useButton_Projet(projetConfiguration, setProjetConfiguration, buttonRef){

    const [mouseOn, setMouseOn] = useState(false)
    const presentationBoxRef = useRef()
    const dispatch = useDispatch()

    const handleClickProjet = (projetName) => {
        selectedButton(projetName)
        
    }

    const selectedButton = (projetName) => {
        setProjetConfiguration(current => {
            return current.map(projet => {
                const copyProjet = {...projet}
                if(copyProjet.name === projetName){
                    copyProjet.selected = copyProjet.selected === false ? true : false
                    if(copyProjet.selected === true){
                        dispatch(update_projetSelected(projetName))
                    }else{
                        dispatch(update_projetSelected(null))
                    }
                }else{
                    copyProjet.selected = false
                }
                return copyProjet
            })
        })
    }

    const animationStyleClassCenter = (projetSelected, projet) => {

        const index = projetConfiguration.findIndex(project => project.name === projetSelected)
        const indexButtonSelected = projetConfiguration.findIndex(projet => projet.name === projetSelected)

        const buttonStyle = projetSelected ? {top: 0 - (indexButtonSelected * 4.03 + 4.03) + "rem"} : {top:0 + "rem"}
        const buttonClassName = !projetSelected ? "buttonProjet" : projet.name === projetSelected ? "buttonProjetSelected" : "buttonProjetUnselected"

        const projetStyle = projetSelected ? {top: 0 - (indexButtonSelected * 3.95 + 3.95) + "rem"} : {top:0 - (index * 3.95) + "rem"}
        const projetClassName = projet.name === projetSelected ? "projetPresentationVisible" : null

        return{buttonStyle, buttonClassName, projetStyle, projetClassName}
    }

    useEffect(() => {
        const button = buttonRef.current
        if(button){
            const targetButton = () => {setMouseOn(true)}
            const untargetButton = () => setMouseOn(false)

            button.addEventListener("mouseenter", targetButton)
            button.addEventListener("mouseleave", untargetButton)

            return () => {
                button.removeEventListener("mouseenter", targetButton)
                button.removeEventListener("leave", untargetButton)
            }
        }
    }, [buttonRef.current])

    return{
        handleClickProjet,
        animationStyleClassCenter,
        presentationBoxRef,
        mouseOn
    }
}