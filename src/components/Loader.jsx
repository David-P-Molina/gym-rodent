import React from 'react'
import { Stack } from '@mui/material'
import { InfinitySpin } from 'react-loader-spinner'

const Loader = () => {
  return (
    <Stack>
        <InfinitySpin />
    </Stack>
  )
}

export default Loader