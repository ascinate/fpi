import React from 'react';
import Navbar from '../components/Navbar';
import ione from "/fone.svg";
import ithree from "/f2.svg";
import ifour from "/f3.svg";
import isix from "/f4.svg";
import five from "/f5.svg";
import CustomCursor from '../components/CustomCursor';


function Home() {
    return (
        <>
            <CustomCursor />
            <Navbar />

            <main className='float-left w-full'>
                <section className='section-hero float-left w-full'>

                    <div className='container mx-auto py-4'>
                        <div className='container-hero relative'>
                            <div className='banner-tms01'>
                                <h1 className='hero-main-text'>Your go-to URL shortener and link-in-bio platform</h1>
                                <p className='sub-text mb-11'>Seamlessly manage and track all your links. Elevate your brand today!</p>
                                <button className='theme-color-btn brn-btn' id=''>Get Started</button>
                                <button className='white-color-btn brn-btn' id=''>Try Demo</button>
                            </div>

                            <div className='ithree'>
                                <img src={ithree} alt="b" />
                            </div>
                            <div className='ifour'>
                                <img src={ifour} alt="b" />
                            </div>
                            <div className='ione-face'>
                                <img src={ione} alt="g" />
                            </div>
                            <div className='isix'>
                                <img src={isix} alt="h" />
                            </div>
                                <div className='five'>

                            <img src={five} alt="" />
                                </div>



                        </div>
                    </div>
                </section>

            </main>

        </>
    )
}

export default Home;