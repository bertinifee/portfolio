import React from 'react'
import '../styles/components/informationContainer.sass'
import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from 'react-icons/ai'

const InformationContainer = () => {
    return <section id="information">
        <div className="info-card">
            <AiFillPhone id="phone-icon"/>
            <div>
                <h3>Phone</h3>
                <p>(51)99996-6965</p>
            </div>
        </div>
        <div className="info-card">
            <AiOutlineMail id="email-icon"/>
            <div>
                <h3>E-mail</h3>
                <p>fernandabertini01@gmail.com</p>
            </div>
        </div>    
        <div className="info-card">
            <AiFillEnvironment id="pin-icon"/>
            <div>
                <h3>Localization</h3>
                <p>RS - BR</p>
            </div>
        </div>
    </section>
}

export default InformationContainer