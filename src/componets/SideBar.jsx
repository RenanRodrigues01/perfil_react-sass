import SocialNetworks from "./SocialNetworks"
import InformationContainer from "./InformationContainer"

import Avatar from "../img/foto_perfil.png"

import "../styles/componets/Sidebar.sass"


const SideBar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Renan Rodrigues" />
      <p className="title">Desenvolvedor Front-End</p>
      <SocialNetworks />
      <InformationContainer />
      <a href="" className="btn">
        Donwload Currículo
      </a>
    </aside>
  )
}

export default SideBar
