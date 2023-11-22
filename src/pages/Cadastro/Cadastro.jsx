import React from 'react'
import styles from './Cadastro.module.css'
import EmConstrucao from '../../assets/construction-worker.svg';
 
const Cadastro = () => {
  return (
    <>
      <h1 className='highlight'>Cadastro</h1>
      <img src={EmConstrucao} alt="Página em construção" />
      <p>Essa página está em construção.</p>
    </>
  )
}

export default Cadastro