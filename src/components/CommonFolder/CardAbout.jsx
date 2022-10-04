import React from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import {Box} from '@mui/material'
import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack'
import {Theme} from '../Theme'

function CardAbout({itemName}) {
  return (
    <Grid item xs={12} sm={6}>
      <Box padding={1}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Stack direction="row" spacing={2}>
            <Avatar sx={{bgcolor: Theme.colors.primary}}>
              {itemName.logo}
            </Avatar>
          </Stack>
          <Typography variant="subtitle1" component="p" marginLeft={2}>
            {itemName.title}
            <Typography variant="caption" component="p">
              {itemName.parahG}
            </Typography>
          </Typography>
        </Box>
      </Box>
    </Grid>
  )
}

export default CardAbout
