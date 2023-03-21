import React from "react";
//import { useEffect, useState } from 'react'
//import AnimatedLetters from '../AnimatedLetters/index'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const Resume = () => {
//    const [letterClass, setLetterClass] = useState('text-animate')

//    useEffect(() => {
//      return setTimeout(() => {
//        setLetterClass('text-animate-hover')
//      }, 3000)
//    }, [])

return (
    <div className="container-fluid colour">
        <div className="section-details">
                <h2>Resume </h2>
                <p className="p1">
                    A brief history of education and professional experience is provided below. I have extensive experience in education and software development. My previous experience in software industry was sometime back but I have extensive experience of project lifecycles in dynamic environments involving teams made up of individuals from across the world.  
                </p>
            </div>
            <div id="content">
            <div id="left">
                    <h3 className="resume-title">Summary</h3>
                    <h3>Arshad Mohammed</h3>
                    <p  className="p2">Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.
                    </p> 
                    <ul>
                        <li>Hodge Hill, Birmingham, England</li>
                        <li>(123) 456-7891</li>
                        <li>arshad.mohammed@ultimate.com</li>
                    </ul>
                
                    <h3 className="resume-title">Education</h3>
                        <div className="resume-item">
                            <h4>MSc Nuclear Science & Technology</h4>
                            <h5>2019-2021</h5>
                            <p className="p2"><em>University of Manchester, Manchester, UK</em></p>
                        </div>
                        <div className="resume-item">
                                <h4>MSc Satellite Engineering</h4>
                                <h5>1986-1987</h5>
                                <p className="p2"><em>University of Surrey, Guildford, UK</em></p>        
                        </div>
                        <div className="resume-item">
                            <h4>BSc Pure Physics</h4>
                            <h5>1983-86</h5>
                            <p className="p2"><em>University of London, London, UK</em></p>
                        </div>
                    </div>
            <div id="right">
                <h3 className="resume-title">Professional experience</h3>
                <div className="resume-item">
                    <h4>Senior Application Developer</h4>
                    <h5>2021-Present</h5>
                    <p className="p2"><em>e4k Digital Agency, Birmingham, UK</em></p>
                    <ul>
                        <li>Lead in the analysis, design, development, and implementation of SME applications</li>
                        <li>Delegate tasks to the 2 members of the design team and provide counsel on business aspects of the project.</li>
                        <li>Oversee the efficient use of production project budgets ranging from £10,000 - £20,000</li>
                    </ul>
                    <div className="resume-item">
                        <h4>Education Specialist</h4>
                        <h5>2001-2019</h5>
                        <p className="p2"><em>Birmingham City Council, Birmingham, UK</em></p>
                        <ul>
                            <li>Developed numerous education programs leading mutidisciplinary teams.</li>
                            <li>Managed up to 5 projects or tasks at a given time while under pressure</li>
                            <li>Recommended and consulted with clients on the acceleration of cognitive development and use of most appropriate pedagogies</li>
                        </ul>
                    </div>
                    <div className="resume-item">
                        <h4>CRM Specialist</h4>
                        <h5>1996-2001</h5>
                        <p className="p2"><em>IBM, Farnborough, UK</em></p>
                        <ul>
                            <li>Developed numerous call centre applications for multinational clients.</li>
                            <li>Lead multidisciplinary teams ranging from business analysis, design, devlopment and testing.</li>
                            <li>Delivered projects under very tight time and budget constraints</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
            // <div className="col4">
            //         <h3 className="resume-title">Professional experience</h3>
            //         <div className="resume-item">
            //             <h4>Senior Application Developer</h4>
            //             <h5>2021-Present</h5>
            //             <p><em>e4k Digital Agency, Birmingham, UK</em></p>
            //             <ul>
            //                 <li>Lead in the analysis, design, development, and implementation of SME applications</li>
            //                 <li>Delegate tasks to the 2 members of the design team and provide counsel on business aspects of the project.</li>
            //                 <li>Oversee the efficient use of production project budgets ranging from £10,000 - £20,000</li>
            //             </ul>
            //         </div>
            //         <div className="resume-item">
            //             <h4>Education Specialist</h4>
            //             <h5>2001-2019</h5>
            //         <p><em>Birmingham City Council, Birmingham, UK</em></p>
            //         <ul>
            //             <li>Developed numerous education programs leading mutidisciplinary teams.</li>
            //             <li>Managed up to 5 projects or tasks at a given time while under pressure</li>
            //             <li>Recommended and consulted with clients on the acceleration of cognitive development and use of most appropriate pedagogies</li>
            //         </ul>
            //     </div>
            //     <div className="resume-item">
            //         <h4>CRM Specialist</h4>
            //         <h5>1996-2001</h5>
            //         <p><em>IBM, Farnborough, UK</em></p>
            //         <ul>
            //             <li>Developed numerous call centre applications for multinational clients.</li>
            //             <li>Lead multidisciplinary teams ranging from business analysis, design, devlopment and testing.</li>
            //             <li>Delivered projects under very tight time and budget constraints</li>
            //         </ul>
            //         </div>
            //     </div>
  )
}

export default Resume