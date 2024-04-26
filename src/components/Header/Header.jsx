import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header className='shadow-lg p-4 mb-4'>
      <Link to='/'>Home</Link>
    </header>
  )
}
