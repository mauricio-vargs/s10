import CardDeck from "./components/cardDeck/CardDeck"
import Header from "./components/header/Header"




export default function App(){

  return(
    <div className="container">
      <Header></Header>
      <CardDeck></CardDeck>
    </div>
  )  

}