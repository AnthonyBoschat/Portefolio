import React from "react";
import Loading_AnthonyBoschatApparition from "./Loading_AnthonyBoschatApparition";
import Loading_LogoLoading from "./Loading_LogoLoading";

function Loading(){

    return(
        <div className="loadingDisplay">
            <div className="loadingBox">
                <Loading_AnthonyBoschatApparition/>
                {/* <Loading_LogoLoading/> */}
            </div>
        </div>
    )
}

export default Loading;