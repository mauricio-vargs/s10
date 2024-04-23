import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import styles from "./index.module.css"


export default function UpperHome(){

return(
    <div className={styles.container}>
                <div className={styles.image}>
                    <h2 className={styles.title}>Que tal aproveitar um tempo com a natureza?</h2>    
                    <p className={styles.subtitle}>Junte-se à comunidade de entusiastas ao ar livre, compartilhe suas aventuras e inspire-se com as experiências de outros aventureiros. Prepare-se para explorar novos horizontes e se conectar com a natureza através do Adventure Trails!</p>
                    <Button variant="contained">
                        <Link to="/trails">Explorar trilhas</Link>
                    </Button>
                </div>
                </div>

            
            )
            }