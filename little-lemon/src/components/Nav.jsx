import React from 'react'
import logo from '../assets/Logo.svg'
import '../index.css'


const Nav = () => {
  return (
    <nav className='nav'>
        <ul className='nav-list'>
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/about">About</a>
            </li>
            <li>
                <a href="/menu">Menu</a>
            </li>
            <li>
                <a href="/reservations">Reservations</a>
            </li>
            <li>
                <a href="/orderonline">Order online</a>
            </li>
            <li>
                <a href="/login">Login</a>
            </li>
        </ul>
    </nav>
  )
}

export default Nav