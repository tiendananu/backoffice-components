import React from 'react'
import clsx from 'clsx'
import {
  Avatar,
  Box,
  Divider,
  Drawer,
  Hidden,
  List,
  IconButton,
  Typography,
  makeStyles,
  Button,
  ListItem,
  Fab
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import LogOutIcon from '@material-ui/icons/PowerSettingsNew'
import { Language } from '@jibadano/components'
const useStylesItem = makeStyles((theme) => ({
  item: {
    display: 'flex',
    paddingTop: 0,
    paddingBottom: 0
  },
  button: {
    color: theme.palette.text.secondary,
    fontWeight: theme.typography.fontWeightMedium,
    justifyContent: 'flex-start',
    letterSpacing: 0,
    padding: '10px 8px',
    textTransform: 'none',
    width: '100%'
  },
  icon: {
    marginRight: theme.spacing(1)
  },
  title: {
    marginRight: 'auto'
  },
  active: {
    color: theme.palette.primary.main,
    '& $title': {
      fontWeight: theme.typography.fontWeightMedium
    },
    '& $icon': {
      color: theme.palette.primary.main
    }
  }
}))

export const MenuItem = ({
  onClick,
  selected,
  className,
  href,
  icon: Icon,
  title,
  ...rest
}) => {
  const classes = useStylesItem()

  return (
    <ListItem
      selected={selected}
      className={clsx(classes.item, className)}
      disableGutters
      {...rest}
    >
      <Button
        activeClassName={classes.active}
        className={classes.button}
        onClick={onClick}
      >
        {Icon && <Icon className={classes.icon} size="20" />}
        <span className={classes.title}>{title}</span>
      </Button>
    </ListItem>
  )
}

const useStyles = makeStyles((theme) => ({
  mobileDrawer: {
    width: 256
  },
  desktopDrawer: {
    width: 256,
    height: '100%'
  },
  avatar: {
    cursor: 'pointer',
    width: 48,
    height: 48,
    margin: theme.spacing(1, 0)
  },
  fabIcon: {
    backgroundColor: theme.palette.common.white
  }
}))

const Menu = ({
  logo,
  items = [],
  user,
  route,
  onLogOut,
  onChange = () => {}
}) => {
  const classes = useStyles()
  const [open, setOpen] = React.useState()
  const content = (
    <Box height="100%" display="flex" flexDirection="column">
      {logo && (
        <Box alignItems="center" display="flex" flexDirection="column" p={2}>
          {logo}
        </Box>
      )}
      <Divider />
      <Box p={2}>
        <List>
          {items.map((item) => (
            <MenuItem
              selected={route == item.href}
              href={item.href}
              key={item.title}
              title={item.title}
              icon={item.icon}
              onClick={() => {
                setOpen()
                onChange(item.href)
              }}
            />
          ))}
        </List>
      </Box>
      {user && (
        <Box
          justifyContent="flex-end"
          height="100%"
          display="flex"
          flexDirection="column"
        >
          <Box px={2} display="flex">
            <Box
              onClick={() => {
                setOpen()
                onChange('/account')
              }}
              flexGrow={1}
              display="flex"
              alignItems="center"
            >
              <Avatar className={classes.avatar} src={user.image} />
              <Box p={2}>
                <Typography color="textPrimary" variant="h6">
                  {user.name}
                </Typography>
                <Typography color="textSecondary" variant="body2">
                  {user.role}
                </Typography>
              </Box>
            </Box>
          </Box>
          <Divider />

          <Box p={2} display="flex">
            {onLogOut && (
              <IconButton onClick={onLogOut}>
                <LogOutIcon fontSize="small" />
              </IconButton>
            )}
            <Language />
          </Box>
        </Box>
      )}
    </Box>
  )

  return (
    <div>
      <Hidden lgUp>
        <Box position="fixed" top={0} right={0} p={2} zIndex={1}>
          <Fab className={classes.fabIcon} onClick={() => setOpen(true)}>
            <MenuIcon />
          </Fab>
        </Box>
        <Drawer
          anchor="left"
          classes={{ paper: classes.mobileDrawer }}
          onClose={() => setOpen()}
          open={open}
          variant="temporary"
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer
          anchor="left"
          classes={{ paper: classes.desktopDrawer }}
          open
          variant="persistent"
        >
          {content}
        </Drawer>
      </Hidden>
    </div>
  )
}

export default Menu
