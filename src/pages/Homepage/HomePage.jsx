import React from 'react';
import Hero from '../../assets/Hero.svg';
import { Link } from 'react-router-dom';
import styles from './HomePage.module.css'
 
const HomePage = () => {
     return (
          <main className={`grid ${styles.grid_inicio}`}>
               <section className={styles.imagem}>
                    <img src={Hero} alt="GTRR" />
               </section>


               <section className={styles.apresentacao}>
                    <h1>Muitíssimas <br />
                         boas-vindas à <span className={styles.highlight}>GTRR!</span></h1>
                    <p>Somos um coletivo centralizado, diverso e independente focado em
                         aprender enquanto disponibilizamos materiais para a formação
                         teórica de comunistas.</p>
               </section>


               <section className={styles.call_to_action}>
                    <div className={styles.cta_left}>
                         <Link to="/primeiros-passos" className={styles.link_button}>PRIMEIROS PASSOS</Link>
                         <Link to="/manifesto" className={styles.link_arrow}>NOSSO MANIFESTO</Link>
                    </div>
               </section>


               <section className={styles.ajudar}>
                    <h1 className={styles.line}>
                         <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" fill="none">
                              <path
                                   d="M20.5 3.41675C17.1213 3.41675 13.8184 4.41867 11.009 6.29581C8.1997 8.17295 6.01008 10.841 4.71709 13.9626C3.42409 17.0841 3.08578 20.519 3.74495 23.8329C4.40411 27.1467 6.03114 30.1907 8.42029 32.5798C10.8094 34.969 13.8534 36.596 17.1672 37.2552C20.4811 37.9143 23.916 37.576 27.0375 36.283C30.1591 34.99 32.8272 32.8004 34.7043 29.9911C36.5814 27.1817 37.5834 23.8788 37.5834 20.5001C37.5834 18.2567 37.1415 16.0352 36.283 13.9626C35.4244 11.8899 34.1661 10.0067 32.5798 8.42034C30.9934 6.83401 29.1102 5.57566 27.0375 4.71714C24.9649 3.85862 22.7434 3.41675 20.5 3.41675ZM20.5 30.7501C20.1621 30.7501 19.8319 30.6499 19.5509 30.4622C19.27 30.2745 19.051 30.0077 18.9217 29.6955C18.7924 29.3833 18.7586 29.0398 18.8245 28.7085C18.8904 28.3771 19.0531 28.0727 19.2921 27.8338C19.531 27.5949 19.8354 27.4322 20.1667 27.3662C20.4981 27.3003 20.8416 27.3342 21.1538 27.4635C21.4659 27.5928 21.7327 27.8117 21.9205 28.0926C22.1082 28.3736 22.2084 28.7039 22.2084 29.0417C22.2084 29.4948 22.0284 29.9293 21.708 30.2497C21.3876 30.5701 20.9531 30.7501 20.5 30.7501ZM22.2084 21.9351V23.9167C22.2084 24.3698 22.0284 24.8043 21.708 25.1247C21.3876 25.4451 20.9531 25.6251 20.5 25.6251C20.0469 25.6251 19.6124 25.4451 19.2921 25.1247C18.9717 24.8043 18.7917 24.3698 18.7917 23.9167V20.5001C18.7917 20.047 18.9717 19.6125 19.2921 19.2921C19.6124 18.9717 20.0469 18.7917 20.5 18.7917C21.0068 18.7917 21.5023 18.6415 21.9237 18.3599C22.3451 18.0783 22.6735 17.6781 22.8675 17.2099C23.0614 16.7416 23.1122 16.2264 23.0133 15.7293C22.9144 15.2323 22.6704 14.7757 22.312 14.4173C21.9536 14.0589 21.497 13.8149 20.9999 13.716C20.5029 13.6171 19.9876 13.6679 19.5194 13.8618C19.0512 14.0558 18.651 14.3842 18.3694 14.8056C18.0878 15.227 17.9375 15.7224 17.9375 16.2292C17.9375 16.6823 17.7575 17.1168 17.4372 17.4372C17.1168 17.7576 16.6823 17.9376 16.2292 17.9376C15.7761 17.9376 15.3416 17.7576 15.0212 17.4372C14.7008 17.1168 14.5209 16.6823 14.5209 16.2292C14.5164 15.1193 14.8209 14.0301 15.4004 13.0835C15.9799 12.1369 16.8114 11.3702 17.8019 10.8694C18.7924 10.3685 19.9027 10.1533 21.0086 10.2477C22.1145 10.3421 23.1723 10.7425 24.0635 11.404C24.9548 12.0655 25.6443 12.962 26.0549 13.9932C26.4655 15.0243 26.581 16.1494 26.3885 17.2425C26.1959 18.3356 25.7029 19.3535 24.9646 20.1823C24.2264 21.011 23.272 21.618 22.2084 21.9351Z"
                                   fill="black" />
                         </svg>
                         Como posso ajudar a Guilda?
                    </h1>
                    <p>Existem várias maneiras: transcrevendo, traduzindo, revisando, temporizando legendas, administrando as
                         redes sociais, gerenciando projetos, organizando oficinas, escrevendo atas de reuniões, criando conteúdo
                         gráfico, sugerindo projetos à curadoria, ajudando na manutenção do nosso GitHub, do nosso site e, claro,
                         divulgando nosso trabalho.
                    </p>
                    <p>Você pode saber mais sobre essas funções explorando o nosso site, redes sociais ou perguntando aos
                         membros da GTRR.</p>

                    <div className={styles.outside_links}>
                         <Link to="/faq" className={styles.button_link}>Veja mais perguntas frequentes</Link>
                    </div>
               </section>


               <section className={styles.objetivo}>
                    <h1 className={styles.left_line_title}>Nosso objetivo</h1>
                    <br />
                    <p>Somos um coletivo marxista-leninista que atua na disponibilização de materiais de esquerda radical
                         inéditos em língua portuguesa, assim como a internacionalização dos nossos melhores materiais nacionais,
                         enquanto fornecemos formação à nova geração de profissionais de tradução sob uma ótica radical e
                         crítica.</p>
                    <div className={styles.outside_links}>
                         <Link to="/manifesto" className={styles.button_link}>MANIFESTO</Link>
                         <Link to="/estatuto" className={styles.button_link}>ESTATUTO</Link>
                    </div>
               </section>
          </main>
     )
}

export default HomePage;