import React, { useEffect, useState } from "react";
import useWrite from "../../Features/Writter/CustomHook/useWrite";

function Sentence({configuration}){

    const {sentence} = useWrite(configuration)

    return(
        <>
            <span className="nameBox">{sentence}</span>
            {configuration.cursor && <div className="loadingCursorBar"></div>}
        </>
    )
}

export default Sentence;