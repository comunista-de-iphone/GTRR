import React from 'react'
import { Link } from 'react-router-dom';
import programa from '../../assets/programas.png';
import Arrow2 from '../../assets/Arrow-2.svg';
import styles from './Processos.module.css';

const Processos = () => {
     return (
          <main className={`grid ${styles.processo}`}>

               <section className={`padding1 ${styles.projeto}`}>
                    <h1>COMO FUNCIONAM OS PROJETOS?</h1>
                    <p className='center'>O foco da guilda ficará sempre em propostas que possam ser divididas sem sobrecarregar os voluntários.
                         Os trabalhos não serão feitos com determinação de prazos, mas responsabilidade e sinceridade são esperadas de cada camarada que se voluntariar.</p>
               </section>


               <section className={`padding1 ${styles.fluxo}`}>
                    <h2>fluxo de trabalho</h2>
                    <p className='center'>O processo dos trabalhos funciona da seguinte forma:</p>
                    <div className='info-list'>
                         <ul>
                              <li><img src={Arrow2} className='arrow' alt="a" /> As sugestões de conteúdo são feitas para a Curadoria da GTRR (entenda como funciona na próxima seção)</li>
                              <li className='list-dot'>Uma vez que a Curadoria aprova um conteúdo, há um chamado para constituir o projeto;</li>
                              <li className='list-dot'>O chamado visa achar camaradas com disposição a desempenhar as seguintes funções: </li>
                              <li><img src={Arrow2} className='arrow' alt="a" /> Gerentes de projeto </li>
                              <li><img src={Arrow2} className='arrow' alt="a" /> Tradutores</li>
                              <li><img src={Arrow2} className='arrow' alt="a" /> Revisores </li>
                              <li><img src={Arrow2} className='arrow' alt="a" /> Preparadores de texto </li>
                              <li><img src={Arrow2} className='arrow' alt="a" /> Temporizadores (caso seja legenda de vídeo) </li>
                              <li><img src={Arrow2} className='arrow' alt="a" /> Transcritores (caso necessário) </li>
                              <li><img src={Arrow2} className='arrow' alt="a" /> Designers (caso seja material gráfico e/ou para diagramação)</li>
                              <li className='list-dot'>O projeto segue por suas várias etapas com o apoio da gerência de projeto para garantir o cumprimento de cada ponto com qualidade;</li>
                              <li className='list-dot'>O projeto é entregue e compartilhado na comunidade, onde todos terão acesso a ele e o consumirão em uma forma de mostra-feedback coletiva,
                                   para que não nos alienemos do nosso trabalho.</li>
                         </ul>
                    </div>
               </section>


               <section className={`padding1 ${styles.apontamento}`}>
                    <h2>apontamentos gerais</h2>
                    <div className='info-list'>
                         <ul>
                              <div className='list-mg'>
                                   <li><img src={Arrow2} className='arrow' alt="a" />É sempre previsto que os projetos contem com um tradutor (ou mais) e um revisor (ou mais, igualmente). Desta forma criamos um ambiente de troca de
                                        experiências e conhecimentos;</li>
                              </div>
                              <div className='list-mg'>
                                   <li><img src={Arrow2} className='arrow' alt="a" />Durante a tradução dos projetos o uso de pronomes deve ser evitado ao máximo, mantendo-se a integridade do texto.
                                        Sendo impossível a exclusão de pronomes masculinos ou femininos, caberá à dupla a determinação de um pronome padrão para o texto
                                        (masculino ou feminino) que deverá ser mantido por todo o texto, acompanhada de uma nota de tradução no início do documento final.
                                        O uso de neo-pronomes (ex.: elu/delu) ocorrerá somente quando os mesmos existirem no texto de origem;</li>
                              </div>
                              <div className='list-mg'>
                                   <li><img src={Arrow2} className='arrow' alt="a" />É importante lembrar que projetos individuais
                                        serão considerados como tal e não obterão apoio da estrutura centralizada da GTRR;</li>
                              </div>
                              <div className='list-mg'>
                                   <li><img src={Arrow2} className='arrow' alt="a" />Projetos relacionados à Soberana ou a quaisquer outros coletivos
                                        somente serão aprovados sob consentimento ou parceria com os mesmos, em respeito a seu trabalho e atuação.</li>
                              </div>
                         </ul>
                    </div>
                    <p className='center'>Caso você tenha dúvidas, fale conosco em nossas redes sociais para saná-las. Os membros te ajudarão como puderem.</p>
               </section>


               <section className={` ${styles.curadoria}`}>
                    <h1 className='left right-line-title'>Curadoria</h1>
                    <h2 className='block-title'>Sugestão de projetos</h2>
                    <p style={{ marginTop: '12px' }}><span className='highlight'>Todos os projetos a serem sugeridos devem ser indicados exclusivamente através do formulário.</span>
                         Quaisquer sugestões no chat do canal não serão consideradas.</p>
                    <p>A equipe de curadoria irá analisar caso a caso se o projeto será ou não aprovado e enviado aos gerentes para que se formem os times de produção.</p>
                    <p>Há também a possibilidade de se voluntariar para fazer a pesquisa e coleta de conteúdos para a curadoria,
                         basta marcar tal opção no formulário de cadastro, junto da(s) língua(s) nas quais você atuaria.</p>
                    <div className='padding2 cta-full'>
                         <Link to={'/'} className='link-button'>Formulário da curadoria</Link>
                         <Link to={'/'} className='link-button'>Formulário de inscrição</Link>
                    </div>
               </section>


               <section className={`padding1 ${styles.projeto_curado}`}>
                    <div className='center'>
                         <h1 className='block-title'>Como os projetos são curados?</h1>
                    </div>
                    <div className={`padding2 ${styles.sides}`}>
                         <img src={programa} alt="programa" />
                         <div>
                              <p className='justify'>A curadoria dos projetos a serem trabalhados na GTRR é feita de forma coletiva, utilizando processos baseados na análise de seu formato,
                                   relevância e complexidade. Tal análise considera a obra estar ou não em domínio público, a sua existência no mercado editorial brasileiro,
                                   o seu alcance, o seu impacto, a nossa confiança na execução da tarefa e a complexidade desta. Tal análise tem por fim avaliar a
                                   possibilidade de produção e a prioridade na alocação de recursos para a proposta. Primeiro consideramos a disponibilidade em domínio
                                   público para determinar se o projeto será feito na íntegra ou não, então aplicamos o modelo RICE para chegarmos na priorização dos conteúdos:</p>
                              <div className="padding2 right cta-right">
                                   <Link to={'/'} className='link-arrow'>Acesse o backlog de projetos já avaliados</Link>
                              </div>

                         </div>
                    </div>
               </section>


               <section className={`${styles.programa}`}>
                    <h1>Programas que usamos</h1>
                    <p className='center'>O mundo da tradução hoje é muito mais que papel, caneta e tinta.
                         Ainda mais quando somos uma guilda composta de camaradas de diferentes lugares do mundo, ligados e organizados pelas “internetes”.
                    </p>
                    <div className={`padding1 ${styles.flex_sides}`}>
                         <div className={`highlight ${styles.col1}`}>
                              <p>Optou-se pelo uso político de softwares livres (open source) devido à acessibilidade que eles possibilitam, além da visão mais
                                   colaborativa de uso e desenvolvimento de ferramentas. Portanto, o nosso software de tradução dedicado é o OmegaT. Em relação a
                                   editores de texto, indicamos (mas não exigimos) o uso do LibreOffice e do OpenOffice,
                                   tendo como fonte padrão para publicação a OpenDyslexic.</p>
                         </div>
                         
                         <div className={`${styles.col2}`}>
                              <h2 className='borda2'>Github</h2>
                              <p>No nosso repositório de GitHub, temos os arquivos dos projetos, assim como os
                                   tutoriais de uso dos programas e os recursos para camaradas de TI que queiram colocar a mão na massa.</p>
                              <h2 className='borda2'>saiba mais sobre</h2>
                              <div className={`${styles.list_col}`}>
                                   <Link to={'/'} className='borda2'>aegisub</Link>
                                   <Link to={'/'} className='borda2'>omegat</Link>
                                   <Link to={'/'} className='borda2'>Opendyslexic</Link>
                              </div>
                         </div>
                    </div>
               </section>


               <section className={`padding2 ${styles.git}`}>
                    <div className="padding1 center cta-full">
                         <Link to={'/'} className='link-arrow'>Acesse nosso repositório no github</Link>
                    </div>
               </section>


               <section className={`${styles.reuniao}`}>
                    <h1>reuniões e atas</h1>
                    <p>Todas as decisões sobre os rumos da GTRR são discutidas e tomadas coletivamente em nossas reuniões mensais.
                         Fique de olho para o anúncio destas, assim como para as consultas prévias em formato de votação sobre os melhores dias e horários.
                         Você também pode ler o que foi deliberado em reuniões passadas no nosso arquivo de atas.</p>
                    <div className='padding1'>
                         <Link to={'/'} className='black-fill link-button'>Arquivo de atas</Link>
                    </div>
               </section>


          </main>
     )
}

export default Processos;