import React from 'react'; 
import logo from "../assets/portfolioLogo.png";
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
import {FaSquareXTwitter} from "react-icons/fa6";
import { BrowserRouter as  Link } from 'react-router-dom';



 
const Navbar = () => {
  return (
    <nav className=' mb-20 flex items-center justify-between py-6'>
        {/* LOGO START */}
        <div className='flex flex-shrink-0 items-center'>
            <img className='mx-2 w-24 h-22' src={logo} alt='logo' ></img>
        </div>
        {/* LOGO END */}

        {/* ICONS START */}
        <div className='m-8 flex items-center jutsify-center gap-4 text-2xl'>
             <a href="https://www.linkedin.com/in/akshat-maliyan-a40983312/?jobid=1234" target="_blank"> <FaLinkedin/></a>
            <a href="https://github.com/Akshat-5631" target="_blank"><FaGithub /></a>
            <FaInstagram />
            <FaSquareXTwitter />
        </div>
        {/* ICONS END */}
    </nav>
  )
}

export default Navbar