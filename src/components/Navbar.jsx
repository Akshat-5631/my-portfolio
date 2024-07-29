import React from 'react'; 
import logo from "../assets/kevinRushLogo.png" ;
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
import {FaSquareXTwitter} from "react-icons/fa6";

 
const Navbar = () => {
  return (
    <nav className=' mb-20 flex items-center justify-between py-6'>
        {/* LOGO START */}
        <div className='flex flex-shrink-0 items-center'>
            <img className='mx-2 w-10' src={logo} alt='logo'></img>
        </div>
        {/* LOGO END */}

        {/* ICONS START */}
        <div className='m-8 flex items-center jutsify-center gap-4 text-2xl'>
            <FaLinkedin />
            <FaGithub />
            <FaInstagram />
            <FaSquareXTwitter />
        </div>
        {/* ICONS END */}
    </nav>
  )
}

export default Navbar