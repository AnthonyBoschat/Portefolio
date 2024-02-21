import React, { useEffect, useRef, useState } from "react";

export default function useContact(){

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return{
        handleSubmit
    }
}