import React, { useEffect, useRef, useState } from "react";
import Projet_Presentation from "../Presentation/Projet/Presentation";
import Integration_image from "../../../Assets/3Wintegration.png";
import Calculatrice_image from "../../../Assets/Calculatrice.png";
import ReactionTime from "../../../Assets/Reaction-Time.png";
import Pokedex from "../../../Assets/Pokedex.png";
import html from "../../../Assets/html.png";
import css from "../../../Assets/css.png";
import scss from "../../../Assets/scss.png";
import javascript from "../../../Assets/javascript.png";
import react from "../../../Assets/react.png";
import php from "../../../Assets/php.png";
import mysql from "../../../Assets/sql.png";
import redux from "../../../Assets/redux.png";

export default function useProjet(){


    const presentationBoxRef = useRef()
    const programmationLanguage = {
        html:{image:html, name:"Html"},
        css:{image:css, name:"Css"},
        scss:{image:scss, name:"Scss"},
        javascript:{image:javascript, name:"Javascript"},
        react:{image:react, name:"React"},
        php:{image:php, name:"Php"},
        sql:{image:mysql, name:"MySQL"},
        redux:{image:redux, name:"Redux Toolkit"},

    }

    const [projetConfiguration, setProjetConfiguration] = useState([
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
        {
            name:"Calculatrice",
            selected:false,
            link:"https://anthonyboschat.github.io/Calculatrice",
            img:Calculatrice_image,
            languages:[programmationLanguage.html, programmationLanguage.css, programmationLanguage.javascript],
            description:
            `Il s'agit de l'un de mes premiers projets, je me suis principalement concentré sur l'aspect design. L'objectif était de créer une calculatrice offrant une sensation de profondeur, de relief. Travailler sur ce projet m'a permis de me familiariser avec la manipulation du DOM avec JavaScript, ce qui était relativement nouveau pour moi, et de créer mes premières animations.

            De plus, j'ai intégré la possibilité pour l'utilisateur de saisir des opérations directement via le clavier, afin d'améliorer l'expérience utilisateur.
            
            À part cela, il s'agit d'une calculatrice standard.`,
        },
        {
            name:"Reaction-Time",
            selected:false,
            link:"https://anthonyboschat.github.io/Reaction-Time",
            img:ReactionTime,
            languages:[programmationLanguage.html, programmationLanguage.css, programmationLanguage.javascript],
            description:
            `Il s'agit d'un projet réalisé peu après le projet Calculatrice. Je souhaitais continuer mon apprentissage de la gestion des animations en CSS.

            L'objectif était de créer un jeu simple et accessible via une page unique, capable de mémoriser le meilleur score réalisé par l'utilisateur.
            
            Au début de son développement, je ne maîtrisais pas encore le concept de cache navigateur, et la sauvegarde de l'historique n'était active que tant que l'onglet restait ouvert. Pour corriger ce fonctionnement assez horrible, j'ai dû m'initier à la persistance des données dans le localStorage.
            
            Depuis, l'historique du meilleur temps réalisé est sauvegardé tant que le cache n'est pas effacé.`,
        },
        {
            name:"Pokedex",
            selected:false,
            link:"https://anthonyboschat.github.io/Pokedex",
            img:Pokedex,
            languages:[programmationLanguage.react, programmationLanguage.scss],
            description:
            `Mon projet Pokedex a été une étape importante dans mon apprentissage de React, particulièrement pour maîtriser les requêtes API. Bien que ce soit un projet assez classique, il m'a permis de me familiariser avec SCSS et d'expérimenter les boucles pour créer des arrière-plans dynamiques basés sur les types de Pokémon.
            
            Initialement, j'utilisais le contexte de React pour la gestion d'état, avant de découvrir et d'adopter Redux Toolkit dans les projets suivant, qui m'a semblé plus simple dans son utilisation.
            
            J'ai également exploré de nouvelles animations, notamment un carrousel qui a été particulièrement complexe à mettre en œuvre, surtout pour Evoli ( et ses milliards d'évolutions là ).
            
            Malheureusement, l'API utilisée ne couvre que jusqu'à la huitième génération de Pokémon.`,
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