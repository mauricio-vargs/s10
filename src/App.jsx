import CardTrilha from "./components/CardTrilha"



export default function App(){
  
  return( 
  
  
    <div className="trilhas">

          <CardTrilha nome="Trilha da Costa da Lagoa" local="Florianópolis/SC" autor="Bruno Costa" duracao={120} imagem="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0f/14/c0/91.jpg" trajeto={4} nivel="Iniciante"></CardTrilha>

          <CardTrilha nome="Trilha da Praia do Gravatá" local="Florianópolis/SC" autor="Maurício Vargas"duracao={60} imagem="https://media-cdn.tripadvisor.com/media/photo-s/0e/99/70/f1/subida-da-trilha.jpg" trajeto={1.8} nivel="Iniciante"></CardTrilha>

  </div>

  )
}