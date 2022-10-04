import React from 'react'
import {Typography} from '@material-ui/core'
import {Box, Container, Grid} from '@mui/material'
import {Theme} from '../../Theme'
import Divider from '@mui/material/Divider'
import {cardMediaDataPort} from '../../../dataJasonPortFolio'
import CardPortfolio from '../../CommonFolder/CardPortfolio'
import {useStylesCommon} from '../../CommonFolder/CommonStyles'
import {useStylesPortfolio} from '../../Styles/PortfolioStyle'

function AboutComponent() {
  const classesCommon = useStylesCommon()
  const classesPortfolio = useStylesPortfolio()
  return (
    <Box className={classesPortfolio.sectionProtfolio} id="Portfolio">
      <Grid
        container
        style={{
          displa: 'flex',
          justifyContent: 'center',
          alignContent: 'center',
        }}
      >
        <Grid item xs={12} sm={12}>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Box className={classesCommon.decorator}>
              <Typography
                variant="span"
                className={classesCommon.decoratorText}
              >
                PortFolio
              </Typography>
            </Box>
          </Box>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Box>
              <Typography variant="h4" className={classesCommon.SectionTitle}>
                Let's See My Work
              </Typography>
            </Box>
          </Box>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Divider
              sx={{
                marginTop: '1.5rem',
                marginBottom: '1.5rem',
                borderBottomWidth: 6,
                width: '4.5rem',
                backgroundColor: Theme.colors.primary,
              }}
            />
          </Box>
        </Grid>
      </Grid>
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          {cardMediaDataPort.map((item, index) => (
            <Grid item xs={6} sm={6} lg={4}>
              <CardPortfolio itemName={item} key={index} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default AboutComponent
