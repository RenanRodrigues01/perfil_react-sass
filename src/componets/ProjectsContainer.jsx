import ClimaTempo from '../img/clima_tempo.gif'
import Kanban from '../img/kanban.gif'
import SimpleStore from '../img/simple_store.gif'
import Cotacao from '../img/cotacao_moeda.png'

import '../styles/componets/ProjectsContainer.sass'

const projects =[
  {id: "1", name: "clima Tempo", icon: ClimaTempo, description: "Projeto de consumo de api"},
  {id: "2", name: "kanban", icon: Kanban},
  {id: "3", name: "Simple store", icon: SimpleStore},
];

const ProjectsContainer = () => {
  return (
    <section className='project-conatainer'>
      <h2>Projetos</h2>

      <div className="project-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <img src={project.icon} alt={project.name} />
            <h3>{project.name}</h3>
            <p></p>
            <a href="#" className="btn">Saiba mais</a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProjectsContainer
