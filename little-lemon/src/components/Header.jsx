import React from 'react'
import logo from '../assets/Logo.svg'
import '../index.css'

const Header = ({children}) => {
  return (
    <header className='header'>
        <img src={logo} alt='logo' className='logo-img' />
        {children}
    </header>
  )
}

export default Header