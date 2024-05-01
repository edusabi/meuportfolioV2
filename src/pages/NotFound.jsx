import Styles from "./NotFound.module.css"

import { Link } from "react-router-dom"

///img
import notFound from "../assets/notFound.png"
import Navbar from "../components/Navbar"


const NotFound = () => {
  const html = document.querySelector('html')



  return (
    <div className={Styles.notFound}>
      <div className={Styles.navbar_notfound}>
      <Navbar/>
      </div>

      <Link to="/" className={Styles.voltar}>Voltar</Link>

      <h1>ERROR 404</h1>

      <h2>Página não encontrada</h2>

      <img src={notFound} alt="Not found" />

    </div>
  )
}

export default NotFound