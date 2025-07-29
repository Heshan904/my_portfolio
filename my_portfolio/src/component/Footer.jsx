import React from 'react'
import fc from '../img/facebook.png'
import tw from '../img/twitter.png'
import yt from '../img/youtube.png'
import wa from '../img/whatsapp.png'
import up from '../img/up-arrow.png'
import './footer.css'



function Footer() {
  return (

    <footer>
        <div className='footer'>

            <img src={up} alt="" style={{width: '20px', height: '20px'}}/>
            <button>BACK TO TOP</button>

            <div className="icon">
                <button><img src={fc} alt="" /></button>
                <button><img src={tw} alt="" /></button>
                <button><img src={yt} alt="" /></button>

                <button><img src={wa} alt="" /></button>
            </div>
            <p>© 2025 My Portfolio. All rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer