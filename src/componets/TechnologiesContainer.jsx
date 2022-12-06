import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiReact,
  DiSass
} from 'react-icons/di'

import '../styles/componets/TechnologiesContainer.sass'

const stacks = [
  { id: "html", name: "HTML5", icon: <DiHtml5 /> },
  { id: "css", name: "CSS3", icon: <DiCss3 /> },
  { id: "js", name: "JavaScript", icon: <DiJsBadge /> },
  { id: "react", name: "React", icon: <DiReact /> },
  { id: "sass", name: "Sass", icon: <DiSass /> }
];

const TechnologiesContainer = () => {
  return (
    <section className='technologies-container'>
      <h2>Tecnologias</h2>
      <div className='technologies-grid'>
        {stacks.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="tecnology-info">
              <h3>{tech.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TechnologiesContainer
