import { useState } from "react"

export default function useProfil(){

    const [CVfocus, setCVfocus] = useState(false)

    const languagesConfiguration = [
        {famillyName:"Front-end",
        languages:[
            {name:"HTML", level:70},
            {name:"CSS", level:70},
            {name:"SCSS", level:50},
            {name:"Javascript", level:60},
        ]},
        {famillyName:"Back-end",
        languages:[
            {name:"PHP", level:30},
            {name:"MySQL", level:35},
            {name:"Node", level:10},
        ]},
        {famillyName:"Framework",
        languages:[
            {name:"React", level:65},
            {name:"Redux", level:60},
        ]},
    ]


    return{
        CVfocus,
        setCVfocus,
        languagesConfiguration
    }
}