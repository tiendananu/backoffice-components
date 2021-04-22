import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import Chip from '@material-ui/core/Chip'
import Green from '@material-ui/core/colors/green'
import Red from '@material-ui/core/colors/red'
import Amber from '@material-ui/core/colors/amber'
import Blue from '@material-ui/core/colors/blue'
import Grey from '@material-ui/core/colors/grey'
import CircularProgress from '@material-ui/core/CircularProgress'
import DoneIcon from '@material-ui/icons/Done'
const useStyles = makeStyles({
  root: ({ severity, variant }) => {
    let color = Grey
    if (severity == 'ok') color = Green
    if (severity == 'error') color = Red
    if (severity == 'info') color = Blue
    if (severity == 'warning') color = Amber

    if (variant == 'outlined')
      return {
        color: color[700],
        borderColor: color[600],
        '&>.MuiChip-avatar': {
          color: color[600]
        }
      }
    else
      return {
        color: 'white',
        backgroundColor: color[600],
        '&>.MuiChip-avatar': {
          color: 'white'
        }
      }
  }
})

const Status = ({
  children,
  icon,
  inprogress,
  severity,
  variant,
  ...props
}) => {
  const classes = useStyles({ severity, variant })
  return (
    <Chip
      onDelete={icon ? () => {} : ''}
      deleteIcon={icon}
      avatar={inprogress && <CircularProgress size={16} thickness={6} />}
      size="small"
      className={classes.root}
      label={children}
      variant={variant}
      {...props}
    />
  )
}

export default Status
