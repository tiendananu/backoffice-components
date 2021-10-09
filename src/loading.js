import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  root: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    height: '100%'
  }
}))

const Loading = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <CircularProgress variant="indeterminate" />
    </div>
  )
}

export default Loading
