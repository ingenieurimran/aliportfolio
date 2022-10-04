import {keyframes} from '@emotion/react'
import {Box} from '@material-ui/core'
import styled from '@mui/material/styles/styled'

// text popUp top animation
const textPopUpTop = keyframes`
0% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
    text-shadow: none;
  }
  100% {
    -webkit-transform: translateY(-30px);
            transform: translateY(-30px);
    -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
    text-shadow: 0 1px 0 #cccccc, 0 2px 0 #cccccc, 0 3px 0 #cccccc, 0 4px 0 #cccccc, 0 5px 0 #cccccc, 0 6px 0 #cccccc, 0 7px 0 #cccccc, 0 8px 0 #cccccc, 0 9px 0 #cccccc, 0 50px 30px rgba(0, 0, 0, 0.3);
  }
`

export const AnimationText = styled(Box)(() => ({
  '&': {
    animation: `${textPopUpTop} 1.5s ease-in-out infinite alternate-reverse both`,
  },
}))

// arrow move down animation
const slideBottom = keyframes`
0% {
    -webkit-transform: translateY(2px);
            transform: translateY(2px);
  }
  100% {
    -webkit-transform: translateY(15px);
            transform: translateY(15px);
  }
`

export const AnimationArrow = styled(Box)(() => ({
  '&': {
    animation: `${slideBottom} 1s linear infinite forwards`,
  },
}))
