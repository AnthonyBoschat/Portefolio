import React, { useEffect, useRef, useState } from "react";
import Projet_Presentation from "../Presentation/Projet/Presentation";
import Integration_image from "../../../Assets/3Wintegration.png";
import Calculatrice_image from "../../../Assets/Calculatrice.png";
import html from "../../../Assets/html.png";
import css from "../../../Assets/css.png";
import scss from "../../../Assets/scss.png";
import javascript from "../../../Assets/javascript.png";
import react from "../../../Assets/react.png";
import php from "../../../Assets/php.png";
import mysql from "../../../Assets/sql.png";

export default function useProjet(){


    const iframeRef = useRef()
    const presentationBoxRef = useRef()
    const programmationLanguage = {
        html:{image:html, name:"Html"},
        css:{image:css, name:"Css"},
        scss:{image:scss, name:"Scss"},
        javascript:{image:javascript, name:"Javascript"},
        react:{image:react, name:"React"},
        php:{image:php, name:"Php"},
        sql:{image:mysql, name:"MySQL"},

    }

    const [projetConfiguration, setProjetConfiguration] = useState([
        {name:"Boulangerie", selected:false},
        {
            name:"Calculatrice",
            selected:false,
            link:"https://anthonyboschat.github.io/Calculatrice",
            img:Calculatrice_image,
            languages:[programmationLanguage.scss, programmationLanguage.css, programmationLanguage.javascript],
            description:`Description Calculatrice`,
        },
        {
            name:"Intégration web",
            selected:false,
            link:"https://anthonyboschat.github.io/LaunchPage3W",
            img:Integration_image,
            languages:[programmationLanguage.html, programmationLanguage.css],
            description:`Il s'agit d'une intégration web réaliser dans le cadre de mon entrée au CEFIM. Nous avions le visuel d'une page web qu'il fallait reproduire le plus fidèlement possible afin de pouvoir participer à la semaine d'examen d'entrée à la formation.
            
            
            Il s'agit du tout premier projet qui n'était pas un projet sortie mon chapeau. Je devais effectuer un certain travail avec un certain cahier des charges. Suite à cette intégration j'ai pu participer à la semaine d'examen pour l'entrée au CEFIM.
            
            ( Je m'étais permis de glisser un easter-egg dans la page, je ne pense pas qu'il ai été trouver par le staff du CEFIM ).`,
        },
    ])
    





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

    useEffect(() => {
        if(iframeRef.current){
            setTimeout(() => {
                iframeRef.current.style.display = "block"
            }, 700);
        }
    }, [projetConfiguration])

    const generateProjetButton = (projet, index) => {
        
        const aButtonSelected = projetConfiguration.find(projet => projet.selected === true)
        const {buttonStyle, buttonClassName, projetStyle, projetClassName} = animationStyleClassCenter(aButtonSelected, projet)

        return(
            <React.Fragment key={index}>
                <button style={buttonStyle} className={buttonClassName} onClick={() => handleClickProjet(projet.name)}>
                    {projet.name}
                </button>
                <div ref={projet.selected ? presentationBoxRef : null} style={projetStyle} className={`projetPresentation ${projetClassName}`}>
                    { projet.selected ? <Projet_Presentation projet={projet}/> : null}
                </div>
            </React.Fragment>
            
        )
    }

    return{
        projetConfiguration,
        generateProjetButton,
    }
}