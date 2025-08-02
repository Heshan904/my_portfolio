import React from 'react'
import './ido.css'
import bobile from '../img/mobile.png'
import web from '../img/web.png'
import uiux from '../img/uid.png'
import graphic from '../img/graphic.png'
import content from '../img/content.png'


const hilight = { color: "blue",fontSize:"90px",BlobEvent}

function Ido() {
  return (
    <div className='idomain'>

        <div style={{alignSelf:'flex-end' ,display:'flex',flexDirection:'column'}}>
            <img src={bobile} alt="mobile" style={{width: '150px', height: '150px'}} />
            <h2>Mobile Appication Development</h2>
        </div>
        <div style={{marginLeft:'5%',display:'flex',flexDirection:'column'}}>
            <img src={web} alt="web" style={{width: '150px', height: '150px'}} />
            <h2>Web Development</h2>
        </div>

        <h1 style={{alignSelf:'center'}}>What <span style={hilight}>I can</span> do</h1>
        <div style={{alignSelf:'flex-end',marginRight:'5%',display:'flex',flexDirection:'column'}}>
            <img src={uiux} alt="uiux" style={{width: '150px', height: '150px'}} />
            <h2>UI/UX Design</h2>
        </div>
        <div className="idobox" style={{display:'flex',flexDirection:'column'}}>
            <img src={graphic} alt="graphic" style={{width: '150px', height: '150px'}} />
            <h2>Graphic Design</h2>
        </div>
        <div style={{alignSelf:'flex-end',marginRight:'25%',display:'flex',flexDirection:'column'}}>
            <img src={content} alt="content" style={{width: '150px', height: '150px'}} />
            <h2>Content Creator</h2>
        </div>


    </div>
  )
}

export default Ido