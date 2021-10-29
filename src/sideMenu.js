import React, { Fragment } from 'react'

import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import Drawer from '@mui/material/Drawer'

import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import useMediaQuery from '@mui/material/useMediaQuery'

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
