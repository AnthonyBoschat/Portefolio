import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import useTypingSentence from "../../TypingSentence/useTypingSentence";
import { update_onLoad } from "./LoadingLaunchSlice";

export default function useLoading(){

    const dispatch = useDispatch()
    const [nameToLoad, setNameToLoad] = useState([])
    const {write} = useTypingSentence()

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