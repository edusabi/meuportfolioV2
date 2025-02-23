import Navbar from "../components/Navbar";
import Style from "./Certificados.module.css";

////icons
////icons
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { SiFlask } from "react-icons/si";

const Certificados = () => {
  return (
    <div className={Style.divPrincCertificados}>
      <Navbar></Navbar>
      <h1 className={Style.titleCertificado}>Certificados</h1>

      <div className={Style.divPrincDivs}>
        <div className={Style.DivBox}>
          <h1>
            Curso de JavaScript e TypeScript do básico ao avançado - Luiz Otávio
            Miranda - Udemy
          </h1>

          <div className={Style.divHrsLingua}>
            <div>
              <p>146Hrs</p>
            </div>

            <div className={Style.divIconsLingua}>
              <IoLogoJavascript />
              <SiTypescript />
              <FaHtml5 />
              <FaCss3Alt />
              <SiExpress />
              <DiMongodb />
              <GrMysql />
              <FaNodeJs />
            </div>
          </div>
        </div>

        <div className={Style.DivBox}>
          <h1>Formação Node.js - Guia do Programador, Victor Lima - Udemy</h1>

          <div className={Style.divHrsLingua}>
            <div>
              <p>50Hrs</p>
            </div>

            <div className={Style.divIconsLingua}>
              <IoLogoJavascript />
              <GrMysql />
              <FaNodeJs />
              <DiMongodb />
              <SiExpress />
              <FaHtml5 />
              <FaCss3Alt />
            </div>
          </div>
        </div>

        <div className={Style.DivBox}>
          <h1>
            React do Zero a Maestria - Matheus Battisti, Hora de Codar - Udemy
          </h1>

          <div className={Style.divHrsLingua}>
            <div>
              <p>30.5Hrs</p>
            </div>

            <div className={Style.divIconsLingua}>
              <FaReact />
              <IoLogoJavascript />
              <SiTypescript />
              <FaHtml5 />
              <FaCss3Alt />
              <DiMongodb />
            </div>
          </div>
        </div>

        <div className={Style.DivBox}>
          <h1>Minicurso de Java - Rocketseat</h1>

          <div className={Style.divHrsLingua}>
            <div>
              <p>5Hrs</p>
            </div>

            <div className={Style.divIconsLingua}>
              <FaJava />
            </div>
          </div>
        </div>

        <div className={Style.DivBox}>
          <h1>Discover - Rocketseat</h1>

          <div className={Style.divHrsLingua}>
            <div>
              <p>5Hrs</p>
            </div>

            <div className={Style.divIconsLingua}>
              <IoLogoJavascript />
              <FaHtml5 />
              <FaCss3Alt />
            </div>
          </div>
        </div>

        <div className={Style.DivBox}>
          <h1>NLW Unite - Reactjs - Rocketseat (Evento)</h1>

          <div className={Style.divHrsLingua}>
            <div>
              <p>5Hrs</p>
            </div>

            <div className={Style.divIconsLingua}>
              <FaReact />
              <IoLogoJavascript />
            </div>
          </div>
        </div>

        <div className={Style.DivBox}>
          <h1>Imersão front-end - Alura</h1>

          <div className={Style.divHrsLingua}>
            <div>
              <p>5Hrs</p>
            </div>

            <div className={Style.divIconsLingua}>
              <IoLogoJavascript />
              <FaHtml5 />
              <FaCss3Alt />
            </div>

          </div>
        </div>

        <div className={Style.DivBox}>
          <h1>NLW Unite - Python - Rocketseat (Evento)</h1>

          <div className={Style.divHrsLingua}>
            <div>
              <p>5Hrs</p>
            </div>

            <div className={Style.divIconsLingua}>
              <FaPython/>
            </div>

          </div>
        </div>

        <div className={Style.DivBox}>
          <h1>Imersão Python: Do Excel à Análise de Dados - Alura</h1>
          <div className={Style.divHrsLingua}>
            <div>
              <p>5Hrs</p>
            </div>

            <div className={Style.divIconsLingua}>
              <FaPython/>
            </div>

          </div>
        </div>


      <div className={Style.DivBox}>
          <h1>
          NLW Connect  - JAVA - Rocketseat
          </h1>

          <div className={Style.divHrsLingua}>
            <div>
              <p>5Hrs</p>
            </div>

            <div className={Style.divIconsLingua}>
              <FaJava/>
            </div>
          </div>
        </div>

      <div className={Style.DivBox}>
          <h1>
          NLW Connect  - Python - Rocketseat
          </h1>

          <div className={Style.divHrsLingua}>
            <div>
              <p>5Hrs</p>
            </div>

            <div className={Style.divIconsLingua}>
              <FaPython/>
              <SiFlask/>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Certificados;
