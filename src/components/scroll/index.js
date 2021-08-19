import React, {useEffect, useState} from 'react';
import { IconButton } from '@material-ui/core'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
   back2top: {
      zIndex: 2,
      position: 'fixed',
      bottom: '2vh',
      backgroundColor: '#f50057',
      color: 'white',
      "&:hover, &.Mui-focusVisible": {
         transition: '0.3',
         color: 'black',
         backgroundColor:'#f50057'
      },
      right: '5%',
     },
}))

const Scroll = ({showBelow}) => {
   const classes = useStyles();

   const handleClick = () => {
      window[`scrollTo`]({ top: 0, behavior:`smooth`})
   }

   //use show state to determine whether to or not to show scroll button 
   const [show, setShow] =useState(showBelow ? false : true)

   //compare window offset with the show below value passed in 
   const handleScroll = () => {
      if (window.pageYOffset > showBelow) {
         if (!show) setShow(true)
      } else {
         if (show) setShow(false)
      }
   }

   //add an event listener of scroll and handle scroll func when page loads
   useEffect(() => {
      window.addEventListener(`scroll`, handleScroll)
      return () => {
         window.removeEventListener(`scroll`, handleScroll)
      }
   })
   return (
     <div>
        <IconButton className={classes.back2top}  onClick={handleClick} >
           <ExpandLessIcon />
        </IconButton>
     </div>
   )
}

export default Scroll;
