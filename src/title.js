import React from 'react'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

const Title = ({ children, overtitle, subtitle, actions }) => (
  <Box display={{ xs: 'block', md: 'flex' }}>
    <Box flexGrow={1}>
      <Typography variant="button" gutterBottom color="textSecondary">
        {overtitle}
      </Typography>
      <Typography variant="h4">{children}</Typography>
      <Typography variant="body1" color="textSecondary">
        {subtitle}
      </Typography>
    </Box>
    <Box pt={2}>{actions}</Box>
  </Box>
)

export default Title
