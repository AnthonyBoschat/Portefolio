import React, { useEffect, useState } from "react";

export default function useProjet(){

    const [projetConfiguration, setProjetConfiguration] = useState([
        {name:"Calculatrice", selected:false},
        {name:"Boulangerie", selected:false},
        {name:"Pokedex", selected:false},
        {name:"Test1", selected:false},
        {name:"Test2", selected:false},
        {name:"Test3", selected:false},
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

    const generateProjetButton = (projet) => {
        return(
            <>
                <button className={projet.selected && "projetSelected"} onClick={() => handleClickProjet(projet.name)} key={projet.name}>{projet.name}</button>
                {projet.selected && (
                    <div className="projetPresentation"></div>
                )}
            </>
            
        )
    }

    useEffect(() => {
        console.log(projetConfiguration)
    }, [projetConfiguration])

    return{
        projetConfiguration,
        generateProjetButton
    }
}