import React from "react";
import TypingSentence_Launch from "../../TypingSentence/TypingSentence_Launch/TypingSentence_Launch";

function Loading_AnthonyBoschatApparition(){

    // const {nameToLoad} = useLoading()


    return(
        <div className="loadingDisplay">
            <div className="loadingBox">
                <div className="nameApparitionBox">
                    <TypingSentence_Launch />
                </div>
            </div>
        </div>
    )
}

export default Loading_AnthonyBoschatApparition;