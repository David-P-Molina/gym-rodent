import React from 'react'
import { Stack, Box } from '@mui/material'
import BodyPartDetail from './BodyPartDetail'

const HorizontalScrollBar = ({ data, bodyPart, setBodyPart }) => {
  return (
    <Stack>
        {data.map((item) => (
            <Box 
                key={item.id || item}
                itemID={item.id || item}
                title={item.id || item}
                m="0 40px">
                   <BodyPartDetail item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} /> 
            </Box>
        ))}
    </Stack>
  )
}

export default HorizontalScrollBar