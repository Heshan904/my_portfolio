import React from 'react'
import img from '../img/logo.png'
import './navibar.css'
import { Link } from 'react-router-dom';

function NaviBar() {
  return (
    <div className='navi'>
        <Link to="/"><img src={img} alt="" className='logo' /></Link>
        <div className='btn'>
            <Link to="/about"><button>About me</button></Link>
            <button>Skills</button>
            <button>Projects</button>
            <button>Contact</button>
        </div>
    </div>
  )
}

export default NaviBar