import React from "react";
//import { Link } from 'react-router-dom'
//import Loader from 'react-loaders'
// import AnimatedLetters from '../AnimatedLetters'
import hero from '../Assets/images/hero.jpg'
import './index.scss'

const Home = () => {
    
     
  return (
    <div>
            <div className="sub-hero" style={{backgroundImage:`url(${hero})`,
                                              backgroundPosition:'center',
                                              backgroundSize:'cover',
                                              backgroundRepeat:'no-repeat'}}>
            
                <div className="ultimate"  data-aos="fade-in">
                    <h1>Arshad Mohammed</h1>
                    <p style={{fontWeight:'bold'}}>Analyst, Designer, Developer</p>
                </div>
            </div>
      
        {/* <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img
              src={LogoTitle}
              alt="JavaScript Developer Name, Web Developer Name"
            />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>Front End Developer / JavaScript Expert / Youtuber</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <Logo />
      </div>

      <Loader type="pacman" /> */}
        
    </div>
  )
}

export default Home