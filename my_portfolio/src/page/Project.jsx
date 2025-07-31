import React from 'react'
import './project.css'
import teditor from '../img/teditor.png'
import NaviBar from '../component/NaviBar'
import Footer from '../component/Footer'
import psp from '../img/photogic.jpg'


const hilight = { color: "blue",fontSize:"60px",BlobEvent}

const bgimage = {backgroundImage: `url(${teditor})`, backgroundSize: 'cover', backgroundPosition: 'center'}
const photop = {backgroundImage: `url(${psp})`, backgroundSize: 'cover', backgroundPosition: 'center'}


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
<<<<<<< HEAD
                        <h4 style={{fontSize:'20px'}}>Text Editor</h4>
                        <span style={{fontSize:'15px',fontFamily:"'Raleway', sans-serif"}}>This is a basic text editor built with HTML, CSS, and JavaScript.</span>
                        <a href="https://heshan904.github.io/Text-editor/" target='_blank' rel='noopener noreferrer'><button style={{border:"2px solid black", borderRadius:"5px", width:"fit-content", cursor:"pointer",fontSize:"10px",alignSelf:"center"}}>View preview</button></a>
=======
                        <h4 style={{fontSize:'20px',color:'white'}}>Text Editor</h4>
                        <span style={{fontSize:'15px',fontFamily:"'Raleway', sans-serif" ,color:'white'}}>This is a basic text editor built with HTML, CSS, and JavaScript.</span>
                        <a href="https://heshan904.github.io/Text-editor/" target='_blank' rel='noreferrer'><button style={{border:"2px solid black", borderRadius:"5px", width:"fit-content", cursor:"pointer",fontSize:"10px",alignSelf:"center" ,color:'white'}}>View preview</button></a>
>>>>>>> 26a09bb56f23a821f76209558b6ac6a52b602d85
                    </div>
                </div>
                <div className="pphoto" style={photop}>
                    <div className="label">
                        <h4 style={{fontSize:'20px',color:'white'}}>Design Collection</h4>
                        <span style={{fontSize:'15px',fontFamily:"'Raleway', sans-serif" ,color:'white'}}>I have edite many logos and posters.</span>
                        <a href=" " target='_blank' rel='noreferrer'><button style={{border:"2px solid black", borderRadius:"5px", width:"fit-content", cursor:"pointer",fontSize:"10px",alignSelf:"center" ,color:'white'}}>View preview</button></a>
                    </div>
                </div>
                <div className="pphoto" style={photop}>
                    <div className="label">
                        <h4 style={{fontSize:'20px',color:'white'}}>Design Collection</h4>
                        <span style={{fontSize:'15px',fontFamily:"'Raleway', sans-serif" ,color:'white'}}>I have edite many logos and posters.</span>
                        <a href=" " target='_blank' rel='noreferrer'><button style={{border:"2px solid black", borderRadius:"5px", width:"fit-content", cursor:"pointer",fontSize:"10px",alignSelf:"center" ,color:'white'}}>View preview</button></a>
                    </div>
                </div>
                <div className="pphoto" style={photop}>
                    <div className="label">
                        <h4 style={{fontSize:'20px',color:'white'}}>Design Collection</h4>
                        <span style={{fontSize:'15px',fontFamily:"'Raleway', sans-serif" ,color:'white'}}>I have edite many logos and posters.</span>
                        <a href=" " target='_blank' rel='noreferrer'><button style={{border:"2px solid black", borderRadius:"5px", width:"fit-content", cursor:"pointer",fontSize:"10px",alignSelf:"center" ,color:'white'}}>View preview</button></a>
                    </div>
                </div>
            </div>
        </div>
    <Footer/>
    </>
  )
}

export default Project