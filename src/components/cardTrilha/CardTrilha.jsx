import { useState } from 'react';
import styles from './CardTrilha.module.css'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarBorderIcon from '@mui/icons-material/StarBorder';



export default function CardTrilha(props){
  let {nome, imagem, cidade, estado, duracao, trajeto, nivel} = props.trilhas
  let autor
  props.trilhas.autor == "" ? autor = "Anônimo" : autor = props.trilhas.autor
  const [favorite, setFavorite] = useState(false)
  function handleClickFavorite(){
    setFavorite(!favorite)
  }

  return(
        <div className={styles.content}>
          <img src={imagem} className={styles.img} />
          <div className={styles.description}>
            <div className={`${styles.cardHeader} ${styles.mb16}`}>
            <h1>{nome} - {cidade} / {estado}</h1> 
            <button onClick={() => handleClickFavorite()}>{favorite ? <FavoriteIcon/>: <FavoriteBorderIcon/>}</button>
            </div>
            <div className={styles.autor}>
              <h1>Por: {autor}</h1>
            </div>
            <h3 className={styles.mb16}>Duração: {duracao}min</h3>
            <h3 className={styles.mb16}>Trajeto: {trajeto}km</h3>
            <h4 className={`${styles.level} ${styles.mb16}`}>{nivel}</h4>
            <div className={styles.review}>
              <div className="stars">
                <button><StarBorderIcon/></button>
                <button><StarBorderIcon/></button>
                <button><StarBorderIcon/></button>
                <button><StarBorderIcon/></button>
                <button><StarBorderIcon/></button>
              </div>
              <span>Avaliações</span>
            </div>
          </div>
        </div>
      )
}