import "./header.css"

export default function Header(){
    return(
        <header className="header">
            
            <div className="name">
                <a href="#">Adventure Trails FD</a>
            </div>
            

            <nav className="navbar">
                <a href="#" className="navigate">Explorar Trilhas</a>
                <a href="#" className="navigate">Cadastrar trilhas</a>
            </nav>
        </header>
    )
}