import React from "react";
import Loading_AnthonyBoschatApparition from "./Loading_AnthonyBoschatApparition";
import { useSelector } from "react-redux";

function Loading(){

    const onLoad = useSelector(store => store.lifeCycle.initialisation.onLoad)

    return(
        <div className="loadingDisplay">
            <div className="loadingBox">
                {onLoad && <Loading_AnthonyBoschatApparition/>}
                {!onLoad && <div style={{color:"white"}}>Controle</div>}
            </div>
        </div>
    )
}

export default Loading;