import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { update_emailSend } from "./ContactSlice";

export default function useContact(){

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(update_emailSend(true))
    }

    return{
        handleSubmit
    }
}