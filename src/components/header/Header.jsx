import styles from "./header.module.css"
import { Link } from "react-router-dom"

export default function Header(){
    return(
        <header className={styles.header}>
            
            <div className={styles.name}>
                <Link to="/">Adventure Trails FD</Link>
            </div>
            

            <nav className={styles.navbar}>
                <Link to="/trails" className={styles.navigate}>Explorar Trilhas</Link>
                <Link to="/register" className={styles.navigate}>Cadastrar Trilhas</Link>
                
            </nav>
        </header>
    )
}