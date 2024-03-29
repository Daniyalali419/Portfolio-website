import React from 'react'
import { Link } from 'react-router-dom';
import IntroImg from "../assets/intro-bg.jpg";
import "./HeroImg.css";
const HeroImg = () => {
  return (
    <div className='hero'>
        <div className='mask'>
            <img className='into-img' src={IntroImg} alt='IntroImg'/>
        </div>
        <div className='content'>
            <p>Hi, I'M A FREELANCER.</p>
           <h1>React Developer.</h1>
        <div>
            <Link to='/project' className='btn'>Projects</Link>
            <Link to='/contact' className='btn btn-light'>Contact</Link>
        </div>
        </div>
    </div>
  )
}

export default HeroImg