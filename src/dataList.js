import React from 'react'
import { makeStyles } from '@mui/styles'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import EditIcon from '@mui/icons-material/Edit'
import Box from '@mui/material/Box'

export const DataListItem = ({ label, primary, secondary }) => (
  <Box display={{ xs: 'block', md: 'flex' }} alignItems="center" width="100%">
    <Box p={1} width={{ xs: '100%', md: '40%' }}>
      <Typography
        variant="body2"
        style={{ fontWeight: 'bold', verticalAlign: 'center' }}
        noWrap
      >
        {label}
      </Typography>
    </Box>
    <Box p={1} style={{ width: '100%' }}>
      <Typography align="left" color="textSecondary">
        {primary}
      </Typography>
    </Box>
  </Box>
)

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    overflow: 'hidden'
  },
  title: {
    padding: theme.spacing(1)
  }
}))

const DataList = ({
  title,
  header,
  children = [],
  onEdit,
  onRemove,
  orientation = 'vertical'
}) => {
  const classes = useStyles()

  children = children instanceof Array ? children : [children]
  const hasActions = onEdit || onRemove
  return (
    <Paper className={classes.root}>
      <Box display={orientation == 'horizontal' && 'flex'}>
        {header && <Box width="100%">{header}</Box>}
        <Box width="100%">
          <List>
            {title && (
              <ListItem divider>
                <Typography className={classes.title} variant="h5" gutterBottom>
                  {title}
                </Typography>
              </ListItem>
            )}
            {children.map((item, i) => (
              <ListItem key={i} divider={Boolean(i + 1 != children.length)}>
                {item}
              </ListItem>
            ))}
          </List>{' '}
        </Box>
      </Box>
      {hasActions && (
        <Box display="flex" flexDirection="row-reverse" p={3}>
          {onEdit && (
            <Box marginLeft={2}>
              <Button
                variant="contained"
                disableElevation
                startIcon={<EditIcon />}
                color="primary"
                onClick={onEdit}
              >
                Edit
              </Button>
            </Box>
          )}
          {onRemove && (
            <Box>
              <Button onClick={onRemove}>Remove</Button>
            </Box>
          )}
        </Box>
      )}
    </Paper>
  )
}

export default DataList
