import React from 'react'
import Avatar from '../img/img.png'
import '../styles/components/sidebar.sass'
import InformationContainer from './InformationContainer'
import SocialNetworks from './SocialNetworks'

const Sidebar = () => {
    return (
        <aside id="sidebar">
            <img src={Avatar} alt="fernanda bertini" />
            <p className="title">Front End Developer</p>
            <SocialNetworks/>
            <InformationContainer/>
            <a href="https://drive.google.com/file/d/1Q7eHfpxkq5SzMMs7fRRQqgPAAMzDya_x/view?usp=share_link" className="btn">Resume Download</a>
        </aside>
    )
}

export default Sidebar