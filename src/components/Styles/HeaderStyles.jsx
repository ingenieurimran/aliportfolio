import {makeStyles} from '@material-ui/core'
import {Theme} from '../Theme'
// import Images from '../../../public/Images/c.png'
import Images from '../../assets/Images/a.jpg'

export const useStyles = makeStyles((theme) => ({
  HeaderWraper: {
    width: '100%',
    minHeight: '90vh',
    height: 'auto',
    background: `linear-gradient(to bottom right,#04303140, #00606473),url(${Images})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeate',
    color: Theme.colors.base2,
    fontFamily: 'roboto',
  },
  HeaderReposivie: {
    paddingTop: '15rem',
    paddingLeft: '1rem',
    [theme.breakpoints.down('xs')]: {
      marginTop: '-5rem',
    },
  },
  HeaderTitle: {
    fontSize: '3rem',
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.8rem',
    },
  },
  HeaderDescription: {
    fontSize: '2rem',
    [theme.breakpoints.down('xs')]: {
      fontSize: '1rem',
      margin: theme.spacing(2, 0),
    },
  },
  navbar: {
    backgroundColor: Theme.colors.base1,
    color: Theme.colors.base2,
  },
  ToolBar: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-between',
  },
  navlinks: {
    color: Theme.colors.base2,
  },
  //drewer style
  drawer: {
    width: '250px',
    height: '100vh',
  },
  drawerContainer: {
    width: '250px',
    height: '100vh',
    backgroundColor: Theme.colors.primary1,
  },
  listItem: {
    color: Theme.colors.base2,
  },
}))
