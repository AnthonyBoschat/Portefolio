import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { update_navRenderOnChange } from "../Nav/NavSlice";

export default function useRender(){

    const renderBoxRef = useRef()


    return{
        renderBoxRef
    }
}