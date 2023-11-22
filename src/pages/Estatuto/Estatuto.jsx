import React from 'react'
import styles from './Estatuto.module.css'
import EmConstrucao from '../../assets/construction-worker.svg';
 
const Estatuto = () => {
  return (
    <>
      <h1 className='highlight'>Estatuto</h1>
      <img src={EmConstrucao} alt="Página em construção" />
      <p>Essa página está em construção.</p>
    </>
  )
}

export default Estatuto