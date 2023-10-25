import styles from './ProjectList.module.css'


const ProjectList = ({projects}) => {
  console.log(projects);
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
        <tr>
          <td>Proj 1</td>
          <td>10/06/2023</td>
          <td>Google Drive</td>
        </tr>
        {projects.map(p => (
          <tr>
            <td>{p.name}</td>
            <td>{p.date}</td>
            <td>{p.link}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProjectList;