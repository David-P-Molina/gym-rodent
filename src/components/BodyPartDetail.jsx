import React from 'react'
import { Stack, Typography } from '@mui/material'
import BodyPartIcon from '../assets/icons/gym.png'

const BodyPartDetail = ({ item, bodyPart, setBodyPart }) => {
  return (
    <Stack 
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card">
      <img src={BodyPartIcon} alt='icon' styles={{ width: '40px', height: '40px' }}/>
    </Stack>
  )
}

export default BodyPartDetail