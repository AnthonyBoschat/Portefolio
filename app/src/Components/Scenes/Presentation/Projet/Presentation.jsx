import React from "react";
import usePresentation_Projet from "./usePresentation_Projet";
import TypingSentenceCompiler from "../../../Constructors/TypingSentence/TypingSentenceCompiler";

function Projet_Presentation({projet}){


    return(
        <div className="projet_presentationDisplay">
            <div className="projet_presentationBox">

                <div className="imageTechnologieBox">
                    <div className="imageProjetBox">
                        <a href={projet.link} target="_blank">
                            <img src={projet.img} alt={`Image du projet ${projet.name}`} />
                        </a>
                    </div>
                    
                    <div className="technologieDisplay">
                        <div className="technologieBox">
                            {projet.languages.map(language => (
                                <div className="languageBox">
                                    <div className="imageBox">
                                        <img src={language.image} title={language.name} alt={`Logo ${language.name}`} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="descriptionBox">
                    <TypingSentenceCompiler sentencesConfiguration={[{
                        timeout:1000,
                        sentence:projet.description,
                        speed:1
                    }]}/>
                </div>
            </div>
        </div>
    )
}

export default Projet_Presentation;