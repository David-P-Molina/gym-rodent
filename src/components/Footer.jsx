import React from 'react'
import { Stack } from '@mui/material'

const Footer = () => {
  return (
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
  )
}

export default Footer