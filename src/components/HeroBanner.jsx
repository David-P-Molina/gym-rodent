import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

const HeroBanner = () => {
  return (
    <Box sx={{
      mt: {lg: '212px', xs: '70px'},
      ml: { sm: '50px'}
    }} position="relative" p='20px'
    >
      <Typography color="#023859" fontWeight="600" fontSize="26px">
        Heart Fitness
      </Typography>
      <Typography 
        fontWeight={700}
        sx={{ fontSize: { 
          lg: '44px', 
          xs: '40px'}
        }}>
        Sweat, Smile <br /> & Repeat
      </Typography>
      <Typography 
        fontSize='22px' 
        lineHeight='22px'>
        Check out new exercises and keep your body working!
      </Typography>
    </Box>
  )
}

export default HeroBanner