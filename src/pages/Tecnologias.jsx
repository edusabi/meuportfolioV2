////icons
import { IoLogoJavascript } from "react-icons/io";
import { FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { FaGithub } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";

///CSS
import "./Tecnologias.css"

import Navbar from "../components/Navbar"

const Tecnologias = () => {
  return (
    <div className="tecnologias">
        <Navbar/>
        <h1>Habilidades</h1>

        <div className="linguagens">

          <div className="html">
            <FaHtml5/>
            <h3>HTML5</h3>
          </div>

          <div className="css">
            <FaCss3Alt/>
            <h3>CSS3</h3>
          </div>

          <div className="js">
            <IoLogoJavascript/>
            <h3>JavaScript</h3>
          </div>

          <div className="node">
            <FaNodeJs/>
            <h3>Node</h3>
          </div>

          <div className="react">
            <FaReact/>
            <h3>React</h3>
          </div>

          <div className="mongo">
            <DiMongodb/>
            <h3>MongoDb</h3>
          </div>

          <div className="mysql">
            <GrMysql/>
            <h3>MySQL</h3>
          </div>

          <div className="github">
            <FaGithub/>
            <h3>GitHub</h3>
          </div>

          <div className="git">
            <FaGitAlt/>
            <h3>Git</h3>
          </div>

          <div className="boot">
            <FaBootstrap/>
            <h3>Bootstrap</h3>
          </div>

          <div className="express">
            <SiExpress/>
            <h3>Express</h3>
          </div>

          </div>

        </div>

  )
};

export default Tecnologias;
