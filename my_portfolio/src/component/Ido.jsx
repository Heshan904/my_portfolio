import React from 'react'
import './ido.css'



const hilight = { color: "blue",fontSize:"90px",BlobEvent}

function Ido() {
  return (
    <div className='idomain'>

        <div style={{alignSelf:'flex-end'}}>
            <h2>Mobile Appication Development</h2>
        </div>
        <div style={{marginLeft:'10%'}}>
            <h2>Web Development</h2>
        </div>

        <h1 style={{alignSelf:'center'}}>What <span style={hilight}>I can</span> do</h1>
        <div style={{alignSelf:'flex-end',marginRight:'10%'}}>
            <h2>UI/UX Design</h2>
        </div>
        <div className="idobox">
            <h2>Graphic Design</h2>
        </div>
        <div style={{alignSelf:'flex-end',marginRight:'25%'}}>
            <h2>Content Creator</h2>
        </div>


    </div>
  )
}

export default Ido