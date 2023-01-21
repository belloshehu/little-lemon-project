import React from 'react'
import logo from '../assets/Logo.svg'
import '../index.css'
import { Link } from 'react-router-dom'
import {FaBars} from 'react-icons/fa'
import Nav from './Nav'
import { useGlobalContext } from '../lib/context'


const Header = () => {
    const {isOpen, closeNav, openNav} = useGlobalContext()
    
    return (
        <header className='header'>
            <Link to='/'><img src={logo} alt='logo' className='logo-img' /></Link>
            <Nav />
            <FaBars className='fa-bars' onClick={openNav} />
        </header>
    )
}

export default Header