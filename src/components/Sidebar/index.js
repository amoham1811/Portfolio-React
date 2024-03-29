import './index.scss'
import { useState } from 'react'
import {Link,NavLink } from 'react-router-dom'
import LogoS from '../../components/Assets/images/profile-img.jpg'
import LogoSubtitle from '../../components/Assets/images/SubTitle.jpg'
import Home from '../../components/Assets/images/home.jpg'
import About from '../../components/Assets/images/About.jpg'
import Projects from '../../components/Assets/images/portfolio.jpg'
import Resume from '../../components/Assets/images/resume.jpg'
import Contact from '../../components/Assets/images/contact.jpg'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import {
    faLinkedin,
    faGithub,
    faYoutube,
    faSkype
}   from '@fortawesome/free-brands-svg-icons'

import {
    // faHome,
    // faUser,
    // faEnvelope,
    // faSuitcase,
    faBars,
    faClose
} from '@fortawesome/free-solid-svg-icons'
//import Contact from '../pages/Contact'

const Sidebar = () => {
    const[ShowNav, setShowNav] = useState(false);
    
    return(
        <div className='nav-bar'>
            <Link 
                className='logo' 
                to='/'
                onClick ={() => setShowNav(false)}
                >
                <img src={LogoS} alt="logo"/> 
                <img className="sub-logo" src={LogoSubtitle} alt="Arshad Mohmmed"/>        
            </Link>
            <nav className={ShowNav ? 'mobile-show' : ''} >
                <NavLink 
                    exact="true" 
                    activeclassname="active" 
                    to="/"
                    onClick={() => setShowNav(false)}
                    >
                    <img className="sub-home" src={Home} alt="Home"/>
                    {/* <FontAwesomeIcon icon={Home} color="#4d4d4e" /> */}
                </NavLink>
                <NavLink 
                    exact="true" 
                    activeclassname="active" 
                    className="about-link"
                    to="/about"
                    onClick={() => setShowNav(false)}
                >
                    <img className="sub-about" src={About} alt="About"/>
                    {/* <FontAwesomeIcon icon={About} color="#4d4d4e" /> */}
                </NavLink>
                <NavLink 
                    activeclassname="active" 
                    className="projects-link"
                    to="/projects"
                    onClick={() => setShowNav(false)}
                >
                    <img className="sub-projects" src={Projects} alt="Projects"/>
                    {/* <FontAwesomeIcon icon={profile} color="#4d4d4e" /> */}
                </NavLink>
                
                <NavLink 
                    //exact="true" 
                    activeclassname="active" 
                    className="resume-link"
                    to="/resume"
                    onClick={() => setShowNav(false)}
                >
                    <img className="sub-resume" src={Resume} alt="Resume"/>
                    {/* <FontAwesomeIcon icon={resume} color="#4d4d4e" /> */}
                </NavLink>

                <NavLink 
                    //exact="true" 
                    activeclassname="active" 
                    className="contact-link"
                    to="/contact"
                    onClick={() => setShowNav(false)}
                >
                    <img className="sub-contact" src={Contact} alt="Contact"/>
                    {/* <FontAwesomeIcon icon={contact} color="#4d4d4e" /> */}
                </NavLink>
                <FontAwesomeIcon
                    onClick={() => setShowNav(false)}
                    icon={faClose}
                    color="#ffd700"
                    size="3x"
                    className='close-icon'/>
            </nav>
            <ul>
                <li>
                    <a 
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.linkedin.com/in/arshad-mohammed-48749a23a/"
                    >
                        <FontAwesomeIcon 
                            icon={faLinkedin} 
                            color="4d4d4e"
                            size="2x"
                            className="anchor-icon"    
                        />
                    </a>
                </li>
                <li>
                    <a 
                        target="_blank"
                        rel="noreferrer"
                        href="https://github.com/amoham1811"
                    >
                        <FontAwesomeIcon 
                            icon={faGithub} 
                            color="4d4d4e"
                            size="2x"
                            className= "anchor-icon"    
                        />
                    </a>
                </li>
                <li>
                    <a 
                        target="_blank"
                        rel="noreferrer"
                        href="https://studio.youtube.com/channel/UC6Moy0LsQpterMa3xrdV_Kw"
                    >
                        <FontAwesomeIcon 
                            icon={faYoutube} 
                            color="4d4d4e"
                            size="2x"
                            className= "anchor-icon"    
                        />
                    </a>
                </li>
                <li>
                    <a 
                        target="_blank"
                        rel="noreferrer"
                        href="skype:live:c1e8e7b744a37ea5"
                    >
                        <FontAwesomeIcon 
                            icon={faSkype} 
                            color="4d4d4e"
                            size="2x"
                            className="anchor-icon"    
                        />
                    </a>
                </li>

            </ul>
            <FontAwesomeIcon
                onClick={() => setShowNav(true)}
                icon={faBars}
                color="#fdd700"
                size="3x"
                className='hamburger-icon' />

            {/* <!-- ======= Footer ======= --> */}
              <footer id="footer">
                <div className="container">
                  <div className="copyright">
                    &copy; Copyright <strong><span>My Portfolio</span></strong>
                  </div>
                  <div className="credits">
                    Designed by <a href="https://ultimate.com/">ultimate</a>
                  </div>
                </div>
              </footer>
              {/* <!-- End  Footer --> */}
        </div>)

}



export default Sidebar