import React from 'react'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import { TableCell, TableRow } from '@material-ui/core'

import Skeleton from '@material-ui/lab/Skeleton'
import IconButton from '@material-ui/core/IconButton'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'

export const DataTableItemSkeleton = ({ config = [], button }) => {
  const mobile = useMediaQuery((theme) => theme.breakpoints.down('sm'))
  return (
    <TableRow>
      {config.map(({ hiddenMobile }) => {
        if (hiddenMobile && mobile) return
        return (
          <TableCell>
            <Skeleton />
          </TableCell>
        )
      })}
      {!mobile && button && (
        <TableCell align="right">
          <IconButton disabled size="small">
            <ChevronRightIcon />
          </IconButton>
        </TableCell>
      )}
    </TableRow>
  )
}
const DataTableItem = ({ config, onClick, values }) => {
  const mobile = useMediaQuery((theme) => theme.breakpoints.down('sm'))
  return (
    <TableRow hover style={{ cursor: onClick && 'pointer' }} onClick={onClick}>
      {values.map((value, i) => {
        if (config[i].hiddenMobile && mobile) return

        return <TableCell {...config[i].props}>{value}</TableCell>
      })}
      {!mobile && onClick && (
        <TableCell align="right">
          <IconButton size="small">
            <ChevronRightIcon />
          </IconButton>
        </TableCell>
      )}
    </TableRow>
  )
}

export default DataTableItem
