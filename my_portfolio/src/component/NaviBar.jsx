import React from 'react'
import img from '../img/logo.png'
import './navibar.css'

function NaviBar() {
  return (
    <div className='navi'>
        <button><img src={img} alt="" className='logo' /></button>
        <div className='btn'>
            <button>About me</button>
            <button>Skills</button>
            <button>Projects</button>
            <button>Contact</button>
        </div>
    </div>
  )
}

export default NaviBar