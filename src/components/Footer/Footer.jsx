import React from 'react';
import Twitter from '../../assets/Twitter.svg';
import Instagram from '../../assets/Instagram.svg';
import TikTok from '../../assets/TikTok.svg';
import YouTube from '../../assets/YouTube.svg';
import FooterPic from '../../assets/GTRR-Footer.svg';
import { Link } from 'react-router-dom';

import './style.css';

function Footer() {
     return (
          <footer className="footer">
               <div className="promos">
                    <img src={FooterPic} alt="GTRR" />
                    <div className="socials">
                         <Link to="/"><img src={Twitter} alt="Twitter" /></Link>
                         <Link to="/"><img src={Instagram} alt="Instagram" /></Link>
                         <Link to="/"><img src={TikTok} alt="TikTok" /></Link>
                         <Link to="/"><img src={YouTube} alt="YouTube" /></Link>
                    </div>
               </div>

               <div className="list">
                    <h2>ESSENCIAIS</h2>
                    <Link to="/">INÍCIO</Link>
                    <Link to="primeiros-passos">PRIMEIROS PASSOS</Link>
                    <Link to="/estatuto">ESTATUTO</Link>
                    <Link to="/manifesto">MANIFESTO</Link>
                    <Link to="/faq">PERGUNTAS FREQUENTES</Link>
               </div>
               <div className="list">
                    <h2>FORMULÁRIOS</h2>
                    <Link to="/sugestao">SUGESTÃO DE PROJETO</Link>
                    <Link to="/cadastro">CADASTRO</Link>
               </div>
               <div className="list">
                    <h2>PROJETOS</h2>
                    <Link to="/em-andamento">EM ANDAMENTO</Link>
                    <Link to="/finalizados">FINALIZADOS</Link>
               </div>
          </footer>
     )
}

export default Footer