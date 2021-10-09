import React from 'react'

import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import useMediaQuery from '@material-ui/core/useMediaQuery'

const ActionsSet = ({ set, fullWidth }) => {
  const mobile = useMediaQuery((theme) => theme.breakpoints.down('sm'))
  if (!set || !set.length) return ''
  set = set.filter(({ display }) => display !== false)

  if (!set.length) return ''

  return (
    <Box display={{ xs: 'block', md: 'flex' }}>
      {set.map((props, i) => (
        <Box pr={{ xs: 0, md: Boolean(i != set.length - 1) && 2 }} py={1}>
          <Button fullWidth={Boolean(fullWidth && mobile)} {...props} />
        </Box>
      ))}
    </Box>
  )
}

export default ActionsSet
