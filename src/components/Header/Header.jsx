import React from 'react';
import Carat from '../../assets/carat-down.svg';
import Logo from '../../assets/GTRR-Logo.svg';
import './style.css';

const Header = () => {
     return (
          <>
               <header className="header">
                    <a href="index.html"><img className="header-logo" src={Logo} alt="GTRR" /></a>
                    <nav className="nav-options">
                         <a className="nav-item" href="index.html">INÍCIO</a>
                         <a className="nav-item" href="primeiros-passos.html">PRIMEIROS PASSOS</a>
                         <div className="sub-nav">
                              <button className="sub-nav-btn">SOBRE <img src={Carat} alt="(+)" /></button>
                              <div className="sub-nav-content">
                                   <a className="sub-nav-item" href="estatuto.html">ESTATUTO</a>
                                   <a className="sub-nav-item" href="manifesto.html">MANIFESTO</a>
                              </div>
                         </div>
                         <a className="nav-item" href="faq.html">FAQ</a>
                         <div className="sub-nav">
                              <button className="sub-nav-btn">PROJETOS <img src={Carat} alt="(+)" /></button>
                              <div className="sub-nav-content">
                                   <a className="sub-nav-item" href="em-andamento.html">EM ANDAMENTO</a>
                                   <a className="sub-nav-item" href="finalizados.html">FINALIZADOS</a>
                                   <a className="sub-nav-item" href="sugestao.html">SUGIRA UM PROJETO</a>
                              </div>
                         </div>
                         <a className="nav-item" href="cadastro.html">CADASTRO</a>
                    </nav>
               </header>
               <div className="hamburger-menu">
                    <span className="hamburger-icon">☰</span>
                    <div className="hamburger-options">
                         <a className="hamburger-item" href="index.html">INÍCIO</a>
                         <a className="hamburger-item" href="primeiros-passos.html">PRIMEIROS PASSOS</a>
                         <div className="sub-hamburger">
                              <a className="sub-hamburger-btn">SOBRE</a>
                              <div className="sub-hamburger-content">
                                   <a className="sub-hamburger-item" href="estatuto.html">ESTATUTO</a>
                                   <a className="sub-hamburger-item" href="manifesto.html">MANIFESTO</a>
                              </div>
                         </div>
                         <a className="hamburger-item" href="faq.html">FAQ</a>
                         <div className="sub-hamburger">
                              <button className="sub-hamburger-btn">PROJETOS</button>
                              <div className="sub-hamburger-content">
                                   <a className="sub-hamburger-item" href="em-andamento.html">EM ANDAMENTO</a>
                                   <a className="sub-hamburger-item" href="finalizados.html">FINALIZADOS</a>
                                   <a className="sub-hamburger-item" href="sugestao.html">SUGIRA UM PROJETO</a>
                              </div>
                         </div>
                         <a className="hamburger-item" href="cadastro.html">CADASTRO</a>
                    </div>
               </div>
          </>
     )
}

export default Header;