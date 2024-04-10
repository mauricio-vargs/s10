import "./header.css"
import { Link } from "react-router-dom"

export default function Header(){
    return(
        <header className="header">
            
            <div className="name">
                <Link to="/">Adventure Trails FD</Link>
            </div>
            

            <nav className="navbar">
                <Link to="/trails">Explorar Trilhas</Link>
                <Link to="/register" className="navigate">Cadastrar Trilhas</Link>
                
            </nav>
        </header>
    )
}