import React, { useState, useEffect } from 'react'
import { Box, Button, Stack, TextField, Typography } from '@mui/material'

const SearchExercises = () => {
  const handleOnChange = (event) => {
    // create state for event.target.value 
  }
  return (
    <Stack alignItems="center" mt="35px" justifyContent="center" p="20px">
      <Typography fontWeight={700} 
        sx={{ fontSize: { lg: '44px', xs: '30px'}}}
        mb="50px" textAlign="center" >
        New Exercises to check out
      </Typography>
      <TextField
        sx={{
          input: {
            fontWeight: '700',
            border: 'none',
            borderRadius: '4px'
          },
          width: { lg: '1170px', xs: '350px'},
          backgroundColor: '#FFF', borderRadius: '40px'
        }}
        height="76px"
        value=""
        placeholder="Search Exercises..."
        type="text"
        onChange={handleOnChange}/>
    </Stack>
  )
}

export default SearchExercises