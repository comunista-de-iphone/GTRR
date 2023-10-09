import React from 'react';
import { Link } from 'react-router-dom';
import Carat from '../../assets/carat-down.svg';
import Logo from '../../assets/GTRR-Logo.svg';
import styles from './Header.module.css';

window.addEventListener('scroll', function() {
     const checkbox = document.querySelector('.hamburger-checkbox');

     if (window.scrollY > document.body.offsetTop) {
          checkbox.checked = false;
     }
});

const Header = () => {
     return (
          <header className={styles.header}>
               <Link to="/"><img className={styles.header_logo} src={Logo} alt="GTRR" /></Link>
               <nav className={styles.nav_options}>
                    <Link className={styles.nav_item} to="/">INÍCIO</Link>
                    <Link className={styles.nav_item} to="/primeiros-passos">PRIMEIROS PASSOS</Link>


                    <Link className={styles.nav_item} to="/nossos-processos">PROCESSOS</Link>


                    <div className={styles.sub_nav}>
                         <button className={styles.sub_nav_btn}>SOBRE <img src={Carat} alt="(+)" /></button>
                         <div className={styles.sub_nav_content}>
                              <Link className={styles.sub_nav_item} to="/estatuto">ESTATUTO</Link>
                              <Link className={styles.sub_nav_item} to="/manifesto">MANIFESTO</Link>
                         </div>
                    </div>
                    <Link className={styles.nav_item} to="/faq">FAQ</Link>
                    <div className={styles.sub_nav}>
                         <button className={styles.sub_nav_btn}>PROJETOS <img src={Carat} alt="(+)" /></button>
                         <div className={styles.sub_nav_content}>
                              <Link className={styles.sub_nav_item} to="/em-andamento">EM ANDAMENTO</Link>
                              <Link className={styles.sub_nav_item} to="/finalizados">FINALIZADOS</Link>
                              <Link className={styles.sub_nav_item} to="/sugestao">SUGIRA UM PROJETO</Link>
                         </div>
                    </div>
                    <Link className={styles.nav_item} to="/cadastro">CADASTRO</Link>
               </nav>


               {/* <div className={styles.hamburger_menu}>

                    <input className={styles.hamburger_checkbox} type="checkbox" name="" id="" /> 
                    <div className={styles.hamburger_lines}>
                         <span className={`${styles.line} ${styles.line1}`}></span>
                         <span className={`${styles.line} ${styles.line2}`}></span>
                         <span className={`${styles.line} ${styles.line3}`}></span>
                    </div>  

                    <div className={styles.hamburger_options}>
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
               </div> */}
          </header>
     )
}

export default Header;