import React, { useEffect, useState } from "react";
import useWrite from "../../../../Features/Writter/CustomHook/useWrite";

function Contact(){

    const [sentence, setSentence] = useState([])
    const {write} = useWrite()

    useEffect(() => {

        const timeoutID = write({
            timeout:0,
            sentence:"Contact",
            speed:100,
            setter:setSentence
        })

        return(() => {
            clearTimeout(timeoutID)
        })
    }, [])

    return(
        <h1>{sentence}</h1>
    )
}

export default Contact;