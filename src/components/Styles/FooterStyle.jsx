import {makeStyles} from '@material-ui/core'
import {Theme} from '../Theme'

export const useStylesFooter = makeStyles((theme) => ({
  footerContainer: {
    backgroundColor: Theme.colors.primary1,
    color: Theme.colors.base2,
    padding: theme.spacing(2),
    position: 'relative',
  },
  iconButton: {
    position: 'absolute',
    right: 5,
    top: -25,
    backgroundColor: Theme.colors.primary,
    color: Theme.colors.base2,
  },
  FooterSize: {
    fontSize: '1rem',
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.8rem',
    },
  },
  HartSize: {
    fontSize: '1.5rem',
    [theme.breakpoints.down('xs')]: {
      fontSize: '1rem',
    },
  },
}))
