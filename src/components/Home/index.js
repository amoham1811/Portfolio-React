import React from "react";
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
                    <p  style={{width:'100%', fontSize:'120%', fontWeight:'bold', textAlign:'center'}}>Analyst, Designer, Developer</p>
                </div>
            </div>
    </div>
  )
}

export default Home