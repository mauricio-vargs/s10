import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import {Outlet} from "react-router-dom"
import styles from "./app.module.css"
import {TrilhasContextProvider} from "./context/TrilhasContext"
import { theme } from "./providers/ThemeProvider"
import { ThemeProvider } from "@emotion/react"



export default function App(){

  return(
    <ThemeProvider theme={theme}>

      <TrilhasContextProvider>
        <div className={styles.container}>
          <Header></Header>
          <Outlet></Outlet>
          <Footer></Footer>
        </div>
      </TrilhasContextProvider>
    </ThemeProvider>
  )  

}