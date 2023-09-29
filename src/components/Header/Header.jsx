import React from 'react';
import { Link } from 'react-router-dom';
import Carat from '../../assets/carat-down.svg';
import Logo from '../../assets/GTRR-Logo.svg';
import './style.css';

const Header = () => {
     return (
          <>
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
               </header>
               <div className="hamburger-menu">
                    <span className="hamburger-icon">☰</span>
                    <div className="hamburger-options">
                         <Link className="hamburger-item" to="/">INÍCIO</Link>
                         <Link className="hamburger-item" to="/primeiros-passos">PRIMEIROS PASSOS</Link>
                         <div className="sub-hamburger">
                              <Link className="sub-hamburger-btn">SOBRE</Link>
                              <div className="sub-hamburger-content">
                                   <Link className="sub-hamburger-item" to="/estatuto">ESTATUTO</Link>
                                   <Link className="sub-hamburger-item" to="/manifesto">MANIFESTO</Link>
                              </div>
                         </div>
                         <Link className="hamburger-item" to="faq">FAQ</Link>
                         <div className="sub-hamburger">
                              <button className="sub-hamburger-btn">PROJETOS</button>
                              <div className="sub-hamburger-content">
                                   <Link className="sub-hamburger-item" to="/em-andamento">EM ANDAMENTO</Link>
                                   <Link className="sub-hamburger-item" to="/finalizados">FINALIZADOS</Link>
                                   <Link className="sub-hamburger-item" to="/sugestao">SUGIRA UM PROJETO</Link>
                              </div>
                         </div>
                         <Link className="hamburger-item" to="/cadastro">CADASTRO</Link>
                    </div>
               </div>
          </>
     )
}

export default Header;