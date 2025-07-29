import React from 'react'
import NaviBar from '../component/NaviBar'
import './homepage.css'
import Footer from '../component/Footer'
import tg from '../img/paper-plane.png'
import gh from '../img/github-logo.png'
import mi from '../img/email.png'
import Skill from '../component/Skill'





function HomePage() {
  return (
    <>
    <NaviBar/>
    <main className='main'>
        <div className='name'>
            <h4>Hi, I am</h4>
            <h1 className='heshan'>Heshan Hasitha</h1>
            <p className='p'>Full Stack Web Development and Graphic Design. </p>
            <div className='cbi'>
              <button className='bi'><img src={tg} alt="" /></button>
              <button className='bi'><img src={gh} alt="" /></button>
              <button className='bi'><img src={mi} alt="" /></button>
            </div>

        </div>
        <div className='pic'>
            <h1>pic</h1>
        </div>

    </main>
    <div className='body'>
      <Skill/>
    </div>
    <Footer/>
    </>  
  )
}

export default HomePage