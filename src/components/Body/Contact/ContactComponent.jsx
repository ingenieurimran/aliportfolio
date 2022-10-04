import React from 'react'
import {Container, Grid, Hidden, Typography} from '@material-ui/core'
import {useStyles} from '../../Styles/AboutStyles'
import Divider from '@mui/material/Divider'
import Images from '../../../assets/Images/contact.png'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import {Button} from '@mui/material'
import {useStylesCommon} from '../../CommonFolder/CommonStyles'

function ContactComponent() {
  const classes = useStyles()
  const classesCommon = useStylesCommon()

  const [value, setValue] = React.useState()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  return (
    <Box className={classes.aboutSction} sx={{display: 'flex'}} id="Contact">
      <Container>
        <Grid container spacing={1}>
          <Grid item sm={5}>
            <Box component={Hidden} xsDown>
              <img
                src={Images}
                alt="img"
                style={{width: '100%', height: 'auto'}}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={7}>
            <Box className={classesCommon.decorator}>
              <Typography
                variant="span"
                className={classesCommon.decoratorText}
              >
                Contact Me
              </Typography>
            </Box>
            <Box>
              <Typography variant="h4" className={classesCommon.SectionTitle}>
                Seems To be Interesting
              </Typography>
            </Box>
            <Box className={classesCommon.dividerLine}>
              <Divider
                sx={{
                  borderBottomWidth: 6,
                }}
              />
            </Box>
            <Box sx={{paddingBottom: '1rem'}}>
              <Typography
                variant="h5"
                component="h6"
                className={classesCommon.SectionDescription}
              >
                Got my Portfolio seen , than feel free to contact me for your
                future projects
              </Typography>
            </Box>
            {/* Form */}
            <Box
              className={classesCommon.FormResponsive}
              component="form"
              noValidate
              autoComplete="off"
            >
              <Grid
                spacing={1}
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                <Grid>
                  <TextField
                    inputProps={{
                      style: {
                        fontSize: '20px',
                        fontFamily: 'roboto',
                        color: 'white',
                      },
                    }}
                    id="outlined-multiline-flexible"
                    label="Name"
                    multiline
                    maxRows={4}
                    value={value}
                    onChange={handleChange}
                  />
                  <TextField
                    inputProps={{
                      style: {
                        fontSize: '20px',
                        fontFamily: 'roboto',
                        color: 'white',
                      },
                    }}
                    id="outlined-textarea"
                    label="Email"
                    // placeholder="Email"
                    multiline
                  />
                  <TextField
                    inputProps={{
                      style: {
                        fontSize: '20px',
                        fontFamily: 'roboto',
                        color: 'white',
                      },
                    }}
                    id="outlined-multiline-static"
                    label="Messages"
                    multiline
                    rows={4}
                    // defaultValue="Default Value"
                  />
                  <Box>
                    <Button
                      style={{
                        boxShadow: 'red',
                        borderRadius: '50px',
                        backgroundColor: '#0097a7',
                      }}
                      variant="contained"
                    >
                      SEND
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default ContactComponent
