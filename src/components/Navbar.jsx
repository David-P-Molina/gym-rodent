import React from 'react'
import { Link } from 'react-router-dom'
import { Stack } from '@mui/material'
import Logo from '../assets/images/Logo.png'
const Navbar = () => {
  return (
    <Stack direction="row">
      <Link to="/">
        <img 
          src={Logo} 
          alt="logo" 
          style={{ 
            width: '48px', height: '48px', margin: '0 20px'
        }}/>
      </Link>
      <Stack>
        <Link 
          to="/" 
          style={{
            textDecoration: 'none', 
            color: "#40040F", 
            borderBottom: '3px solid #F2D888',
          }}>
              Home
        </Link>
        <a 
          href="#exercises" 
          style={{
            textDecoration: 'none', 
            color: "#40040F", 
          }}>
          Exercise
        </a>
      </Stack>
    </Stack>
  )
}

export default Navbar