import React from 'react'
import { IconButton, Chip, Box } from '@material-ui/core'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'

const Pagination = ({ page, setPage, hasMore, size }) => (
  <Box display="flex" justifyContent="center" alignItems="center">
    <IconButton size={size} disabled={!page} onClick={() => setPage(--page)}>
      <ChevronLeftIcon />
    </IconButton>
    <Chip
      size={size}
      color={page ? 'primary' : 'default'}
      label={page ? page + 1 : `Page ${page + 1}`}
    />
    <IconButton size={size} disabled={!hasMore} onClick={() => setPage(++page)}>
      <ChevronRightIcon />
    </IconButton>
  </Box>
)

export default Pagination
