import React, { useState } from "react";

function Header(){

    /////// STATE /////////
    const [displayOption, setDisplayOption] = useState(false)


    /////// METHODE /////////

    /////// REF /////////

    /////// RENDER /////////

    return(
        <header>
            <i onClick={() => setDisplayOption(true)} className="fa-solid fa-gear optionGear apparition"></i>
            {displayOption ? (<div className="optionBox"></div>) : (null)}
        </header>
        
    )
}

export default Header;