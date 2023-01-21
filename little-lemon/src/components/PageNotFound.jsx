import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <div className='flex justify-center items-center flex-column'>
        <h1>Error! Page not found.</h1>
        <Link to='/' className='btn bg-yellow'>Home</Link>
    </div>
  )
}

export default PageNotFound