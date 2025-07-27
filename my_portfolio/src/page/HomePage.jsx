import React from 'react'
import NaviBar from '../component/NaviBar'
import './homepage.css'

function HomePage() {
  return (
    <>
    <NaviBar/>
    <main className='main'>
        <div className='name'>
            <h4>Hi, I am</h4>
            <h1 className='heshan'>Heshan Hasitha</h1>
            <p className='p'>Full Stack Web Development and Graphic Design. </p>

        </div>
        <div className='pic'>
            <h1>pic</h1>
        </div>

    </main>
    </>  
  )
}

export default HomePage