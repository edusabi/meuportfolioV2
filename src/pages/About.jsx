import "./About.css"

import Navbar from "../components/Navbar"

const About = () => {
  return (
    <div className="sobreAbout">
        <Navbar/>
        <h1>Apresentação pessoal</h1>

        <div className="sobreP">
          <p>Sou um desenvolvedor web que busco a primeira
            oportunidade de emprego. Tenho o aprofundamento
            em Full-Stack e sempre busco adquirir novos
            conhecimentos na área de programação. Visto que,
            tenho realizado com excelência diversos projetos
            mediante o JavaScript, simultaneamente com suas
            Bibliotecas, Frameworks e banco de dados.
          </p>
          <div className="linguas">
            <div><h1>Linguagens</h1></div>
            
            <div className="linguas-div">
              <div>
                <h2>Inglês</h2>
                <img src="/ingles.jpg" alt="" />
              </div>

              <div>
                <h2>Espanhol</h2>
                <img src="/espanhol.jpg" alt="" />
              </div>

            </div>

          </div>

        </div>

    </div>
  )
};

export default About;
