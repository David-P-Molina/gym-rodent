import React, { useState, useEffect } from 'react'
import { Button } from '@mui/material'

const DarkModeToggle = () => {
    const [ isDarkMode, setIsDarkMode ] = useState(false);
    const handleDarkModeToggle = () => {
        setIsDarkMode(!isDarkMode)
    }
  return (
    <Button onClick={handleDarkModeToggle}>
        DarkModeToggle
    </Button>
  )
}

export default DarkModeToggle