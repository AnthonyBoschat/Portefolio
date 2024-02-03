import React from "react";
import Nav from "../Nav/Nav";
import Render from "../Render/Render";


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