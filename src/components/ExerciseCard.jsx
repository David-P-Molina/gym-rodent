import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Stack, Typography } from '@mui/material'

const ExerciseCard = ({ exercise }) => {
  return (
    <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
      <Stack>
        <Typography variant="h6">
          Name: {exercise.name}
        </Typography>
        <img alt={exercise.name} src={exercise.gifUrl} />
        <Typography variant="body">
          Equipment:{exercise.equipment}
        </Typography>
      </Stack>
    </Link>
  )
}

export default ExerciseCard