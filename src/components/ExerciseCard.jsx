import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Stack, Typography } from '@mui/material'

const ExerciseCard = ({ exercise }) => {
  return (
    <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
      <img alt={exercise.name} src={exercise.gifUrl} loading="lazy" />
      <Stack direction="row">
        <Button 
          sx={{ 
            ml: '21px', color: '#FFF', 
            background: '#FFA9A9', fontSize: '14px', 
            borderRadius: '20px', textTransform: 'capitalize'}}>
              
            </Button>
        <Typography variant="h6">
          Name: {exercise.name}
        </Typography>
        <Typography variant="body">
          Equipment:{exercise.equipment}
        </Typography>
      </Stack>
    </Link>
  )
}

export default ExerciseCard