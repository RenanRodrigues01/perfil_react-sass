import ClimaTempo from '../img/clima_tempo.gif'
import Kanban from '../img/kanban.gif'
import SimpleStore from '../img/simple_store.gif'
import TodoList from '../img/to-do_list.gif'

import '../styles/componets/ProjectsContainer.sass'

const projects =[
  { id: "1", 
    name: "Clima Tempo", 
    icon: ClimaTempo, 
    description: "Projeto feito para o aperfeiçoamento no consumo de APIs, e no trabalho com promisses junto das funções assíncronas.",
    to: "https://github.com/RenanRodrigues01/clima_tempo" 
  },
  { id: "2", 
    name: "Kanban", 
    icon: Kanban,
    description: "Projeto feito com intuito de melhorar o uso dos componentes e Props, trabalhando com a desitruturação da mesma.",
    to: "https://github.com/RenanRodrigues01/react-kanban"
  },
  { id: "3", 
    name: "Simple Store", 
    icon: SimpleStore,
    description:"Projeto feito com HTML, CSS e JavaScript, com a função de melhorar minhas habilidades na criação de layout.",
    to: "https://github.com/RenanRodrigues01/Simple_Store"
  },
  { id: "4", 
    name: "To-do List", 
    icon: TodoList,
    description:"CRUD feito com JavaScript Vanilla e com o auxílio do LocalStorage para o armazenamento das tarefas, trazendo uma melhor experiência para o usuário.",
    to: "https://github.com/RenanRodrigues01/to-do-list"
  }
];

const ProjectsContainer = () => {
  return (
    <section className='project-conatainer'>
      <h2>Projetos</h2>

      <div className="project-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <a href={project.to} target="_blank">
            <img src={project.icon} alt={project.name} />
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProjectsContainer
