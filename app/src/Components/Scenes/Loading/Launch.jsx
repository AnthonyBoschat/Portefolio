import React from "react";
import { useDispatch } from "react-redux";
import { update_loadingLaunch } from "./LoadingSlice";
import TypingSentenceCompiler from "../../Constructors/TypingSentence/TypingSentenceCompiler";
import Cursor from "../../Constructors/Cursor/Cursor";

function Loading_Launch(){

    const dispatch = useDispatch()

    const sentencesConfiguration = [{
            timeout: 1500,
            sentence: "Anthony Boschat",
            speed: 100,
            ending: () => {
                setTimeout(() => {
                    dispatch(update_loadingLaunch(false))
                }, 2500);
            }
        }
    ]

    return(
        <div className="loadingDisplay">
            <div className="loadingBox">
                <div className="nameApparitionBox">
                    <div className="nameApparition">
                        <TypingSentenceCompiler sentencesConfiguration={sentencesConfiguration} />
                        <Cursor cursorConfiguration={{
                            cursorClass:"cursorLaunch",
                            cursorBlink:false,
                        }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loading_Launch;