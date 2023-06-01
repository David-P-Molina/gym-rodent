import React from 'react'
import { Stack, Box, Typography } from '@mui/material'

const ExerciseVideos = ({ videosList, name }) => {
  return (
    <Box sx={{ marginTop: {lg: '200px', xs: '20px'}}} p='20px'>
      <Typography variant="h4" mb='33px'>
        Watch <span style={{ color: '#012840', textTransform: 'capitalize'}} >{name}</span> exercise videos
      </Typography>
    </Box>
  )
}

export default ExerciseVideos