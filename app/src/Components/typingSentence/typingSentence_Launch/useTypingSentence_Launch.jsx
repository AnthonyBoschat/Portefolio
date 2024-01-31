import React, { useState } from "react";
import { useDispatch } from "react-redux";
import useWrite from "../../../Features/Writter/CustomHook/useWrite";
import { update_onLoad } from "../../Loading/LoadingSlice";

export default function useTypingSentence_Launch(){

    const dispatch = useDispatch()
    const [nameToLoad, setNameToLoad] = useState([])
    const {write} = useWrite()

    useEffect(() => {
        const timeoutID = write({
            timeout:1500,
            sentence:"Anthony Boschat",
            speed:100,
            setter:setNameToLoad,
            ending:() => {
                setTimeout(() => {
                    dispatch(update_onLoad(false))
                }, 2500);
            }
        })

        return(() => {
            clearTimeout(timeoutID)
        })
    }, [])

    return{
        nameToLoad
    }
}