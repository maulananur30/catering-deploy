import React from 'react'
import user1 from './images/user1.jpg'
import user2 from './images/user2.jpg'
import user3 from './images/user3.jpg'
import './Testimonials.css'

const Testimonials = () => {
    return (
        <div className='testimonials' id='testimonials'>
            <div className='container'>
                <h2>Testimonials</h2>
                <span className='line'></span>
                <div className='content'>
                    <div className='card'>
                        <img src={user1} alt='user1'/>
                        <p>It is not every day that you come across a passionate and trustworthy financial advisor. John Doe is true professional who does his work really well. Thanks John!</p>
                        <p><span>PT. IKAFOOD PUTRAMAS</span></p>
                        <p>1800 pax/7 hari</p>
                    </div>
                    <div className='card'>
                        <img src={user2} alt='user1'/>
                        <p>In just 2 very short meetings with John he managed to find the solution personally catered to my situation and expectations. Punctual, well informed and very reliable.</p>
                        <p><span>PT. DALIATEX</span></p>
                        <p>575 pax/6 hari</p>
                    </div>
                    <div className='card'>
                        <img src={user3} alt='user1'/>
                        <p>A very professional financial advisor, who is true to his word. John has demonstrated a high amount of integrity in the time I have known him, and he is fast to respond to my concerns.</p>
                        <p><span>PT. GABE CELLULAR</span></p>
                        <p>270 pax/7 hari</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
