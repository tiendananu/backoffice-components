import React, { Fragment } from 'react'

import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import Drawer from '@material-ui/core/Drawer'

import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import useMediaQuery from '@material-ui/core/useMediaQuery'

const SideMenu = ({ children, swipeable, title = 'Menu', defaultOpen }) => {
  const [open, setOpen] = React.useState(defaultOpen)
  const mobile = useMediaQuery((theme) => theme.breakpoints.down('sm'))
  if (!mobile) return children
  const Component = swipeable ? SwipeableDrawer : Drawer
  return (
    <React.Fragment>
      <Box position="fixed" zIndex={1} bottom={0} left={0} width="100%">
        <Button
          style={{ borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}
          fullWidth
          size="large"
          variant="contained"
          color="primary"
          disableElevation
          onClick={() => setOpen(true)}
        >
          {title}
        </Button>
      </Box>
      <Component
        anchor="bottom"
        open={open}
        onClose={() => setOpen()}
        onOpen={() => setOpen(true)}
        onClick={() => setOpen()}
      >
        {children}
      </Component>
    </React.Fragment>
  )
}

export default SideMenu
