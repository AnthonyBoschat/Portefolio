import React, { useRef } from "react";
import Render from "../Render/Render";
import Nav from "../Nav/Nav";


function Main(){

    

    return(
            <div className="mainDisplay">
                <div className="mainBox">
                    
                    <Nav/>
                    <Render/>

                </div>
            </div>
    )
}

export default Main;