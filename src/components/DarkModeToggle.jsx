import React, { useState, useEffect } from 'react'
import { Button } from '@mui/material'

const DarkModeToggle = () => {
    const [ isDarkMode, setIsDarkMode ] = useState(false);
    const handleDarkModeToggle = () => {
        setIsDarkMode(!isDarkMode)
    }
    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add("dark-mode")
        } else {
            document.body.classList.remove("dark-mode")
        }
      }, [isDarkMode]);
  return (
    <Button 
        onClick={handleDarkModeToggle} 
        variant="contained" 
        color="error" 
        sx={{ backgroundColor: isDarkMode ? '#949AA6' : '#023859'}}>
        {isDarkMode ? 'Enable Light Mode' : 'Enable Dark Mode'}
    </Button>
  )
}

export default DarkModeToggle