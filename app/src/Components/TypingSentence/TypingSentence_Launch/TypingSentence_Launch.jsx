import React from "react";
import TypingSentenceCompiler from "../TypingSentenceCompiler";
import { useDispatch } from "react-redux";
import { update_onLoad } from "../../Loading/LoadingSlice"

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
            },
            cursor: true,
            cursorStyle:<div className="loadingCursorBar"></div>
        }
    ]

    return(
        <div className="nameApparition">
            <TypingSentenceCompiler 
                sentencesConfiguration={sentencesConfiguration}
            />
        </div>
    )
}

export default TypingSentence_Launch;