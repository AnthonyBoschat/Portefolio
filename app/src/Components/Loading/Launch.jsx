import React from "react";
import Cursor_Launch from "../Cursor/Launch";
import { useDispatch } from "react-redux";
import { update_loadingLaunch } from "./LoadingSlice";
import TypingSentenceCompiler from "../TypingSentence/TypingSentenceCompiler";

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
                        <Cursor_Launch />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loading_Launch;