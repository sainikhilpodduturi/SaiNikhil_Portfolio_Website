import React, { useState } from 'react'
import { Link } from 'react-scroll'
import '../styles/navbar.css'
import menuIcon from '../assets/menuIcon.png'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
     <nav className='navbar'>
        <div className='navbar-menu'>
            <Link to='intro' activeClass='active' spy={true} offset={-80} duration={700} smooth={true} className='navbar-menu-item'>Home</Link>
            <Link to='experience' activeClass='active' spy={true} offset={-80} duration={700} smooth={true} className='navbar-menu-item'>Experience</Link>
            <Link to='projects' activeClass='active' spy={true} offset={-80} duration={700} smooth={true} className='navbar-menu-item'>Projects</Link>
            <Link to='skills' activeClass='active' spy={true} offset={-80} duration={700} smooth={true} className='navbar-menu-item'>Skills</Link>
            <Link to='education' activeClass='active' spy={true} offset={-80} duration={700} smooth={true} className='navbar-menu-item'>Education</Link>
        </div>
        <button onClick={()=>{
          document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
        }} className='navbar-btn'>Contact Me</button>

        <img src={menuIcon} alt="menuIcon" className='menuIcon' onClick={()=>{setShowMenu(!showMenu)}}/>
        
        <div className='mobile-navbar-menu' style={{display: showMenu?'flex':'none'}}>
            <Link to='intro' activeClass='active' spy={true} offset={-80} duration={700} smooth={true} className='mobile-menu-item' onClick={()=>{setShowMenu(false)}}>Home</Link>
            <Link to='experience' activeClass='active' spy={true} offset={-80} duration={700} smooth={true} className='mobile-menu-item' onClick={()=>{setShowMenu(false)}}>Experience</Link>
            <Link to='projects' activeClass='active' spy={true} offset={-80} duration={700} smooth={true} className='mobile-menu-item' onClick={()=>{setShowMenu(false)}}>Projects</Link>
            <Link to='education' activeClass='active' spy={true} offset={-80} duration={700} smooth={true} className='mobile-menu-item' onClick={()=>{setShowMenu(false)}}>Education</Link>
            <Link to='skills' activeClass='active' spy={true} offset={-80} duration={700} smooth={true} className='mobile-menu-item' onClick={()=>{setShowMenu(false)}}>Skills</Link>
        </div>

     </nav>
    </>
  )
}

export default Navbar
