import React from 'react'
import videoBG from './images/bg.mp4'
import './Welcome.css'

const Welcome = () => {
  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  return (

    

    <div className='welcome'>
        <video autoPlay loop muted>
            <source src={videoBG} type="video/mp4"></source>
        </video>
        <div className='content'>
            <p>Call us</p>
            <p>0853-1492-5018</p>
            <p>Best Catering</p>
            <p>In Bandung City</p>
            <button href='https://wa.me/62895386037604' className='button' onClick={() => openInNewTab('https://wa.me/62895386037604?text=Anjay%20makasih%20bang')}>
              CHAT SEKARANG!
            </button>
        </div>
    </div>
  )
}



export default Welcome