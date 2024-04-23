import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import styles from "./index.module.css"

export default function LowerHome(){
    return (
        <div className={styles.container}>
            <div className={styles.explore}>
                <h2 className={styles.title}>Explore trilhas incríveis</h2>
                <p className={styles.subtitle}>O "Adventure Trails FD" é seu portal para explorar e compartilhar as melhores trilhas para trekking e ciclismo ao redor do mundo. Descubra rotas deslumbrantes, desde caminhos tranquilos por florestas exuberantes até trilhas desafiadoras em montanhas majestosas. Encontre informações detalhadas sobre cada trilha, incluindo distância, dificuldade, pontos de interesse naturais e dicas úteis para uma experiência eco-friendly.</p>

                <Button variant="contained">
                    <Link to="/trails">Explorar </Link>
                </Button>
            </div>

            <div className={styles.register}>
                <div className={styles.left}>
                    <h2>Compartilhe fotos, dicas e localização das suas trilhas favoritas</h2>
                    <Button variant="contained">
                         <Link to="/register">Cadastrar nova trilha</Link>
                    </Button>
                </div>
                <div className={styles.right}>
                    <img src="https://images.pexels.com/photos/2161856/pexels-photo-2161856.jpeg" alt="Foto De Mulher Em Pé No Topo Da Montanha"/>
                </div>
            </div>
        </div>
    )
}