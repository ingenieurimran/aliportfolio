import {Box, Container, Grid, Hidden, Typography} from '@material-ui/core'
import React from 'react'
import {useStyles} from '../../Styles/AboutStyles'
import Divider from '@mui/material/Divider'
import CardAbout from '../../CommonFolder/CardAbout'
import {cardMediaData} from '../../../dataJasonAbout'
import Images from '../../../assets/Images/body.png'
import {useStylesCommon} from '../../CommonFolder/CommonStyles'

function AboutComponent() {
  const classes = useStyles()
  const classesCommon = useStylesCommon()
  return (
    <Box className={classes.aboutSction} id="About">
      <Container>
        <Grid container spacing={1}>
          <Grid item sm={5}>
            <Box component={Hidden} xsDown>
              <img
                src={Images}
                alt="img"
                className={classesCommon.ImagesResponsive}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={7}>
            <Box className={classesCommon.decorator}>
              <Typography
                variant="span"
                className={classesCommon.decoratorText}
              >
                About Me
              </Typography>
            </Box>
            <Box>
              <Typography variant="h4" className={classesCommon.SectionTitle}>
                Hi There! I'm Imran Ali
              </Typography>
            </Box>
            <Box className={classesCommon.dividerLine}>
              <Divider
                sx={{
                  borderBottomWidth: 6,
                }}
              />
            </Box>
            <Box>
              <Typography
                variant="h5"
                component="h6"
                className={classesCommon.SectionDescription}
              >
                <span style={{color: '#66CC66'}}>Frantend Developer</span>,{' '}
                <span style={{color: '#FF9966'}}>UX/UI Architect</span>, and{' '}
                <span style={{color: '#66CC66'}}>Javascript Engineer</span>. I
                can Help Startups <span style={{color: '#66CC66'}}>Launch</span>{' '}
                And <span style={{color: '#66CC66'}}>Graw</span> Their Products
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="subtitle1"
                component="p"
                className={classes.AboutDescriptionSub}
              >
                I design and code beautifully simple things, and I love what I
                do!
              </Typography>
            </Box>
            <Grid container style={{marginTop: '2rem'}}>
              {cardMediaData.map((item, index) => (
                <CardAbout itemName={item} key={index} />
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default AboutComponent
