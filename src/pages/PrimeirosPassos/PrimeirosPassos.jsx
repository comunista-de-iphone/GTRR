import React from 'react'
import BemVinde from '../../assets/GTRR-bemvinde.svg';
import Arrow2 from '../../assets/Arrow-2.svg';
import styles from './PrimeirosPassos.module.css';
import { Link } from 'react-router-dom';


const PrimeirosPassos = () => {
  return (
    <main className={`grid ${styles.grid_passos}`}>

      <section className={`padding1 ${styles.welcome}`}>
        <img src={BemVinde} alt="SEJA BEM-VINDE À GTRR" />
      </section>


      <section className={`padding1 ${styles.paragraph_a}`}>
        <p>A <span className="highlight">GTRR</span> é um coletivo com o duplo objetivo de: fornecer um percurso formativo para quem quer se profissionalizar
          na área de tradução e revisão e, ao mesmo tempo, disponibilizar materiais inéditos em prol da formação teórica de
          comunistas.</p>
        <p>Somos um coletivo centralizado, diverso e independente formado por tradutores, revisores, gerentes de projeto,
          legendadores, designers e programadores. Assim, atuamos:</p>
      </section>


      <section className={` ${styles.oque_fazemos}`}>
        <div className="info-list">
          <h2>O QUE FAZEMOS</h2>
          <ul>
            <li><img src={Arrow2} className='arrow' alt="a" /> Traduzindo textos, vídeos, memes, etc, de relevância para a esquerda radical
              <ul>
                <li className='list-dot'>Que podem ser inéditos em língua portuguesa (tradução), OU</li>
                <li className='list-dot'>Nossos melhores materiais a serem internacionalizados (versão);</li>
              </ul>
            </li>
            <div className='list-mg'>
              <li><img src={Arrow2} className='arrow' alt="a" /> Agregando na formação dos novos profissionais da área;</li>
            </div>
            <div className='list-mg'>
              <li><img src={Arrow2} className='arrow' alt="a" /> Criando um fluxo integrado de trabalho para a colaboração eficiente;</li>
            </div>
            <div className='list-mg'>
              <li><img src={Arrow2} className='arrow' alt="a" /> Utilizando sempre recursos de código aberto como ato político;</li>
            </div>
            <div className='list-mg'>
              <li><img src={Arrow2} className='arrow' alt="a" /> Cultivando a cultura de traduções acessíveis.</li>
            </div>
          </ul>
        </div>

        <div className="padding1 info-list">
          <h2>O QUE NÃO FAZEMOS</h2>
          <ul>
            <div className='list-mg'>
              <li><img src={Arrow2} className='arrow' alt="a" /> Não pretendemos competir com esforços editoriais já existentes;</li>
            </div>
            <div className='list-mg'>
              <li><img src={Arrow2} className='arrow' alt="a" /> Não traduzimos clássicos já estabelecidos e publicados;</li>
            </div>
            <div className='list-mg'>
              <li><img src={Arrow2} className='arrow' alt="a" /> Não traduzimos qualquer conteúdo, pois temos uma curadoria para analisar as sugestões;</li>
            </div>
            <div className='list-mg'>
              <li><img src={Arrow2} className='arrow' alt="a" /> Não somos uma editora;</li>
            </div>
            <div className='list-mg'>
              <li><img src={Arrow2} className='arrow' alt="a" /> Não somos uma cooperativa profissional, apesar de termos integrantes com experiência na área;</li>
            </div>
            <div className='list-mg'>
              <li><img src={Arrow2} className='arrow' alt="a" /> Não somos vinculados a qualquer instituição, partido ou associação política e, da mesma forma, não exigimos tal coisa de nossos contribuintes.</li>
            </div>
          </ul>
        </div>
        <p>A Guilda é um <span className="highlight">coletivo</span> e, portanto, construída com base na disponibilidade de cada camarada para contribuir com
          seu tempo, inteligência e habilidades sob a organização centralizada e acordada entre todas as partes.</p>
      </section>


      <section className={`padding1 ${styles.primeiros_passos}`}>
        <h1 className="left right-line-title">PRIMEIROS PASSOS</h1>
        <p>Agora que você já entendeu, em linhas gerais, o que
          fazemos, aqui vão os primeiros passos para começar:</p>
      </section>


      <section className={` ${styles.primeiro}`}>
        <h2 className="block-title">1. CADASTRO NA GUILDA</h2>
        <p>Não importa qual o seu nível ou familiaridade com a
          área de tradução ou revisão, você é bem-vinde.</p>
        <p>Aqui há tanto quem seja mais iniciante, porém
          entusiasta e querendo aprender, como há camaradas de
          longa trajetória profissional na Guilda. <br />
          <span className="highlight">Todos têm seu lugar, importância e função.</span></p>
        <p>Portanto, pedimos que você se cadastre no formulário
          de inscrição onde marcará qual é seu nível de
          familiaridade e em qual destas áreas você gostaria de
          atuar:</p>
        <div className="info-list">
          <ul>
            <li><img src={Arrow2} className='arrow' alt="a" /> Tradução</li>
            <li><img src={Arrow2} className='arrow' alt="a" /> Revisão</li>
            <li><img src={Arrow2} className='arrow' alt="a" /> Versão (tradução para idioma estrangeiro)</li>
            <li><img src={Arrow2} className='arrow' alt="a" /> Legendagem em preparação de textos</li>
            <li><img src={Arrow2} className='arrow' alt="a" /> Transcrição</li>
            <li><img src={Arrow2} className='arrow' alt="a" /> Gestão de projetos</li>
            <li><img src={Arrow2} className='arrow' alt="a" /> Organização e relações institucionais</li>
            <li><img src={Arrow2} className='arrow' alt="a" /> Redes sociais</li>
            <li><img src={Arrow2} className='arrow' alt="a" /> Design</li>
            <li><img src={Arrow2} className='arrow' alt="a" /> TI</li>
            <li><img src={Arrow2} className='arrow' alt="a" /> Formação</li>
            <li><img src={Arrow2} className='arrow' alt="a" /> Curadoria</li>
          </ul>
        </div>
        <div className="padding2 left cta-left">
          <Link to={'/'} className="link-button">FORMULÁRIO DE INSCRIÇÃO</Link>
        </div>
        <p className='right'>Uma vez preenchido o formulário, saberemos que se
          dispôs a ajudar e teremos você em conta na hora de abrir
          chamados para projetos.</p>
      </section>


      <section className={`${styles.segundo}`}>
        <h2 className="block-title">2. DÊ UM OI LÁ NO CANAL!</h2>
        <p>Não se acanhe, se apresente lá no tópico e conheça nossa
          comunidade. Sempre haverá alguém para te acolher e ajudar:
          somos muitos, diversos, de várias áreas e contextos, porém
          estamos todos juntos para cooperar e construir.</p>
        <p>Além disso, ao mandar pelo menos uma mensagem no chat,
          você facilita que consigamos te contatar para participar de
          projetos ou funções.</p>
        <p>Se tiver alguma dúvida, mande sua pergunta em nossas redes
          sociais ou em nosso tópico na Soberana.</p>
        <div className="padding1 right cta-right">
          <Link to={'/'} className="link-button link-arrow">VISITE NOSSO TÓPICO NA SOBERANA</Link>
        </div>

        <div className='padding1'>
          <h2 className={`left ${styles.medo}`}>MEDO PELA FALTA DE EXPERIÊNCIA?</h2>
          <p className='justify'>Não se preocupe! Como prezamos a qualidade dos nossos
            conteúdos e sua aprendizagem, é norma padrão da GTRR
            que tradutores novatos fiquem sob a supervisão de tradutores
            e revisores experientes, assim eles conseguirão corrigir o
            necessário e ensinar mediante sua vasta experiência na área.</p>
          <div className="padding2 right cta-right">
            <Link to={'/'} className="link-button link-arrow">VEJA MAIS SOBRE NOSSOS PROCESSOS</Link>
          </div>
        </div>
      </section>


    </main>
  )
}

export default PrimeirosPassos