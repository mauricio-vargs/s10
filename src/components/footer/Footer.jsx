import "./footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

export default function Footer(){
    return (
        <footer>
            <div className="footer-name">
                <span>Adventure Trails FD</span>
            </div>
            <div className="icons">
                <FontAwesomeIcon className="icon"icon={faGithub} />
                <FontAwesomeIcon className="icon"icon={faLinkedin} />
                <FontAwesomeIcon className="icon"icon={faInstagram} />
            </div>
        </footer>
    )
}