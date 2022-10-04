import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className='nav-center'>
            <Link to="/">
                <h1 className='logo'>L o g o</h1>
            </Link>
            <ul className='nav-links'>
                <li>
                    <Link to="/">

                    </Link>
                </li>
                <li>
                    <Link to="/about">
                        About
                    </Link>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar