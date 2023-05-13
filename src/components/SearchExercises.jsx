import React, { useState, useEffect } from 'react'
import { Box, Button, Stack, TextField, Typography } from '@mui/material'

const SearchExercises = () => {
  return (
    <Stack alignItems="center" mt="35px" justifyContent="center" p="20px">
      <Typography fontWeight={700} 
        sx={{ fontSize: { lg: '44px', xs: '30px'}}}
        mb="50px" textAlign="center" >
        New Exercises to check out
      </Typography>
      <TextField
        height="76px"
        value=""
        onChange={handleOnChange}/>
    </Stack>
  )
}

export default SearchExercises