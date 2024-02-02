import React from "react";
import TypingSentence_Launch from "../../TypingSentence/Launch";
import Cursor_Launch from "../../Cursor/Launch";

function Loading_Launch(){

    return(
        <div className="loadingDisplay">
            <div className="loadingBox">
                <div className="nameApparitionBox">
                    <div className="nameApparition">
                        <TypingSentence_Launch />
                        <Cursor_Launch />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loading_Launch;