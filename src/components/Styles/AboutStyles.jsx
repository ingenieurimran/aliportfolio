import {makeStyles} from '@material-ui/core'
import {Theme} from '../Theme'

export const useStyles = makeStyles((theme) => ({
  aboutSction: {
    backgroundColor: Theme.colors.base1,
    color: Theme.colors.base2,
    padding: theme.spacing(10, 0, 8, 0),
    minHeight: '70vh',
    height: 'auto',
  },
  AboutDescriptionSub: {
    fontSize: '1rem',
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.9rem',
    },
  },
  // bodySection
  bodySction: {
    backgroundColor: Theme.colors.primary1,
    color: Theme.colors.base2,
    padding: theme.spacing(10, 0, 8, 0),
    minHeight: '70vh',
    height: 'auto',
    paddingLeft: '20px',
  },
}))
