import React, { useEffect, useRef, useState } from "react";
import useTypingSentence from "../TypingSentence/useTypingSentence";
import { useNavigate } from "react-router-dom";

export default function useMain(){

    const navigate = useNavigate()

    const navigateTo = (route) => {
        navigate(route)
    }

    return{
        navigateTo,
    }
}