import React, { useEffect, useRef, useState } from "react";

export default function useProjet(){

    const [projetConfiguration, setProjetConfiguration] = useState([
        {name:"Calculatrice", selected:false, link:"https://anthonyboschat.github.io/Calculatrice"},
        {name:"Boulangerie", selected:false},
        {name:"Pokedex", selected:false},
        {name:"Intégration web", selected:false, link:"https://anthonyboschat.github.io/LaunchPage3W"},
        {name:"Test2", selected:false},
        {name:"Test3", selected:false},
    ])
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

        const buttonStyle = aButtonSelected ? {top: 0 - (indexButtonSelected * 4.03) + "rem"} : {top:0 + "rem"}
        const buttonClassName = !aButtonSelected ? "buttonProjet" : projet.selected ? "buttonProjetSelected" : "buttonProjetUnselected"
        const projetStyle = aButtonSelected ? {top: 0 - (indexButtonSelected * 3.95) + "rem"} : {top:0 - (index * 3.95) + "rem"}
        const projetClassName = projet.selected ? "projetPresentationVisible" : null

        
        return{buttonStyle, buttonClassName, projetStyle, projetClassName}
    }

    const generateProjetButton = (projet, index) => {
        
        const aButtonSelected = projetConfiguration.find(projet => projet.selected === true)
        const {buttonStyle, buttonClassName, projetStyle, projetClassName} = animationStyleClassCenter(aButtonSelected, projet)

        return(
            <React.Fragment key={index}>
                <button style={buttonStyle} className={buttonClassName} onClick={() => handleClickProjet(projet.name)}>
                    {projet.name}
                </button>
                <div ref={projet.selected ? presentationBoxRef : null} style={projetStyle} className={`projetPresentation ${projetClassName}`}>
                    { projet.selected ? <iframe width="100%" height="100%" src={projet.link} frameborder="0"></iframe> : null}
                </div>
            </React.Fragment>
            
        )
    }

    return{
        projetConfiguration,
        generateProjetButton,
    }
}