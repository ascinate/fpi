import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'


//Image
import fone from "/f1.png"
import ftwo from "/f2.png"
import fthree from "/f3.png"
import ffour from "/f4.png"
import ffive from "/f5.png"


function Home() {
    return (
        <>
            <Navbar />
            <main>
                <section className='section-hero'>
                    <div className='wrapper'>
                        <div className='container-hero flex items-center gap-52 '>
                            <div>
                                <h1 className='hero-main-text'>Your go-to URL shortener and link-in-bio platform</h1>
                                <p className='sub-text mb-11'>Seamlessly manage and track all your links.Elevate your brand today!</p>
                                <button className='theme-color-btn' id=''>Get Started</button>
                                <button className='white-color-btn ' id=''>Try Demo</button>
                            </div>
                            <div className='hero-img'>
                                <img src={fone} alt="" className='fone' />
                                <img src={ftwo} alt="" className='ftwo' />
                                <img src={ffour} alt="" className='ffour' />
                                <img src={fthree} alt="" className='fthree' />
                                <img src={ffive} alt="" className='ffive' width={300} height={100}/>
                            </div>
                        </div>
                    </div>
                </section>

            </main>

        </>
    )
}

export default Home