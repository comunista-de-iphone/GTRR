import React from 'react'
import styles from './Manifesto.module.css'
import EmConstrucao from '../../assets/construction-worker.svg';
 
const Manifesto = () => {
  return (
    <>
      <h1 className='highlight'>Manifesto</h1>
      <img src={EmConstrucao} alt="Página em construção" />
      <p>Essa página está em construção.</p>
    </>
  )
}

export default Manifesto