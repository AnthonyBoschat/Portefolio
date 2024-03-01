import React, { useEffect, useRef } from "react";
import usePresentation_Projet from "./usePresentation_Projet";
import TypingSentenceCompiler from "../../../Constructors/TypingSentence/TypingSentenceCompiler";
import PolylinesWrap from "../../../Constructors/Polylines/PolylinesWrap";
import Cursor from "../../../Constructors/Cursor/Cursor";

function Projet_Presentation({projet}){

    const presentationBoxRef = useRef()
    const imageRef = useRef()

    usePresentation_Projet(presentationBoxRef, imageRef)

    return(
        <>
            <div ref={presentationBoxRef} className="projet_presentationDisplay">
                <div className="projet_presentationBox">

                    <div className="imageTechnologieBox">
                        <div className="imageProjetBox">
                            <a href={projet.link} target="_blank">
                                <img ref={imageRef} src={projet.img} alt={`Image du projet ${projet.name}`} />
                            </a>
                        </div>
                        
                        <div className="technologieDisplay">
                            <div className="technologieBox">
                                {projet.languages.map((language, index) => (
                                    <div key={index} className="languageBox">
                                        <div className="imageBox">
                                            <img  src={language.image} title={language.name} alt={`Logo ${language.name}`} />
                                            <span>
                                            <TypingSentenceCompiler sentencesConfiguration={[{
                                                timeout:1500,
                                                sentence:language.name,
                                                speed:100
                                            }]}/>
                                            </span>
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
                        <Cursor cursorConfiguration={{
                            cursorBlink:true,
                            cursorSpeed:1,
                            cursorClass:"consoleCursor cursorDescription",
                        }}/>
                    </div>
                </div>
            </div>
        </>
        
    )
}

export default Projet_Presentation;