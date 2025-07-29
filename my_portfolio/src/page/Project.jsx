import React from 'react'
import './project.css'
import teditor from '../img/teditor.png'
import NaviBar from '../component/NaviBar'
import Footer from '../component/Footer'


const hilight = { color: "blue",fontSize:"60px",BlobEvent}

const bgimage = {backgroundImage: `url(${teditor})`, backgroundSize: 'cover', backgroundPosition: 'center'}


function Project() {
  return (
    <>
    <NaviBar/>
        <div className="project">
            <div className="prh">
                <h1 style={{fontFamily:"'Raleway', sans-serif", fontSize:"40px"}}>Here are some of <span style={hilight} >My projects</span> that I have worked on.</h1>

            </div>
            <div className="pro">
                <div className="pphoto" style={bgimage}>
                    <div className="label">
                        <h4 style={{fontSize:'20px'}}>Text Editor</h4>
                        <span style={{fontSize:'20px',fontFamily:"'Raleway', sans-serif",fontSize:"15px"}}>This is a basic text editor built with HTML, CSS, and JavaScript.</span>
                        <button style={{border:"2px solid black", borderRadius:"5px", width:"fit-content", cursor:"pointer",fontSize:"10px",alignSelf:"center"}}>View preview</button>
                    </div>
                </div>
                <div className="pphoto">
                    <h4>Text Editor</h4>
                    <p>This is a basic text editor built with HTML, CSS, and JavaScript.</p>
                </div>
            </div>
        </div>
    <Footer/>
    </>
  )
}

export default Project