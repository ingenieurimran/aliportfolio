import {makeStyles} from '@material-ui/core'
import {Theme} from '../Theme'

export const useStylesCommon = makeStyles((theme) => ({
  //   decorator.
  decorator: {
    display: 'flex',
    fontWeight: 'bolder',
    fontFamily: 'roboto',
    position: 'relative',
    marginTop: '20px',
    '&:before': {
      width: '45px',
      height: '45px',
      backgroundColor: Theme.colors.primary,
      content: '" "',
      borderRadius: '50%',
    },
  },
  decoratorText: {
    fontSize: '1rem',
    lineHeight: '45px',
    position: 'absolute',
    left: '20px',
    color: Theme.colors.base2,
    [theme.breakpoints.down('xs')]: {
      fontSize: '1rem',
    },
  },
  arrow: {
    lineHeight: '45px',
    position: 'absolute',
    left: '11rem',
  },
  //   Title after section 2
  SectionTitle: {
    paddingTop: '1rem',
    fontSize: '2.5rem',
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.8rem',
      paddingTop: '1.5rem',
    },
  },
  SectionDescription: {
    paddingTop: '1rem',
    paddingBottom: '2rem',
    fontSize: '1.5rem',
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.2rem',
      paddingTop: '1rem',
      paddingBottom: '2rem',
    },
  },
  dividerLine: {
    marginTop: '1.5rem',
    marginBottom: '1.5rem',
    width: '4.5rem',
    backgroundColor: Theme.colors.primary,
  },
  ImagesResponsive: {
    width: '100%',
    height: 'auto',
  },
  FormResponsive: {
    '& .MuiTextField-root': {
      margin: '0.5rem',
      width: '45ch',
    },
    '& label.Mui-focused': {
      color: 'white',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'yellow',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white',
      },
      '&:hover fieldset': {
        borderColor: 'white',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'yellow',
      },
    },
    [theme.breakpoints.down('xs')]: {
      '& .MuiTextField-root': {
        width: '25ch',
      },
    },
  },
  body: {
    margin: '0',
  },
}))
