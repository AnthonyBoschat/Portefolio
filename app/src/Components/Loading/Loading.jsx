import React from "react";
import useLoading from "./useLoading";

function Loading_AnthonyBoschatApparition(){

    const {nameToLoad} = useLoading()


    return(
        <div className="loadingDisplay">
            <div className="loadingBox">
                <div className="nameApparitionBox">
                    <div className="nameApparition">
                        <span className="nameBox">{nameToLoad.join("")}</span>
                        <div className="loadingCursorBar"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loading_AnthonyBoschatApparition;