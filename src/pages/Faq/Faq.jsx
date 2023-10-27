import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import styles from './Faq.module.css'


const Faq = () => {
  const [content, setcontent] = useState([
    {
      id: 0, toggle: false, title: 'Como posso ajudar a Guilda?', paragraph: `
      Existem várias maneiras: transcrevendo, traduzindo, revisando, temporizando legendas,
      administrando as redes sociais, gerenciando projetos, organizando oficinas, escrevendo atas de
      reuniões, criando conteúdo gráfico, sugerindo projetos à curadoria, ajudando na manutenção do nosso
      GitHub, do nosso site e, claro, divulgando nosso trabalho.<br />
      Você pode saber mais sobre essas funções explorando o nosso site, redes sociais ou perguntando aos
      membros da GTRR.No mais, aquele velho ditado se aplica: muito ajuda quem não atrapalha.Ter
      educação e paciência com os membros da GTRR enquanto respeita nossas políticas tanto em nossos
      projetos quanto em nosso espaço dentro da Soberana já é muito útil para nós.`},
    {
      id: 1, toggle: false, title: 'Como me inscrever nos projetos?', paragraph: `
      Anunciamos os projetos e fazemos recrutamentos para outras funções (ex. curadoria,
      comunicações) em nosso tópico no servidor da Soberana e nas reuniões. Portanto, fique atento ao chat
      e compareça para ter mais chances de pegar um projeto. Além disso, para a inscrição em qualquer
      projeto ou função administrativa, é fundamental o cadastro nos nossos formulários para camaradas
      (contribuintes) e membros (contribuintes com poder de voto em decisões internas).`},
    {
      id: 2, toggle: false, title: 'Posso ajudar se não souber um segundo idioma?', paragraph: `
      Sim! Algumas funções que não precisam de segundo idioma são a de transcritor (áudio em
      pt-br para texto em pt-br), a de revisor de tradução para o português (mas exigimos que a pessoa
      seja minimamente experiente com cotejo) e funções administrativas como comunicação e TI.` },
    {
      id: 3, toggle: false, title: 'Não tenho PC. O que posso fazer pelo celular?', paragraph: `
      Revisão, transcrição, administração de redes sociais e comunicação são tarefas que não
      necessitam de computador para serem realizadas. Contudo, é possível que os recursos sejam limitados.` },
    {
      id: 4, toggle: false, title: 'Quais ferramentas a Guilda utiliza?', paragraph: `
      A Guilda tem a política de usar softwares de código aberto (open source) como uma
      afirmação política e pela ampla disponibilidade destes.<br />
      Quanto à transcrição, costumamos realizá-la em arquivo.txt porque é o mais compatível com os
      softwares de legendagem. Aceitamos o uso de qualquer aplicativo ou programa não pirateado que
      suporte esse formato.<br />
      Quanto à legendagem, costumamos usar o Aegisub por sua simplicidade e por termos membros experientes
      nele. Inclusive, realizamos oficinas de legendagem com o Aegisub, nas quais o nosso manual de
      legendagem é baseado.Apesar disso, outros programas de legendagem com código aberto podem ser
      utilizados – desde que isso seja acordado com seu revisor e com seus colegas de tradução.<br />
      Quanto à tradução, usamos sempre o OmegaT, pois ele é o melhor para a função disponível em código
      aberto.O uso do OmegaT para trabalhos de tradução é inegociável.Também oferecemos oficinas sobre
      esse software.<br />
      Por fim, salvamos nossa memória de tradução através do GitHub e pedimos que os tradutores evitem
      usar inteligência artificial / machine translation, pois a Guilda prioriza o caráter formativo e a
      qualidade sobre uma suposta rapidez.` },
    {
      id: 5, toggle: false, title: 'Como funciona o processo de curadoria?', paragraph: `
      Resumidamente, os projetos podem ser sugeridos à curadoria através deste formulário.<br />
      A curadoria analisa e dá uma nota para a sugestão baseando-se em fatores como tipo de mídia,
      qualidade, complexidade e extensão do material. Caso o projeto tenha uma boa nota em relação aos
      demais, recrutamos um gerente de projeto dentro do nosso núcleo mais engajado e abrimos as
      inscrições para as funções necessárias.` },
    {
      id: 6, toggle: false, title: 'Sou neurodivergente, terei dificuldade em participar?', paragraph: `
      De forma alguma. Na verdade, os neurotípicos são minoria aqui. Nos esforçamos sempre
      para criar um ambiente inclusivo e acolhedor, com foco na qualidade sobre a produtividade. Mas isso
      vai do seu critério, possibilidade e conforto, é claro.` },
    {
      id: 7, toggle: false, title: 'Por que estamos na Soberana?', paragraph: `
      A nossa ligação com a Soberana se iniciou por causa de certo alinhamento quanto a
      conteúdos e parcerias, com o tempo demonstrando a nossa amizade e boa convivência. Isso se consolida
      com a liberação do espaço no servidor deles para que possamos expor nosso trabalho e conseguir mais
      camaradas para contribuir conosco. <br />
      Continuamos sempre independentes, de forma que os projetos são organizados em nosso servidor
      dedicado.Ainda assim, esperamos que essa parceria entre a GTRR e a Soberana seja duradoura,
      frutífera e cada vez maior.
      Dessa forma, contamos com você para manter o nosso canal lá no servidor da Soberana saudável, focado
      e cooperativo, sempre respeitando as regras próprias do espaço.` },
  ]);

  function handleToggle(id) {
    setcontent(content.map(element => element.id === id ? { ...element, toggle: !element.toggle } : element))
  }


  return (
    <main className={`grid ${styles.grid_faq}`}>

      <section className={`${styles.title}`}>
        <h1><span>perguntas frequentes</span></h1>
      </section>


      <section className={`${styles.faq}`}>
        {content.map(element =>
          <div className={`${styles.show_text}`} key={element.id}>
            <div className={`borda2 ${styles.toggle_content}`} onClick={() => handleToggle(element.id)}>
              <h3>{element.title}</h3>
              <span>{element.toggle ? '-' : '+'}</span>
            </div>
            {element.toggle && <p>{element.paragraph.replace(/<br \/>/g, '\n')}</p>}
          </div>
        )}
      </section>


      <section className={`padding1 right ${styles.call_to_action}`}>
        <div className="padding2 right cta-left">
          <Link to={'/'} className={`borda1 link-arrow font-title`}>DÚVIDA NÃO RESPONDIDA? NOS MANDE UM EMAIL</Link>
        </div>
        <p>Ou nos pergunte em nossas redes sociais!</p>
      </section>
      
    </main>
  );
};

export default Faq;
