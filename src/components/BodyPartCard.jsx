import React from 'react'
import { Stack, Typography } from '@mui/material'
import BodyPartIcon from '../assets/icons/gym.png'

const BodyPartCard = ({ item, bodyPart, setBodyPart }) => {
  return (
    <Stack 
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={
        bodyPart === item ? {
          borderTop: '4px solid #FF2625', 
          background: '#fff', 
          borderBottomLeftRadius: '20px', 
          width: '270px', 
          height: '282px', 
          cursor: 'pointer', 
          gap: '47px' }  : {}
      }>
      <img src={BodyPartIcon} alt='icon' styles={{ width: '40px', height: '40px' }}/>
      <Typography>
      </Typography>
    </Stack>
  )
}

export default BodyPartCard