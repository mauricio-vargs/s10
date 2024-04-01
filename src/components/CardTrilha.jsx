import '../assets/css/CardTrilha.css'

export default function CardTrilha(props){
    return(
        <div className="content">
          <img src={props.imagem} className="img-trilha" />
          <div className="description">
            <h1 className='title mb16'>{props.nome} - {props.local}</h1>
            <h3 className="mb16">Duração: {props.duracao}min</h3>
            <h3 className="mb16">Trajeto: {props.trajeto}km</h3>
            <h4 className="mb16 level">{props.nivel}</h4>
            <div className="avaliacoes">
                <a href="/">Avaliações</a>
            </div>
          </div>
        </div>
      )
}