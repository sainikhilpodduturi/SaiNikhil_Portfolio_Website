import React from 'react'
import { Link } from 'react-scroll'
import '../styles/navbar.css'

const Navbar = () => {
  return (
    <>
     <nav className='navbar'>
        <div className='navbar-menu'>
            <Link className='navbar-menu-item'>Home</Link>
            <Link className='navbar-menu-item'>Experience</Link>
            <Link className='navbar-menu-item'>Projects</Link>
            <Link className='navbar-menu-item'>Education</Link>
            <Link className='navbar-menu-item'>Skills</Link>
        </div>
        <button className='navbar-btn'>Contact Me</button>
     </nav>
    </>
  )
}

export default Navbar
