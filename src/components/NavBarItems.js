import React from 'react'
import {FaBars, FaTimes} from "react-icons/fa"
import { useRef } from 'react';
import "../App.css"

function NavBarItems() {

    const navRef = useRef();

    const showNavBarItems = () => {
        navRef.current.classList.toggle("responsive_nav")
    }

  return (
    <header>
        <h1>P E T F L I X</h1>
        <nav>
            {/* links to navigation bar */}
            <a href="/#">HOME</a>
            <a href="/#">PETS</a>
            <a href="/#">ADOPT A PET</a>
            <a href="/#">PAWS</a>

            {/* closes nvigation bar in small screens*/}
            <button className='nav-btn nav-close-btn' onClick={showNavBarItems}>
                <FaTimes />
            </button>
        </nav>
        
        {/* button that opens navbar in small screens */}
        <button className='nav-btn' onClick={showNavBarItems}> 
            <FaBars />
        </button>
    </header>
  )
}

export default NavBarItems;