import React from 'react'
import './about.css';
import Me from '../../assets/mee.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">

            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experince</h5>
              <small>1 year</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Job title</h5>
              <small>FrontEnd Developer </small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>5 projects</small>
            </article>
          </div>
          <p>Lorem, ipsum dolor sit amet consectetur 
            adipisicing elit. Nobis quasi consectetur eum,
             totam quos cupiditate eligendi, beatae laborum
              earum veniam in vel. Ullam ducimus eveniet 
              ratione eligendi cupiditate maxime molestiae.</p>
              <a href="#contact" className='btn btn-primary'>Let's talk</a>
        </div>
      </div>
    </section>
  )
}

export default About