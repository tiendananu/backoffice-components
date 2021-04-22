import React from 'react'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

const Title = ({ children, overtitle, subtitle }) => (
  <Box>
    <Typography variant="button" gutterBottom color="textSecondary">
      {overtitle}
    </Typography>
    <Typography variant="h4">{children}</Typography>
    <Typography variant="body1" color="textSecondary">
      {subtitle}
    </Typography>
  </Box>
)

export default Title
