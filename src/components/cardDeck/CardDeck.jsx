import CardTrilha from "../cardTrilha/CardTrilha"
import useFetch from "../../hooks/useFetch"

export default function CardDeck(){
    let trilhas = null
    const [json, loading] = useFetch('/data/trilhas.json')
    if(!loading & json != null){
        trilhas = json.trilhas
    }
    
   
    return(

        <div className="card-deck">
            
            {!loading & trilhas != null ? trilhas.map((itemAtual, index) => (
                <div className="card" key={index}>
                    {console.log(index)}
                    <CardTrilha trilhas={trilhas[index]}></CardTrilha>
                </div>
            )) : <h2>Carregando</h2>} 
            
            
            {/* <CardTrilha></CardTrilha> */}
        </div>
    )
}