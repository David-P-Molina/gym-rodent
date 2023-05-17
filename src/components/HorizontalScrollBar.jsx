import React from 'react'
import { Stack, Box } from '@mui/material'
import PartDetail from './PartDetail'

const HorizontalScrollBar = ({ data }) => {
  return (
    <Stack>
        {data.map((item) => (
            <Box 
                key={item.id || item}
                itemID={item.id || item}
                title={item.id || item}
                m="0 40px">
                   <PartDetail item={item} /> 
            </Box>
        ))}
    </Stack>
  )
}

export default HorizontalScrollBar