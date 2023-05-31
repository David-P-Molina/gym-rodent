import React from 'react'
import { Typography, Stack, Button } from '@mui/material'
import BodyPartImage from '../assets/icons/body-part.png'
import TargetImage from '../assets/icons/target.png'
import EquipmentImage from '../assets/icons/equipment.png'

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail

  const extraDetail = [
    { 
      icon: BodyPartImage,
      name: bodyPart
    },
    { 
      icon: TargetImage,
      name: target
    },
    { 
      icon: EquipmentImage,
      name: equipment
    },
  ]
  return (
    <Stack
      gap='60px'
      sx={{
        flexDirection: { lg: 'row'},
        p: '20px',
        alignItems: 'center'
      }}>
      <img 
        src={ gifUrl } alt={ name } 
        loading='lazy' className='detail-image' />
      <Stack sx={{ gap: { lg: '35px', xs: '20px'}}}>
        <Typography variant='h4' fontWeight='bold'>
          {name}
        </Typography>
        <Typography variant='h6'>
          Exercises keep you strong. The {name} exercise is one of the best at 
          targeting your {bodyPart}. it will help you improve your mood & energy
        </Typography>
      </Stack>
    </Stack>
  )
}

export default Detail