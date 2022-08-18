import React from 'react'
import './Demo.css'

const Demo = () => {
    return (
        <div className='demo' id='demo'>
            <div className='container'>
                <div className='col-1'>
                    <p>Catering Harian tanpa langganan,</p>
                    {/* <p>One Philosophy</p> */}
                    <p>Visi dan Misi</p>
                    <p>Memberikan makanan yang sangat terjangkau kepada customer dengan kualitas bahan, rasa dan higienis yang tinggi. Membantu perekonomian masyarakat Indonesia, yang mana pasar makanan di Indonesia cukup besar pengaruhnya.</p>
                    <button className='button'>Kerjasama Homade</button>
                </div>
                <div className='col-2'>
                    <iframe width='570' height='320' src='https://www.youtube.com/embed/ChgbA8HXoEc' title='Youtube video player' frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                </div>
            </div>
        </div>
    )
}

export default Demo
