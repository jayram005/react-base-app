import React, { PureComponent } from 'react'
import Fade from '@mui/material/Fade'
import { Link } from 'react-router-dom'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'

export default function Error404Page() {
  
    return (
      <Stack className="flex flex-col flex-1 items-center justify-center p-16">
        <Box className="max-w-512 text-center mt-60">
          <Fade in={true} timeout={100}>
            <Typography
              variant="h2"
              color="inherit"
              className="font-medium mb-16"
            >
              Page not found
            </Typography>
          </Fade>

          <Fade in={true} timeout={100}>
            <Typography variant="h5" color="textSecondary" sx={{ marginBottom: '1.6rem' }} className="mb-16">
              Sorry, but the page your are looking for was not found.
            </Typography>
          </Fade>

          <Link className="font-medium" to="/">
            Go back to home
          </Link>
        </Box>
      </Stack>
    )
}