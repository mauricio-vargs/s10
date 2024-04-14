import styles from "./footer.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'


export default function Footer(){
    return (
        <footer>
            <div className={styles.name}>
                <span>Adventure Trails FD</span>
            </div>
            <div className={styles.icons}>
                <FontAwesomeIcon className={styles.icon}icon={faGithub} />
                <FontAwesomeIcon className={styles.icon}icon={faLinkedin} />
                <FontAwesomeIcon className={styles.icon}icon={faInstagram} />
            </div>
        </footer>
    )
}