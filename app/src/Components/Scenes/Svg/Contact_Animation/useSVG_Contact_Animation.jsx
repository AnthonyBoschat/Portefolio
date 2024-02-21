import React, { useEffect, useRef, useState } from "react";

export default function useSVG_Contact_Animation(displayRef){

    const contactAnimationBoxRef = useRef()

    const [animation_PolylinesValues, setAnimation_PolylinesValues] = useState([
        {}
    ])

    useEffect(() => {
        console.log(displayRef.current)
    }, [])


    return{
        contactAnimationBoxRef
    }
}