import React from 'react'
import { Stack, Box, Typography } from '@mui/material'

const ExerciseVideos = ({ videosList, name }) => {
  if(!videosList.length) return 'Loading...'
  
  return (
    <Box sx={{ marginTop: {lg: '60px', xs: '20px'}}} p='20px'>
      <Typography variant="h4" mb='33px'>
        Watch <span style={{ color: '#012840', textTransform: 'capitalize'}} >{name}</span> exercise videos
      </Typography>
      <Stack justifyContent='flex-start' flexWrap='wrap' alignItems='center'
        sx={{
          flexDirection: { lg: 'row' },
          gap: { lg: '100px', xs: '0px'}
        }}>
          {videosList?.slice(1,4).map((video, index) => (
            <a
              key={index}
              className='exercise-video'
              href={`https://www.youtube.com/watch?v=${video.video.videoId}`}
              target="_blank"
              rel='noreferrer'>
                <img src={video.video.thumbnails[0].url} alt={video.video.title}/>
            <Typography>
              {video.video.title}
            </Typography>
            <Typography>
              {video.video.channelName}
            </Typography>
            </a>
            ))}
      </Stack>
    </Box>
  )
}

export default ExerciseVideos