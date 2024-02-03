import React from "react";
import FirstNav from "../Nav/FirstNav";
import Render from "../Render/Render";
import SecondNav from "../Nav/SecondNav";


function Main(){

    

    return(
            <div className="mainDisplay">
                <div className="mainBox">
                    
                    <FirstNav/>
                    <SecondNav/>
                    <Render/>

                </div>
            </div>
    )
}

export default Main;