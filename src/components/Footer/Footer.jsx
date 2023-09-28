import React from 'react';
import Twitter from '../../assets/Twitter.svg';
import Instagram from '../../assets/Instagram.svg';
import TikTok from '../../assets/TikTok.svg';
import YouTube from '../../assets/YouTube.svg';
import FooterPic from '../../assets/GTRR-Footer.svg';

import './style.css';

function Footer() {
     return (
          <footer className="footer">
               <div className="promos">
                    <img src={FooterPic} alt="GTRR" />
                    <div className="socials">
                         <a href="#"><img src={Twitter} alt="Twitter" /></a>
                         <a href="#"><img src={Instagram} alt="Instagram" /></a>
                         <a href="#"><img src={TikTok} alt="TikTok" /></a>
                         <a href="#"><img src={YouTube} alt="YouTube" /></a>
                    </div>
               </div>

               <div className="list">
                    <h2>ESSENCIAIS</h2>
                    <a href="index.html">INÍCIO</a>
                    <a href="primeiros-passos.html">PRIMEIROS PASSOS</a>
                    <a href="sobre-nos/estatuto.html">ESTATUTO</a>
                    <a href="sobre-nos/manifesto.html">MANIFESTO</a>
                    <a href="faq.html">PERGUNTAS FREQUENTES</a>
               </div>
               <div className="list">
                    <h2>FORMULÁRIOS</h2>
                    <a href="projetos/sugestao.html">SUGESTÃO DE PROJETO</a>
                    <a href="cadastro.html">CADASTRO</a>
               </div>
               <div className="list">
                    <h2>PROJETOS</h2>
                    <a href="projetos/em-andamento.html">EM ANDAMENTO</a>
                    <a href="projetos/finalizados.html">FINALIZADOS</a>
               </div>
          </footer>
     )
}

export default Footer