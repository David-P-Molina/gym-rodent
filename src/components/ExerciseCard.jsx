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
            background: '#091B40', fontSize: '14px', 
            borderRadius: '10px', textTransform: 'capitalize'}}>
          {exercise.bodyPart}
        </Button>
        <Button 
          sx={{ 
            ml: '21px', color: '#FFF', 
            background: '#949AA6', fontSize: '14px', 
            borderRadius: '10px', textTransform: 'capitalize'}}>
          {exercise.target}
        </Button>
      </Stack>
      <Typography 
        ml='21px' textTransform='capitalize'
        color='#02060D' fontWeight='bold' mt='11px'>
        {exercise.name}
      </Typography>
      <Typography 
        color='#061426'variant="body" 
        textTransform='capitalize' ml='21px'>
        {exercise.equipment}
      </Typography>
    </Link>
  )
}

export default ExerciseCard