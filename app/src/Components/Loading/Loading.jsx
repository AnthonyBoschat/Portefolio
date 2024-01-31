import React from "react";
import useLoading from "./useLoading";
import TypingSentence_Launch from "../typingSentence/typingSentence_Launch/TypingSentence_Launch";

function Loading_AnthonyBoschatApparition(){

    // const {nameToLoad} = useLoading()


    return(
        <div className="loadingDisplay">
            <div className="loadingBox">
                <div className="nameApparitionBox">
                    <TypingSentence_Launch />
                    {/* <div className="nameApparition">
                        <span className="nameBox">{nameToLoad.join("")}</span>
                        <div className="loadingCursorBar"></div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Loading_AnthonyBoschatApparition;