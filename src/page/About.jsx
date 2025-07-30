import React from 'react'
import NaviBar from '../component/NaviBar'
import Footer from '../component/Footer'
import Skill from '../component/Skill'
import './about.css'

const hilight = { color: "blue",fontSize:"90px", fontFamily: "'Grotley', sans-serif",}

export default function About() {
  return (
    <>
        <NaviBar/>
        <div className="main">
            <div className="about">
                <h1>Hi,<span style={hilight}>I am</span> Heshan Hasitha</h1>
                <br/>
                <div className="para">
                <p>Welcome to my portfolio! I am a Full Stack Web Developer and Graphic Designer with a passion for creating innovative solutions. My journey in web development has equipped me with the skills to build dynamic and responsive websites, while my design background allows me to create visually appealing user interfaces.</p>
                <p>I believe in continuous learning and staying updated with the latest technologies. My goal is to combine functionality with aesthetics to deliver exceptional user experiences.</p>
                </div>
            </div>
        </div>

        <Skill/>
        <Footer/>
    </>
  )
}
