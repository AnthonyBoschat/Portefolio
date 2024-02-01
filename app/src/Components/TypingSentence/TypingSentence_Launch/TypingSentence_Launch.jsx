import React from "react";
import TypingSentenceCompiler from "../TypingSentenceCompiler";
import { useDispatch } from "react-redux";
import { update_onLoad } from "../../Loading/LoadingLaunch/LoadingLaunchSlice"
import Cursor_Launch from "../../Cursor/Cursor_Launch/Cursor_Launch";

function TypingSentence_Launch(){

    const dispatch = useDispatch()

    const sentencesConfiguration = [
        {
            timeout: 1500,
            sentence: "Anthony Boschat",
            speed: 100,
            ending: () => {
                setTimeout(() => {
                    dispatch(update_onLoad(false))
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