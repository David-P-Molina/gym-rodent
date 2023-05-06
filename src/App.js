import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Box } from '@mui/material'
//import Navbar, Home, ExerciseDetail Components

const App = () => {
  return (
    <Box width="400px">
        "Navbar Component"
        <Routes>
            <Route path="/" element="{<Home />} Component" />
            <Route path="/exercise/:id" element="{<ExerciseDetail /> Component}" />
        </Routes>
    </Box>
  )
}

export default App