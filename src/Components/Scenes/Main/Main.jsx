import React, { useEffect, useRef, useState } from "react";
import Render from "../Render/Render";
import Nav from "../Nav/Nav";
import ImpulseActivity from "../ImpulseActivity/ImpulseActivity";


function Main(){

    return(
            <div className="mainDisplay">
                <div className="mainBox">
                    <Nav/>
                    <Render/>
                </div>
                <ImpulseActivity/>
            </div>
    )
}

export default Main;