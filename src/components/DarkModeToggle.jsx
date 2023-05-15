import React, { useState, useEffect } from 'react'
import { Button } from '@mui/material'

const DarkModeToggle = () => {
    const [ isDarkMode, setIsDarkMode ] = useState('false');

  return (
    <Button>
        DarkModeToggle
    </Button>
  )
}

export default DarkModeToggle