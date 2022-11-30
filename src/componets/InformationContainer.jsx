import { AiFillPhone, AiOutlineMail } from 'react-icons/ai';

import '../styles/componets/InformationContainer.sass'

const InformationContainer = () => {
  return (
   <section id="information">
        <div className="info-card">
            <AiFillPhone id="phone-icon"/>
            <div>
                <h3>Telefone</h3>
                <p>(12)98179-5154</p>
            </div>
        </div>
        <div className="info-card">
            <AiOutlineMail id="email-icon"/>
            <div>
                <h3>E-mail</h3>
                <p id="email">renan.rodriguesmoura2022@gmail.com</p>
            </div>
        </div>

   </section>
  )
}

export default InformationContainer
