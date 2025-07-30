import React from 'react'
import Skill from '../component/Skill'
import NaviBar from '../component/NaviBar'
import Footer from '../component/Footer'
import './skillpage.css'

const hilight = { color: "blue",fontSize:"90px",BlobEvent}

function SkillPage() {
  return (
    <>
        <NaviBar/>
        <div className='skillbody'>
          <h1>Why <span style={hilight}>Skills</span> Matter</h1>
          <div className='para'>
            <p>Skills are the foundation of success in any field. They empower individuals to tackle challenges, innovate, and excel in their careers. In today's fast-paced world, having a diverse skill set is essential for adaptability and growth.</p>
            <p>Whether it's technical expertise, creative abilities, or interpersonal skills, each contributes to personal and professional development. Mastering skills not only enhances problem-solving capabilities but also boosts confidence and opens doors to new opportunities.</p>
            <p>A strong skill set empowers the creation of impactful solutions across platforms</p>
          </div>
        </div >
        <Skill/>
        <Footer/>
    </>
  )
}

export default SkillPage