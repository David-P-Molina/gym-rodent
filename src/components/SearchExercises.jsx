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
        New Exercises to Check Out
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: {
              fontWeight: '700',
              border: 'none',
              borderRadius: '4px'
            },
            width: { lg: '800px', xs: '350px'},
            backgroundColor: '#FFF', borderRadius: '40px'
          }}
          height="76px"
          value=""
          placeholder="Search Exercises..."
          type="text"
          onChange={handleOnChange}/>
          <Button 
            className="search-btn"
            sx={{
              bgcolor: '#023859',
              color: '#FFF',
              textTransform: 'none',
              width: { lg: '175px', xs: '80px'},
              fontSize: { lg: '20px', xs: '14px'},
              height: '56px',
              position: 'absolute'
            }}>
            Search
          </Button>
        </Box>
    </Stack>
  )
}

export default SearchExercises