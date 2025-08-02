import React from 'react'
import NaviBar from '../component/NaviBar'
import './homepage.css'
import Footer from '../component/Footer'
import tg from '../img/paper-plane.png'
import gh from '../img/github-logo.png'
import mi from '../img/email.png'
import Skill from '../component/Skill'
import boy from '../img/boy.png'
import AnimatedImage from '../component/Animate'
import EmailForm from '../component/Email'
import Ido from '../component/Ido'







function HomePage() {
  return (
    <>
    <NaviBar/>
    <main className='main'>
        <div className='name'>
            <h4>Hi, I am</h4>
            <h1 className='heshan'>Heshan Hasitha</h1>
            <p className='p' style={{textAlign: 'left'}}>Full Stack Web Development and Graphic Design. </p>
            <div className='cbi'>
              <a href='http://t.me/heshan904' target='_blank' rel='noopener noreferrer'> <button className='bi'><img src={tg} alt="" /></button></a>
              <a href='https://github.com/' target='_blank' rel='noopener noreferrer'><button className='bi'><img src={gh} alt="" /></button></a>
              <a href='mailto:your-heshanhasitha904@gmail.com' target='_blank' rel='noopener noreferrer'><button className='bi'><img src={mi} alt="" /></button></a>
            </div>

        </div>
        <AnimatedImage src={boy} alt="Cool Image"/>

    </main>
    <div className='body'>
      <Ido/>
      <Skill/>
      <EmailForm/>
      
    </div>
    <Footer/>
    </>  
  )
}

export default HomePage