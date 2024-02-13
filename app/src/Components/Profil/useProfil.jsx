import { useState } from "react"

export default function useProfil(){

    const [CVfocus, setCVfocus] = useState(false)


    return{
        CVfocus,
        setCVfocus
    }
}