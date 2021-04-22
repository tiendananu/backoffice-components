import React from 'react'

import Box from '@material-ui/core/Box'
import Fab from '@material-ui/core/Fab'
import CircularProgress from '@material-ui/core/CircularProgress'

const FloatingButton = ({ children, loading, ...props }) => (
  <Box position="fixed" right={0} bottom={0} p={4}>
    <Fab size="small" color="primary" disabled={loading} {...props}>
      {loading ? <CircularProgress /> : children}
    </Fab>
  </Box>
)

export default FloatingButton
