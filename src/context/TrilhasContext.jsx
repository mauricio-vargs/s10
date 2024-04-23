import { createContext, useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";

export const TrilhasContext = createContext()

export const TrilhasContextProvider = ({children}) => {
    const [trilhas, setTrilhas] = useState()
    const [json, loading] = useFetch('/trilhas.json')
    useEffect(() => {
        if(!loading & json != null){
            setTrilhas(json.trilhas)
        }
    }, [json])

    function addTrail(newTrail) {
        setTrilhas(t => [...t, newTrail])
    }

    return (
        <TrilhasContext.Provider value={{trilhas, setTrilhas, addTrail}}>
            {children}
        </TrilhasContext.Provider>
    )
}