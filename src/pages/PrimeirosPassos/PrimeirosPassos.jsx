import React from 'react'
import BemVinde from '../../assets/GTRR-bemvinde.svg'
import styles from './PrimeirosPassos.module.css'


const PrimeirosPassos = () => {
  return (
    <main className={`grid ${styles.grid_passos}`}>

      <section className={styles.welcome}>
        <img src={BemVinde} alt="SEJA BEM-VINDE À GTRR" />
      </section>


      <section className={styles.paragraph_a}>
        <p>A <span className="highlight">GTRR</span> é um coletivo com o duplo objetivo de: fornecer um percurso formativo para quem quer se profissionalizar
          na área de tradução e revisão e, ao mesmo tempo, disponibilizar materiais inéditos em prol da formação teórica de
          comunistas.</p>
        <p>Somos um coletivo centralizado, diverso e independente formado por tradutores, revisores, gerentes de projeto,
          legendadores, designers e programadores. Assim, atuamos:</p>
      </section>


      <section className={styles.oque_fazemos}>
        <div className="info-list">
          <h2>O QUE FAZEMOS</h2>
          <ul>
            <li>Traduzindo textos, vídeos, memes, etc, de relevância para a esquerda radical
              <ul>
                <li>Que podem ser inéditos em língua portuguesa (tradução), OU</li>
                <li>Nossos melhores materiais a serem internacionalizados (versão);</li>
              </ul>
            </li>
            <li>Agregando na formação dos novos profissionais da área;</li>
            <li>Criando um fluxo integrado de trabalho para a colaboração eficiente;</li>
            <li>Utilizando sempre recursos de código aberto como ato político;</li>
            <li>Cultivando a cultura de traduções acessíveis.</li>
          </ul>
        </div>
        <div className="info-list">
          <h2>O QUE NÃO FAZEMOS</h2>
          <ul>
            <li>Não pretendemos competir com esforços editoriais já existentes;</li>
            <li>Não traduzimos clássicos já estabelecidos e publicados;</li>
            <li>Não traduzimos qualquer conteúdo, pois temos uma curadoria para analisar as sugestões;</li>
            <li>Não somos uma editora;</li>
            <li>Não somos uma cooperativa profissional, apesar de termos integrantes com experiência na área;</li>
            <li>Não somos vinculados a qualquer instituição, partido ou associação política e, da mesma forma, não exigimos tal coisa de nossos contribuintes.</li>
          </ul>
        </div>
      </section>


      <section className={styles.paragraph_b}>
        <p>A Guilda é um <span className="highlight">coletivo</span> e, portanto, construída com base na disponibilidade de cada camarada para contribuir com
          seu tempo, inteligência e habilidades sob a organização centralizada e acordada entre todas as partes.</p>
      </section>


      <section className={styles.primeiros_passos}>
        <h1 className="left right-line-title">PRIMEIROS PASSOS</h1>
        <p>Agora que você já entendeu, em linhas gerais, o que
          fazemos, aqui vão os primeiros passos para começar:</p>
      </section>


      <section className={styles.primeiro}>
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
          <ul className="arrow">
            <li>Tradução</li>
            <li>Revisão</li>
            <li>Versão (tradução para idioma estrangeiro)</li>
            <li>Legendagem em preparação de textos</li>
            <li>Transcrição</li>
            <li>Gestão de projetos</li>
            <li>Organização e relações institucionais</li>
            <li>Redes sociais</li>
            <li>Design</li>
            <li>TI</li>
            <li>Formação</li>
            <li>Curadoria</li>
          </ul>
        </div>
        <div className="cta-left">
          <a href="#" className="link-button">FORMULÁRIO DE INSCRIÇÃO</a>
        </div>
        <p style={{textAlign: 'right'}}>Uma vez preenchido o formulário, saberemos que se
          dispôs a ajudar e teremos você em conta na hora de abrir
          chamados para projetos.</p>
      </section>


      <section className={styles.segundo}>
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
        <div className="cta-right">
          <a href="#" className="link-button">FORMULÁRIO DE INSCRIÇÃO</a>
        </div>
        <h2 className={`left right-line-title ${styles.medo}`}>MEDO PELA FALTA DE EXPERIÊNCIA?</h2>
        <p>Não se preocupe! Como prezamos com a qualidade dos nossos
          conteúdos e com a sua aprendizagem, é norma padrão da GTRR
          que tradutores novatos fiquem sob a supervisão de tradutores
          e revisores experientes, assim eles conseguirão corrigir o
          necessário e ensinar mediante sua vasta experiência na área.</p>
      </section>


      <section className={styles.see_more}>
        <div className="cta-right">
          <a href="#" className="link-button">VEJA MAIS SOBRE NOSSOS PROCESSOS</a>
        </div>
      </section>

    </main>
  )
}

export default PrimeirosPassos