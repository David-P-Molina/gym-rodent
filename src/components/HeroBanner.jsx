import React from 'react'
import { Box, Stack, Typography, Button } from '@mui/material'
import HeroBannerImage from '../assets/images/banner.jpg'

const HeroBanner = () => {
  return (
      <Box 
        sx={{ mt: {lg: '212px', xs: '70px'}, ml: { sm: '50px'}}} 
        position="relative" p='20px'>
        <Typography color="#023859" fontWeight="600" fontSize="26px">
          Heart Fitness
        </Typography>
        <Typography 
          fontWeight={700}
          sx={{ fontSize: { lg: '44px', xs: '40px'} }}
          mb='23px'
          mt='30px'>
            Sweat, Smile <br /> 
            & Repeat
        </Typography>
        <Typography fontSize='22px' lineHeight='35px' mb={4} fontFamily="Alegreya">
          Check out new exercises and keep your body working!
        </Typography>
        <Button variant="contained" color="error" href="#exercises" sx={{ backgroundColor: '#023859'}}>
          Explore Exercises
        </Button>
        <Typography
          fontWeight={600}
          color="#FF2625"
          sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none'} }} fontSize='200px'>
          Exercise
        </Typography>
        <img src={ HeroBannerImage } alt="Workout Banner" className="hero-banner-img"/>
      </Box>
  )
}

export default HeroBanner