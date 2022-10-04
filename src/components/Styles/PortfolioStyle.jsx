import {makeStyles} from '@material-ui/core'
import {Theme} from '../Theme'

export const useStylesPortfolio = makeStyles((theme) => ({
  bodySction: {
    backgroundColor: Theme.colors.primary1,
    color: Theme.colors.base2,
    padding: theme.spacing(10, 0, 8, 0),
    minHeight: '70vh',
    height: 'auto',
    paddingLeft: '20px',
  },
  sectionProtfolio: {
    backgroundColor: Theme.colors.primary1,
    padding: theme.spacing(10, 0, 8, 0),
    color: 'white',
  },
}))
