import CardDeck from "../../components/cardDeck/CardDeck"
import styles from "./Lista.module.css"


export default function Lista(){
    return (
        
        <div className={styles.trails}>
            
                <div className={styles.image}> 
                
                </div>
        
            <span className={styles.title}>Explore trilhas incríveis</span>
            <CardDeck></CardDeck>
        </div>
        
        
    )
}