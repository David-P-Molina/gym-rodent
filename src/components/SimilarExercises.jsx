import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import HorizontalScrollBar from './HorizontalScrollBar'

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <Box>
      <Typography variant='h5'>
        Exercises that target the same muscle group
      </Typography>
      <Stack>
        {targetMuscleExercises.length && <HorizontalScrollBar data={targetMuscleExercises}/>}
      </Stack>
    </Box>
  )
}

export default SimilarExercises