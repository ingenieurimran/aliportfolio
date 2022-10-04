import * as React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import {Grid} from '@mui/material'

export default function MultilineTextFields() {
  const [value, setValue] = React.useState('Controlled')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  return (
    <Box sx={{}}>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': {m: 1, width: '25ch', display: 'flex'},
        }}
        noValidate
        autoComplete="off"
      >
        <Grid
          spacing={3}
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <TextField
            id="outlined-multiline-flexible"
            label="Multiline"
            multiline
            maxRows={4}
            value={value}
            onChange={handleChange}
          />
          <TextField
            id="outlined-textarea"
            label="Multiline Placeholder"
            placeholder="Placeholder"
            multiline
          />
          <TextField
            id="outlined-multiline-static"
            label="Multiline"
            multiline
            rows={4}
            defaultValue="Default Value"
          />
        </Grid>
      </Box>
    </Box>
  )
}
