import React, { useEffect, useRef, useState } from "react";

export default function useButton_Projet(projetConfiguration, setProjetConfiguration, buttonRef){

    const [mouseOn, setMouseOn] = useState(false)
    const presentationBoxRef = useRef()

    const handleClickProjet = (projetName) => {
        selectedButton(projetName)
    }

    const selectedButton = (projetName) => {
        setProjetConfiguration(current => {
            return current.map(projet => {
                const copyProjet = {...projet}
                if(copyProjet.name === projetName){
                    copyProjet.selected = copyProjet.selected === false ? true : false
                }else{
                    copyProjet.selected = false
                }
                return copyProjet
            })
        })
    }

    const animationStyleClassCenter = (aButtonSelected, projet) => {
        const index = projetConfiguration.findIndex(project => project.name === projet.name)
        const indexButtonSelected = projetConfiguration.findIndex(projet => projet.selected === true)
        const buttonStyle = aButtonSelected ? {top: 0 - (indexButtonSelected * 4.03 + 4.03) + "rem"} : {top:0 + "rem"}
        const buttonClassName = !aButtonSelected ? "buttonProjet" : projet.selected ? "buttonProjetSelected" : "buttonProjetUnselected"
        const projetStyle = aButtonSelected ? {top: 0 - (indexButtonSelected * 3.95 + 3.95) + "rem"} : {top:0 - (index * 3.95) + "rem"}
        const projetClassName = projet.selected ? "projetPresentationVisible" : null
        return{buttonStyle, buttonClassName, projetStyle, projetClassName}
    }

    useEffect(() => {
        const button = buttonRef.current
        if(button){
            const targetButton = () => setMouseOn(true)
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