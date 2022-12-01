import ClimaTempo from '../img/clima_tempo.gif'
import Kanban from '../img/kanban.gif'

import '../styles/componets/ProjectsContainer.sass'

const projects =[
  {id: "1", name: "climaTempo", icon: <ClimaTempo />},
  {id: "2", name: "kanban", icon: <Kanban />}
];

const ProjectsContainer = () => {
  return (
    <section className='project-conatainer'>
      <h2>Projetos</h2>

      <div className="project-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <img src={project.icon} alt={project.name} />
            <h3></h3>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProjectsContainer
