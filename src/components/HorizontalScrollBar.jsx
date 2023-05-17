import React from 'react'
import { Stack, Box } from '@mui/material'
import PartDetail from './PartDetail.jsx'

const HorizontalScrollBar = ({ data }) => {
  return (
    <Stack>
        {data.map((item) => {
            <Box 
                key={item.id || item}
                itemId={item.id || item}
                title={item.id || item}
                m="0 40px">
                   <PartDetail part={item} /> 
            </Box>
        })}
    </Sta>
  )
}

export default HorizontalScrollBar