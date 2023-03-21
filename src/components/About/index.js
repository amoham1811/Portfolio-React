import React from "react";

import './index.scss'

const About = () => {

return (
     <div className="container-fluid">
       <div className="about-page">
          <h1>About me </h1>
          <p className="p1">
            I'm a very ambitious front-end developer looking for a role in an
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
            I'm quiet confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time.
          </p>
        </div>
        <div id="content">
        <div id="left"> 
            <h2>UI/UX Designer & Web Developer</h2>
            <p className="p2"><em>In this section some key information is provided about me.</em></p>
            <h3>Personal Information</h3>
            <ul>
              <li>Birthday: 18 November 1963</li>
              <li>Email: info@ultimate.com</li>     
              <li>Website: www.ultimate.com</li>
              <li>Phone: +44 1234 567890</li>
              <li>City: Birmingham, United Kingdom</li>
            </ul>
            <h3>Personal Interest</h3>
            <ul>
            <li>Enjoy hiking</li>
            <li>Love cricket</li>     
            <li>Keen on world politics</li>
            <li>Thrive on doing things differently</li>
          </ul>
        </div>
        <div id="right">
            <h3>Some Highlights</h3>
            <ul >
              <li>Former Senior Consultant at IBM+</li>
              <li>Former Headteacher</li>
              <li>Former Small Business Manager</li>
              <li>Qualifications: Double Masters</li>
              <li>Email: email@ultimate.com</li>
              <li>Freelance: Available</li>
            </ul>
            <h3>Technical Skill Areas</h3>
            <ul>
              <li>languages:c#,javascript,react,html,python</li>
              <li>Databases:MySql</li>
              <li>Business:CRM, SME, Order Management</li>
              <li>Roles:Developer,Tester,Development Manager,Technical Lead</li>
              <li>Freelance: Available</li>
            </ul>
            <p className="p2">
                If I need to define myself in one sentence that would be a family
                person, father of amazingly talented children, a sports enthusiast,
                open to new experiences, and tech-obsessed!!!
            </p>
          </div>
      </div>
    </div>
  )
}

export default About
