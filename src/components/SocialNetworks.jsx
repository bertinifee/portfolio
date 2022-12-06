import React from 'react'
import '../styles/components/socialnetworks.sass'
import {FaLinkedin, FaGithub, FaInstagram} from 'react-icons/fa'


const socialNetworks = [
    { name: "linkedin", icon: <FaLinkedin/>, text_link:"https://www.linkedin.com/in/fernanda-bertini-563b83246/"},
    { name: "github", icon: <FaGithub/>, text_link:"https://github.com/bertinifee"},
    { name: "instagram", icon: <FaInstagram/>, text_link:"https://instagram.com/drawingsfee?igshid=Zjc2ZTc4Nzk="}
]

const SocialNetworks = () => {
    return <section id="social-networks">
        {socialNetworks.map((network) => (
            <a href={network.text_link} className='social-btn' id={network.name} key={network.name}>
                {network.icon}
            </a>            
        ))}
        
    </section>
}

export default SocialNetworks