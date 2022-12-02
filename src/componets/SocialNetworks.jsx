import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa"

import "../styles/componets/SocialNetworks.sass";

const socialNetworks = [
    {name: "linkedin", link: "https://www.linkedin.com/in/renanrodrigues01/", icon: <FaLinkedinIn />},
    {name: "github", link: "https://github.com/RenanRodrigues01", icon: <FaGithub />},
    {name: "instagram", link: "https://www.instagram.com/renan.rodrigues_moura/", icon: <FaInstagram />},
];

const SocialNetworks = () => {
  return (
   <section id="social-networks">
    {socialNetworks.map((network) => (
        <a href={network.link} target='_blank' className="social-btn" id={network.name} key={network.name}>
            {network.icon}
        </a>
    ))}
   </section>
  )
}

export default SocialNetworks
