import React, { useEffect, useRef, useState } from "react";
import useWrite from "../../../../Features/Writter/CustomHook/useWrite";
import useWhiteBar from "../../../../Features/Writter/CustomHook/useWhiteBar";

function Contact(){

    const [sentence, setSentence] = useState([])
    const {write} = useWrite()
    const cursorSentenceRef = useRef()
    const {cursorVisible, cursorDisparition} = useWhiteBar()
    const visible = cursorVisible ? {visibility:"visible"} : {visibility:"hidden"}

    useEffect(() => {

        const timeoutID = write({
            timeout:0,
            sentence:"Initialisation ...\nRécupération des données ...\n Ecriture du disque ...\n Lancement du terminal de dialogue >>> port:3000\n Setting IP address 10.5.143.9#\nRecreating /etc /resolv.conf\n\n \u00A0\u00A0\u00A0\u00A0Adding DNS server 10.5.0.#\n\u00A0\u00A0\u00A0\u00A0Adding DNS server 8.8.8.8\n\u00A0\u00A0\u00A0\u00A0Adding DNS Server 8.8.4.4\n\n>>> Connection Console autoriser...",
            speed:2,
            setter:setSentence
        })

        return(() => {
            clearTimeout(timeoutID)
        })
    }, [])

    return(
        <div className="pendingSentenceBox">
            {sentence}
            <div style={visible} ref={cursorSentenceRef} className="pendingSentenceCursor"></div>
        </div>
    )
}

export default Contact;