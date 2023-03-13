import React from "react";
//import { useEffect, useState } from 'react'
//import AnimatedLetters from '../AnimatedLetters/index'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
//    const [letterClass, setLetterClass] = useState('text-animate')

//    useEffect(() => {
//      return setTimeout(() => {
//        setLetterClass('text-animate-hover')
//      }, 3000)
//    }, [])

return (
     <div>
       <div className="about-page">
        <h1>About me </h1>
        <p>
          I'm a very ambitious front-end developer looking for a role in an
          established IT company with the opportunity to work with the latest
          technologies on challenging and diverse projects.
          I'm quiet confident, naturally curious, and perpetually working on
          improving my chops one design problem at a time.
        </p>
        <h2>UI/UX Designer & Web Developer</h2>
        <p>In this section some key information is provided about me.</p>
        <ul className="align-left" >
          <li>Birthday: 18 November 1963</li>
          <li>Website: www.ultimate.com</li>
          <li>Phone: +44 1234 567890</li>
          <li>City: Birmingham, United Kingdom</li>
        </ul>
        <ul className="align-right">
          <li>Age: 59 years</li>
          <li>Degree: Double Masters</li>
          <li>Email: email@ultimate.com</li>
          <li>Freelance: Available</li>
        </ul>
        <p>
            If I need to define myself in one sentence that would be a family
            person, father of a beautiful daughter, a sports fanatic,
            photography enthusiast, and tech-obsessed!!!
        </p>
      </div>
    </div>
  )
}

export default About
