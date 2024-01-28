import React, { useEffect, useState } from "react";
import useWhiteBar from "../../Features/Writter/CustomHook/useWhiteBar";
import useWrite from "../../Features/Writter/CustomHook/useWrite";
import { useDispatch } from "react-redux";
import { update_onLoad } from "./LoadingSlice";
import { updateCursor } from "../../Features/Writter/Slice/WritterSlice";
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