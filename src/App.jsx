import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import {Outlet} from "react-router-dom"
import styles from "./app.module.css"




export default function App(){

  return(
    <div className={styles.container}>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )  

}