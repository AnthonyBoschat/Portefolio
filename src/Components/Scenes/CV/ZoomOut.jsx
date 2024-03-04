import React from "react";
import { useDispatch } from "react-redux";
import { update_cvOnload } from "../Profil/ProfilSlice";

function CVzoomOut(){

    const dispatch = useDispatch()

    return(
        <div className="cvUnfocus">
            <img onClick={() => dispatch(update_cvOnload(true))} src="/Ressource/CVimage.png" alt="" />
        </div>
    )
}

export default CVzoomOut;