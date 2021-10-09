import React from 'react'

import Box from '@material-ui/core/Box'
import ActionsSet from './set'
const Actions = ({ optional, left, right }) => (
  <Box width="100%">
    <ActionsSet set={optional} />
    <Box display={{ xs: 'block', md: 'flex' }}>
      <Box flexGrow={1}>
        <ActionsSet set={left} />
      </Box>
      <Box>
        <ActionsSet set={right} />
      </Box>
    </Box>
  </Box>
)

export default Actions
