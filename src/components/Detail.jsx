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
        {extraDetail.map((item) => (
          <Stack key={item.name} direction='row' gap='24px' alignItems='center'>
            <Button sx={{ background: '#04D9D9', borderRadius: '100px', width: '100px', height: '100px'}}>
              <img src={item.icon} alt={item.name} sx={{width: '50px', height: '50px'}} />
            </Button>
            <Typography textTransform='capitalize'>
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  )
}

export default Detail