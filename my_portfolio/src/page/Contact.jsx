import React from 'react'
import NaviBar from '../component/NaviBar'
import Footer from '../component/Footer'
import './contact.css'
import Email from '../component/Email'



const hilight = { color: "blue",fontSize:"90px",BlobEvent}

function Contact() {
  return (
    <>
    <NaviBar/>
    <div className="contactm">
        <h1 style={{paddingTop:'50px'}}>If you want <span style={hilight}>contact me</span> use any method.</h1>
        <div className='box' style={{marginTop:'10%',backgroundColor:"rgba(0,0,0,0.3)",padding:'30px',width:'fit-content',alignSelf:'flex-end'}}>
            <span >
                <p style={{textAlign:'left', color:'white'}}>Whatsapp: 0702913904</p>
                <p style={{textAlign:'left', color:'white'}}>E-mail: heshanhasitha904@gmail.com</p>
                
            </span>
            

        </div>
        <div className='box' style={{marginTop:'10%',backgroundColor:"rgba(0,0,0,0.3)",padding:'30px',width:'fit-content'}}>
            <span >
                <p style={{textAlign:'left', color:'white'}}>Have you any feedback about me pleas send.</p>
                
            </span>
            

        </div>
        <Email />


    </div>
    <Footer/>
    
    </>
  )
}

export default Contact