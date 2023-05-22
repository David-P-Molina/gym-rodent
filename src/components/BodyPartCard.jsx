import React from 'react'
import { Stack, Typography } from '@mui/material'
import BodyPartIcon from '../assets/icons/gym.png'

const BodyPartCard = ({ item, bodyPart, setBodyPart }) => {
  const handleOnClick = () => {
    setBodyPart(item)
    window.scrollTo({ top: 1800, behavior: 'smooth '})
  }
  return (
    <Stack 
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      onClick={handleOnClick}
      sx={{
        borderTop: bodyPart === item ? '4px solid #FF2625' : '', 
        background: '#fff', 
        borderBottomLeftRadius: '20px', 
        width: '270px', 
        height: '282px', 
        cursor: 'pointer', 
        gap: '47px'
      }}>
      <img 
        src={BodyPartIcon} 
        alt='icon' 
        style={{ 
          width: '40px', 
          height: '40px' 
        }}
      />
      <Typography 
        fontSize="24px" 
        fontWeight="bold" 
        color="#3A1212" 
        textTransform="capitalize">
        {item}
      </Typography>
    </Stack>
  )
}

export default BodyPartCard