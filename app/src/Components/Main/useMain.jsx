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