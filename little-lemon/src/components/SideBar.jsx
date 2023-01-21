import React from 'react'
import logo from '../assets/Logo.svg'
import '../index.css'
import { Link } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'
import { useGlobalContext } from '../lib/context'


const SideBar = () => {
    const {closeNav} = useGlobalContext()
  return (
    <aside className='aside'>
        <FaTimes className='fa-times' onClick={closeNav}/>
        <img src={logo} alt='logo' className='logo' />
        <nav className='nav'>
            <ul className='nav-list'>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/menu">Menu</Link>
                </li>
                <li>
                    <Link to="/reservations">Reservations</Link>
                </li>
                <li>
                    <Link to="/orderonline">Order online</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
            </ul>
        </nav>
    </aside>
  )
}

export default SideBar