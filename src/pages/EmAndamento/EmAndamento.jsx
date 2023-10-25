import React, {useState, useEffect} from 'react'
import styles from './EmAndamento.module.css'
import ProjectList from '../../components/ProjectList/ProjectList.jsx'
 
const EmAndamento = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    fetch("projects.json")
      .then(response => response.json())
      .then(json => setProjects(json.filter(p => p.status == 1)))
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return (
    <>
      <h1 className='highlight'>PROJETOS EM ANDAMENTO</h1>
      {loading ? (
        <div>Carregando...</div>
      ) : (
      <ProjectList projects = {projects}/>
      )}
    </>
  )
}

export default EmAndamento

