import React from 'react'
import styles from './SugiraProjeto.module.css'
import EmConstrucao from '../../assets/construction-worker.svg';
 
const SugiraProjeto = () => {
  return (
    <>
      <h1 className='highlight'>Sugira um Projeto</h1>
      <img src={EmConstrucao} alt="Página em construção" />
      <p>Essa página está em construção.</p>
    </>
  )
}

export default SugiraProjeto