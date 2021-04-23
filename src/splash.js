import React from 'react'
import Typography from '@material-ui/core/Typography'
import LinearProgress from '@material-ui/core/LinearProgress'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  root: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    height: '100%'
  }
}))

export default () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div>
        <Typography variant="h5" gutterBottom>
          Backoffice
        </Typography>
        <LinearProgress variant="indeterminate" />
      </div>
    </div>
  )
}
