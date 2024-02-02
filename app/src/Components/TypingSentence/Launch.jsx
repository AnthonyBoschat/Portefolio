import React from "react";
import TypingSentenceCompiler from "./TypingSentence_Constructor/TypingSentenceCompiler";
import { useDispatch } from "react-redux";
import Cursor_Launch from "../Cursor/Launch";
import { update_loadingLaunch } from "../Loading/LoadingSlice";

function TypingSentence_Launch(){

    const dispatch = useDispatch()

    const sentencesConfiguration = [
        {
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
        <div className="nameApparition">
            <TypingSentenceCompiler sentencesConfiguration={sentencesConfiguration}/>
            <Cursor_Launch />
        </div>
    )
}

export default TypingSentence_Launch;