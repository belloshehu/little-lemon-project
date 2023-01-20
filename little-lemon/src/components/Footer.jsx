import React from 'react'
import logo from '../assets/logo.png'


const Footer = () => {
  return (
    <footer className='footer'>
        <img src={logo} className='logo-img'/>
        <nav className='nav'>
            <ul className=''>
                <li>Dormant navigation</li>
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
        <nav className='nav'>
            <ul className=''>
                <li>Contacts</li>
                <li>
                    <a href="#">Address</a>
                </li>
                <li>
                    <a href="#">Phone number</a>
                </li>
                <li>
                    <a href="#">Email</a>
                </li>
            </ul>
        </nav>
        <nav className='nav'>
            <ul className=''>
                <li>Social links</li>
                <li>
                    <a href="#">YouTube</a>
                </li>
                <li>
                    <a href="#">linkedIn</a>
                </li>
                <li>
                    <a href="#">Twitter</a>
                </li>
            </ul>
        </nav>
    </footer>
  )
}

export default Footer