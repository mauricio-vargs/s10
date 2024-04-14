import { TrilhasContext } from "../../context/TrilhasContext"
import CardTrilha from "../cardTrilha/CardTrilha"
import styles from "./cardDeck.module.css"
import { useContext } from "react"

export default function CardDeck(){
   const {trilhas} = useContext(TrilhasContext)
      
    return(

        <div className={styles.cardDeck}>
            
            {trilhas != null ? trilhas.map((itemAtual, index) => (
                <div className="card" key={index}>
                    <CardTrilha trilhas={trilhas[index]}></CardTrilha>
                </div>
            )) : <h2>Carregando</h2>} 
            
            
            
        </div>
    )
}