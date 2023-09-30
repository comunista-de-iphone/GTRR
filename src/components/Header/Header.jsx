import React from 'react';
import { Link } from 'react-router-dom';
import Carat from '../../assets/carat-down.svg';
import Logo from '../../assets/GTRR-Logo.svg';
import './style.css';

window.addEventListener('scroll', function() {
     const checkbox = document.querySelector('.hamburger-checkbox');

     if (window.scrollY > document.body.offsetTop) {
          checkbox.checked = false;
     }
});

const Header = () => {
     return (
          <header className="header">
               <Link to="/"><img className="header-logo" src={Logo} alt="GTRR" /></Link>
               <nav className="nav-options">
                    <Link className="nav-item" to="/">INÍCIO</Link>
                    <Link className="nav-item" to="/primeiros-passos">PRIMEIROS PASSOS</Link>
                    <div className="sub-nav">
                         <button className="sub-nav-btn">SOBRE <img src={Carat} alt="(+)" /></button>
                         <div className="sub-nav-content">
                              <Link className="sub-nav-item" to="/estatuto">ESTATUTO</Link>
                              <Link className="sub-nav-item" to="/manifesto">MANIFESTO</Link>
                         </div>
                    </div>
                    <Link className="nav-item" to="/faq">FAQ</Link>
                    <div className="sub-nav">
                         <button className="sub-nav-btn">PROJETOS <img src={Carat} alt="(+)" /></button>
                         <div className="sub-nav-content">
                              <Link className="sub-nav-item" to="/em-andamento">EM ANDAMENTO</Link>
                              <Link className="sub-nav-item" to="/finalizados">FINALIZADOS</Link>
                              <Link className="sub-nav-item" to="/sugestao">SUGIRA UM PROJETO</Link>
                         </div>
                    </div>
                    <Link className="nav-item" to="/cadastro">CADASTRO</Link>
               </nav>
               <div className="hamburger-menu">

                    <input className="hamburger-checkbox" type="checkbox" name="" id="" /> 
                    <div className="hamburger-lines">
                         <span className="line line1"></span>
                         <span className="line line2"></span>
                         <span className="line line3"></span>
                    </div>  

                    <div className="hamburger-options">
                         <ul>
                              <h3>ESSENCIAIS</h3>
                              <li><Link to="/">INÍCIO</Link></li>
                              <li><Link to="/primeiros-passos">PRIMEIROS PASSOS</Link></li>
                              <li><Link to="/estatuto">ESTATUTO</Link></li>
                              <li><Link to="/manifesto">MANIFESTO</Link></li>
                              <li><Link to="/faq">PERGUNTAS FREQUENTES</Link></li>
                              <h3>FORMULÁRIOS</h3>
                              <li><Link to="/sugestao">SUGESTÃO DE PROJETO</Link></li>
                              <li><Link to="/cadastro">CADASTRO</Link></li>
                              <h3>PROJETOS</h3>
                              <li><Link to="/em-andamento">PROJETOS EM ANDAMENTO</Link></li>
                              <li><Link to="/finalizados">PROJETOS FINALIZADOS</Link></li>
                         </ul>
                    </div>
               </div>
          </header>
     )
}

export default Header;