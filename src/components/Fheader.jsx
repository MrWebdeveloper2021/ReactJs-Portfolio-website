import React, { useState } from 'react'
import logo from '../assets/pf.png'
import { GiHamburgerMenu, FaTimes } from 'react-icons/all';
import { Link } from 'react-scroll';


const Fheader = () => {
    const [navbar, setNavbar] = useState(false)
    const handleClick = () => setNavbar(!navbar);
    return (
        <>
            <header className="text-white body-font fixed w-full z-50 bg-gray-800">
                <div className="container mx-auto flex flex-wrap p-5  md:flex-row items-center justify-between">
                <Link to='home' smooth={true} duration={500}>
                    <img src={logo} style={{ width: "150px" }} alt="" />
                </Link>

                    <nav className="hidden md:flex font-bold text-back text-white">
                        <Link to='home' smooth={true} duration={500}>
                            Home
                        </Link>
                        <Link to='about' smooth={true} duration={500}>
                            About
                        </Link>
                        <Link to='experience' smooth={true} duration={500}>
                            Experience
                        </Link>
                        <Link to='work' smooth={true} duration={500}>
                            Work
                        </Link>
                        <Link to='contact' smooth={true} duration={500}>
                            Contact
                        </Link>
                    </nav>
                    {<div onClick={() => setNavbar(!navbar)} className="humbarge md:hidden z-10 text-orange-500 text-2xl">
                        {!navbar ? <GiHamburgerMenu /> : <FaTimes />}
                    </div>}
                    <div className={!navbar ? "hidden" : "mobile_icons  absolute top-0 left-0 flex justify-center items-center flex-col w-full h-screen bg-slate-600 text-white text-5xl"}>
                        <Link onClick={handleClick} className='py-6' to='home' smooth={true} duration={500} >Home</Link>
                        <Link onClick={handleClick} className='py-6' to='about' smooth={true} duration={500} >About</Link>
                        <Link onClick={handleClick} className='py-6' to='experience' smooth={true} duration={500} >experience</Link>
                        <Link onClick={handleClick} className='py-6' to='work' smooth={true} duration={500} >work</Link>
                        <Link onClick={handleClick} className='py-6' to='contact' smooth={true} duration={500} >Contact us</Link>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Fheader