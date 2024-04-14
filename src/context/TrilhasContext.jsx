import { createContext, useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";

export const TrilhasContext = createContext()

export const TrilhasContextProvider = ({children}) => {
    const [trilhas, setTrilhas] = useState()
    const [json, loading] = useFetch('/data/trilhas.json')
    useEffect(() => {
        if(!loading & json != null){
            setTrilhas(json.trilhas)
        }
    }, [json])

    return (
        <TrilhasContext.Provider value={{trilhas, setTrilhas}}>
            {children}
        </TrilhasContext.Provider>
    )
}