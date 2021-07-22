import React from 'react'
import moment from 'moment'

import DataTable from './dataTable'
import Typography from '@material-ui/core/Typography'
import LogIcon from '@material-ui/icons/Subject'
import IconButton from '@material-ui/core/IconButton'
import JSONPretty from 'react-json-pretty'
import Chip from '@material-ui/core/Chip'
import Dialog from '@material-ui/core/Dialog'

const LogTable = ({ traces, loading, ...props }) => {
  const [open, setOpen] = React.useState()

  return (
    <React.Fragment>
      <Dialog maxWidth="md" onClose={() => setOpen()} open={Boolean(open)}>
        {open && (
          <div>
            <JSONPretty
              data={open.data}
              mainStyle="padding:40px;margin:0"
              errorStyle="padding:40px;margin:0"
            ></JSONPretty>
          </div>
        )}
      </Dialog>
      <DataTable
        size="small"
        loading={loading}
        config={[
          { title: 'Date', _id: 'date', sortable: true },
          { title: 'Type' },
          {
            title: 'Message'
          },
          {
            title: 'Operation'
          },
          {
            title: 'User'
          },
          {
            title: 'IP'
          },
          {
            title: 'Module'
          },
          {
            title: ''
          }
        ]}
        rows={traces.reduce(
          (acc, { _id, operation, logs, module, ip, user }) => {
            const l = logs.map((log) => ({
              values: [
                <Typography variant="caption">
                  {moment(log.timestamp).utc().format('YYYY-MM-DD HH:mm:ss')}
                </Typography>,
                <Chip label={log.type} variant="outlined" size="small" />,
                log.message,
                operation,
                <Typography variant="caption">{user}</Typography>,
                <Typography variant="caption">{ip}</Typography>,
                <Chip label={module} color="primary" size="small" />,
                <IconButton
                  size="small"
                  disabled={!Boolean(log.data)}
                  onClick={() => setOpen(log)}
                >
                  <LogIcon />
                </IconButton>
              ],
              _id: log._id
            }))
            return acc.concat(l.reverse())
          },
          []
        )}
        {...props}
      />
    </React.Fragment>
  )
}

export default LogTable
