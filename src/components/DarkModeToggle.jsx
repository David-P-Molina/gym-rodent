import React, { useState, useEffect } from 'react'
import { Button } from '@mui/material'

const DarkModeToggle = () => {
    const [ isDarkMode, setIsDarkMode ] = useState(false);
    const handleDarkModeToggle = () => {
        setIsDarkMode(!isDarkMode)
    }
    useEffect(() => {
        const cssFileName = isDarkMode ? 'dark.css' : 'light.css';
        const linkElement = document.getElementById('theme-style');
        //Not switching colors on click
        linkElement.href = cssFileName;
      }, [isDarkMode]);
  return (
    <Button onClick={handleDarkModeToggle}>
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
    </Button>
  )
}

export default DarkModeToggle