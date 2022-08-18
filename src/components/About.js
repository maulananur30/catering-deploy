import React from 'react'
import john from './images/john-doe.png'
import './About.css'

const About = () => {
    return (
        <div className='about' id='about'>
            <div className='container'>
                <img src={john} alt='john' />
                <div className='col-2'>
                    <h2>Catering Mami</h2>
                    <span className='line'></span>
                    <p>Selamat Datang di website catering di bandung yang terkenal harga murah dan Enak Indonesian Food. Nikmati Semua Masakan dengan Cita Rasa Tinggi, Lezat dan Bergizi Hanya di Catering Mami Bandung.</p>
                    <p>Ada Puluhan Hingga Ratusan Nama Catering di Kota Bandung yang bisa anda Cari tapi hanya 1 yang terbaik.</p>
                    <button className='button'>Explore More</button>
                </div>
            </div>
        </div>
    )
}

export default About
