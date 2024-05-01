import "./Home.css";

////carrosel
import { register } from 'swiper/element/bundle';
register();

////Link
import {Link} from "react-router-dom";

////Hook useFetch
import { useFetch } from "../hook/UseFetch"; 

///Icons
import { FaRegFileCode } from "react-icons/fa6";

import { IoRocketSharp } from "react-icons/io5";

import { FaLinkedinIn } from "react-icons/fa";

import { FaInstagram } from "react-icons/fa";

import { FaGithub } from "react-icons/fa";

import { MdOutlineEmail } from "react-icons/md";

///Components
import Navbar from "../components/Navbar";
import { useEffect } from "react";

const Home = () => {

  const url = "https://api.github.com/users/edusabi/repos"

  
  useEffect(()=>{


    const text = document.querySelector(".text");
    const titulo = document.querySelector(".titulo");

function typeWrite2(elemento2){
  const textArray2 = elemento2.innerHTML.split("");
  elemento2.innerHTML = '';
  textArray2.forEach((letra, i)=>{
    setTimeout(()=>{
      elemento2.innerHTML += letra;
    }, 90 * i);  
  });
};

function typeWrite(elemento1){
  const textArray = elemento1.innerHTML.split("");
  elemento1.innerHTML = '';
  textArray.forEach((letra, i)=>{
    setTimeout(()=>{
      elemento1.innerHTML += letra;
      if(i === textArray.length -1){
        text.style.display = "block"; 
        typeWrite2(text);
      }
    }, 100 * i);
  });
};

text.style.display = "none"; 
typeWrite(titulo); 

 }, [] );


 const {data} = useFetch(url)



  return (
    <div className="home">

        <Navbar/>

        {/* {repos.name} */}

        <div className="homeIntro">
          <div className="imgAbout">
            <h1 className="titulo">Olá, eu sou Luís Eduardo</h1>
            <span className="text">Desenvolvedor Full-Stack</span>

            <div className="buttonsIntro">
            <a href="/curriculo.pdf" download="curriculo.pdf">Download CV</a>
            <Link to="mailto:luiseduardodevv@gmail.com" >Entrar em contato</Link>
            </div>

          </div>
          
          <div>
            <h2 className="img"><img src="/myPhoto.jpg" alt="" /></h2>
          </div>
        </div>


        <div className="projects">
          <div className="aboutProjects">
            <p>Meus projetos</p>
            <span>Desenvolvi diversos projetos pessoais na área de desenvolvimento web, que variaram desde a criação de websites estáticos até a implementação de aplicativos web interativos. Em cada um desses projetos, obtive uma proficiência sólida em tecnologias-chave, como HTML, CSS, JavaScript, React, além de experiência em back-end com Node.js. Esses projetos pessoais foram essenciais para o meu crescimento e especialização contínuos na área de desenvolvimento web. </span>
          </div>


          <div className="reposAbout">
            {data && data.map((repo)=>(
              <div key={repo.id} className="reposAbout-div">
                <h2>{repo.name}</h2>

                <div className="languageUsage">
                <FaRegFileCode/>
                <p>{repo.language}</p>
                </div>

                <p className="repoAbout">{repo.about}</p>

                <div className="divLinks">
                  {repo.repoPage ? (<Link to={repo.repoPage} target="_blanck">  <IoRocketSharp className="repoPage"/></Link>) : (<IoRocketSharp style={{color:"gray"}}/>)}
                <Link to={repo.repoLink} target="_blanck">  <FaGithub className="repoGit"/></Link>
                </div>
              
              </div>
            ))}
          </div>

    </div>



        <div className="redesSociais">
          <h2>Meus contatos</h2>

          <div className="redesSociais-img">
            
              <Link to="https://www.linkedin.com/in/luiseduardodevv/" target="_blanck" className="redeS"> <FaLinkedinIn/> </Link>

              <Link to="https://www.instagram.com/eduardodevv?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blanck" className="redeS"> <FaInstagram/> </Link>

              
              <Link to="https://github.com/edusabi" target="_blanck" className="redeS"> <FaGithub/> </Link>

            
              <Link to="mailto:luiseduardodevv@gmail.com" target="_blanck" className="redeS"> <MdOutlineEmail/> </Link>
            

          </div>

        </div>



    </div>
  )
};

export default Home;