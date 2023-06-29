import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

import Logo from '../assets/images/Logo-1.png'

const Footer = () => {
  return (
    <Box mt='80x' bgcolor='#f2f3f4' height='100px' p='10px'>
      <Stack 
        direction='row' 
        justifyContent='space-around' 
        alignItems='flex-end'
        space={0}>
        Footer
        <p>
          <a href='https://pngtree.com/so/gym'>gym png from pngtree.com/</a>
        </p>
        <span>
          <a href="https://unsplash.com/photos/HCeifKAhHNE?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink">
            Austin Wilcox's Image from Unsplash.com
          </a>
        </span>
      </Stack>
    </Box>
  )
}

export default Footer