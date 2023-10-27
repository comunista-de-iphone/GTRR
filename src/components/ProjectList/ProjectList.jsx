import styles from './ProjectList.module.css'



const ProjectList = ({projects}) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Projeto</th>
          <th>Data</th>
          <th>Download</th>
        </tr>
      </thead>
      <tbody>
        {projects.map(p => (
          <tr key={p.id}>
            <td>{p.name}</td>
            <td>{p.date}</td>
            <td><a href={p.link}>Link</a></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProjectList;