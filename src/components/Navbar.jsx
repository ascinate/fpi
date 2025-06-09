import React, { useState } from 'react'

//Image
import logo from "/logo.png"
import { AlignJustify, Search } from 'lucide-react'

function Navbar() {



    return (
        <>
            <header>
                <nav className=' shadow-sm'>
                    <div className='wrapper'>
                        <div className='navBar flex items-center justify-between'>
                            <img src={logo} alt="" height={100} width={100}/>
                            <ul className='navLink  flex items-center justify-between'>
                                <li>Home</li>
                                <li>About</li>
                                <li>Pages</li>
                                <li>Pricing</li>
                                <li>Blog</li>
                                <li>Contact</li>
                            </ul>
                            <div className='m-nav-btn-hide'>
                      
                                <button className='secondary-theme-btn'>Sign up</button>
        
                            </div>




                        </div>

                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar