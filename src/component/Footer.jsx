import React from 'react'
import fc from '../img/facebook.png'
import tw from '../img/twitter.png'
import yt from '../img/youtube.png'
import wa from '../img/whatsapp.png'
import up from '../img/up-arrow.png'
import './footer.css'
import ScrollToTopButton from './ScrollToTop'



function Footer() {
  
  return (

    <footer>
        <div className='footer'>

            <img src={up} alt="" style={{width: '20px', height: '20px'}}/>
            <ScrollToTopButton/>

            <div className="icon">
                <a href='https://www.facebook.com/share/19UoitDXzs/' rel='noopener noreferrer' target='_blank'><button><img src={fc} alt="" /></button></a>
                <a href='https://x.com/hasitha904?t=lEneXq7dhzVTdPKIIwyu3g&s=35' rel='noopener noreferrer' target='_blank'><button><img src={tw} alt="" /></button></a>
                <a href='https://youtube.com/@mindrelaxation904?si=ZtEssJ2KwD9sVduH' rel='noopener noreferrer' target='_blank'><button><img src={yt} alt="" /></button></a>
                <a href='https://wa.me/+94702913904' rel='noopener noreferrer' target='_blank'><button><img src={wa} alt="" /></button></a>
            </div>
            <p>© 2025 My Portfolio. All rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer