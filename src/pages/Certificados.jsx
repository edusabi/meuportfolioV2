import Navbar from "../components/Navbar";
import Style from "./Certificados.module.css";

////icons


const Certificados = () => {
  return (
    <div className={Style.divPrincCertificados}>
        
        <Navbar></Navbar>
        <h1 className={Style.titleCertificado}>Certificados</h1>

        <div className={Style.divPrincDivs}>
          
          <div>
            <h1>Curso de JavaScript do básico ao avançado - Luiz Otávio Miranda</h1>
          </div>
          
          <div>
            <h1>Formação Node.js - Guia do Programador, Victor Lima</h1>
          </div>

          <div>
            <h1>React do Zero a Maestria - Matheus Battisti, Hora de Codar</h1>
          </div>

          <div>
            <h1>Minicurso de Java - Rocketseat</h1>
          </div>

          <div>
            <h1>Discover - Rocketseat</h1>
          </div>

          <div>
            <h1>NLW Unite - Reactjs - Rocketseat (Evento)</h1>
          </div>

          <div>
            <h1>Imersão front-end - Alura</h1>
          </div>

          <div>
            <h1>NLW Unite - Python - Rocketseat (Evento)</h1>
          </div>

          <div>
            <h1>Imersão Python: Do Excel à Análise de Dados - Alura</h1>
          </div>

        </div>

    </div>
  )
}

export default Certificados