import { useState, useEffect } from "react";
import "./Navbar.css";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  const html = document.querySelector("html");

  const changeMode = () => {
    html.classList.toggle("light");

    const icon = document.querySelector(".iconTheme ion-icon");
    const currentIcon = icon.getAttribute("name");
    const newIconName = currentIcon === "moon" ? "sunny" : "moon";
    icon.setAttribute("name", newIconName);

    if (html.classList.contains("light")) {
      localStorage.setItem("tema", "light");
    } else {
      localStorage.setItem("tema", "dark");
    }
  };

  useEffect(() => {
    const tema = localStorage.getItem("tema");
    if (tema === "light") {
      html.classList.add("light");
      const icon = document.querySelector(".iconTheme ion-icon");
      icon.setAttribute("name", "sunny");
    }
  }, []);

  
  const handleNavbar = ()=>{

    const line1 = document.querySelector(".line1")
    const line2 = document.querySelector(".line2")
    const line3 = document.querySelector(".line3")

    const itens = document.querySelector(".itens")
    
    
    if(itens.classList.contains("ativo")){
      itens.classList.remove("ativo")
      document.querySelector("body").style.overflowY = "auto";   
      
      line2.style.display = 'block' 
      
      line3.style.transform = 'rotate(0deg) '
      
      line1.style.transform = 'rotate(0) translate(0,0)'
    }else{
      itens.classList.add("ativo")
      document.querySelector("body").style.overflowY = "hidden";   
      
      line2.style.display = 'none'
      
      line1.style.transform = 'rotate(-45deg) translate(-7px,7px)'

      line3.style.transform = 'rotate(45deg) '
    }


}

  return (
    <nav className="navbar dark-mode">

      <span>Meu portfólio</span>
      
      <div className="navbarLine" onClick={handleNavbar}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      
      <ul className="itens">
        <NavLink to="/" className="navlink">
          Home
        </NavLink>
        <NavLink to="/tecnologia" className="navlink">
          Tecnologias
        </NavLink>
        <NavLink to="/about" className="navlink">
          Sobre
        </NavLink>
      </ul>


      <div className="mode" onClick={changeMode}>
        <span className="iconTheme">
          <ion-icon name="moon"></ion-icon>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
