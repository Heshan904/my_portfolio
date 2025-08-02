import React from 'react'
import './project.css'
import teditor from '../img/teditor.png'
import NaviBar from '../component/NaviBar'
import Footer from '../component/Footer'
import psp from '../img/photogic.jpg'
import portfolio from '../img/portfolio.png'


const hilight = { color: "blue",fontSize:"60px",BlobEvent}

const bgimage = {backgroundImage: `url(${teditor})`, backgroundSize: 'cover', backgroundPosition: 'center'}
const photop = {backgroundImage: `url(${psp})`, backgroundSize: 'cover', backgroundPosition: 'center'}
const portfoli = {backgroundImage: `url(${portfolio})`, backgroundSize: 'cover', backgroundPosition: 'center'}


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
                        <h4 style={{fontSize:'20px',color:'white'}}>Text Editor</h4>
                        <span style={{fontSize:'15px',fontFamily:"'Raleway', sans-serif" ,color:'white'}}>This is a basic text editor built with HTML, CSS, and JavaScript.</span>
                        <a href="https://heshan904.github.io/Text-editor/" target='_blank' rel='noreferrer'><button style={{border:"2px solid black", borderRadius:"5px", width:"fit-content", cursor:"pointer",fontSize:"10px",alignSelf:"center" ,color:'white'}}>View preview</button></a>
                    </div>
                </div>
                <div className="pphoto" style={photop}>
                    <div className="label">
                        <h4 style={{fontSize:'20px',color:'white'}}>Design Collection</h4>
                        <span style={{fontSize:'15px',fontFamily:"'Raleway', sans-serif" ,color:'white'}}>I have edite many logos and posters.</span>
                        <a href=" " target='_blank' rel='noreferrer'><button style={{border:"2px solid black", borderRadius:"5px", width:"fit-content", cursor:"pointer",fontSize:"10px",alignSelf:"center" ,color:'white'}}>View preview</button></a>
                    </div>
                </div>
                <div className="pphoto" style={portfoli}>
                    <div className="label">
                        <h4 style={{fontSize:'20px',color:'white'}}>My portfolio</h4>
                        <span style={{fontSize:'15px',fontFamily:"'Raleway', sans-serif" ,color:'white'}}>I finished my portfolio website using React.</span>
                        <a href="https://my-portfolio-theta-ivory-88.vercel.app/" target='_blank' rel='noreferrer'><button style={{border:"2px solid black", borderRadius:"5px", width:"fit-content", cursor:"pointer",fontSize:"10px",alignSelf:"center" ,color:'white'}}>View preview</button></a>
                    </div>
                </div>
            </div>
        </div>
    <Footer/>
    </>
  )
}

export default Project