import './CardTrilha.css'


export default function CardTrilha(props){
  let {nome, imagem, local, duracao, trajeto, nivel,autor} = props.trilhas
  
  return(
        <div className="content">
          <img src={imagem} className="img-trilha" />
          <div className="description">
            <h1 className='title mb16'>{nome} - {local}</h1>
            <div className="autor">
              <h1>Por: {autor}</h1>
            </div>
            <h3 className="mb16">Duração: {duracao}min</h3>
            <h3 className="mb16">Trajeto: {trajeto}km</h3>
            <h4 className="mb16 level">{nivel}</h4>
            <div className="avaliacoes">
                <a href="/">Avaliações</a>
            </div>
          </div>
        </div>
      )
}