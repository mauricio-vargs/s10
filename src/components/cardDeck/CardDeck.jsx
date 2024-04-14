import { useEffect, useState } from "react"
import CardTrilha from "../cardTrilha/CardTrilha"
import useFetch from "../../hooks/useFetch.jsx"
import styles from "./cardDeck.module.css"

export default function CardDeck(){
    const [trilhas, setTrilhas] = useState()
    const [json, loading] = useFetch('/data/trilhas.json')
    useEffect(() => {
        if(!loading & json != null){
            setTrilhas(json.trilhas)
        }
    }, [json])
      
    return(

        <div className={styles.cardDeck}>
            
            {!loading & trilhas != null ? trilhas.map((itemAtual, index) => (
                <div className="card" key={index}>
                    <CardTrilha trilhas={trilhas[index]}></CardTrilha>
                </div>
            )) : <h2>Carregando</h2>} 
            
            
            
        </div>
    )
}