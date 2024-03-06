import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <nav>
        <h1 className='logo'><Link to="/">Search movie</Link> </h1>
    </nav>
  )
}
