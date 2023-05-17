import React from 'react'
import { Stack, Box } from '@mui/material'
import BodyPartDetail from './BodyPartDetail'

const HorizontalScrollBar = ({ data }) => {
  return (
    <Stack>
        {data.map((item) => (
            <Box 
                key={item.id || item}
                itemID={item.id || item}
                title={item.id || item}
                m="0 40px">
                   <BodyPartDetail item={item} /> 
            </Box>
        ))}
    </Stack>
  )
}

export default HorizontalScrollBar