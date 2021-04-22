import React from 'react'
import moment from 'moment'
import { makeStyles } from '@material-ui/core/styles'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import Typography from '@material-ui/core/Typography'
import LogIcon from '@material-ui/icons/DataUsage'
import Divider from '@material-ui/core/Divider'
import JSONPretty from 'react-json-pretty'
import 'react-json-pretty/themes/1337.css'
import Chip from '@material-ui/core/Chip'
import Box from '@material-ui/core/Box'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%'
  },
  summary: {
    width: '100%',
    display: 'flex',
    '& > *': {
      padding: theme.spacing(1)
    }
  },
  type: { width: '10%' },
  message: { width: '30%' },
  operation: { width: '15%' },
  user: { width: '20%' },
  ip: { width: '10%' },
  module: { width: '10%' },
  date: { width: '20%', textAlign: 'right' }
}))

const Operation = ({
  _id,
  environment,
  module,
  operation,
  user,
  ip,
  date,
  logs = []
}) => {
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState(false)

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }
  const logsList = [...logs].reverse()
  return (
    <div className={classes.root}>
      {logsList.map(({ _id: logId, message, type, timestamp, data }) => (
        <ExpansionPanel
          square
          key={logId}
          expanded={data && expanded === logId}
          onChange={data && handleChange(logId)}
        >
          <ExpansionPanelSummary>
            <Box width="100%" display="flex">
              <Box display="flex" flexGrow={1}>
                <Box px={1}>
                  <Chip label={type} variant="outlined" size="small" />
                </Box>
                <Box px={1}>
                  <Typography variant="caption">{message}</Typography>
                </Box>
              </Box>

              <Box display="flex">
                <Box px={1}>
                  <Typography variant="caption">{operation}</Typography>
                </Box>
                <Box px={1}>
                  <Typography variant="caption">{user}</Typography>
                </Box>
                <Box px={1}>
                  <Typography variant="caption">{ip}</Typography>
                </Box>
                <Box px={1}>
                  <Chip label={module} color="primary" size="small" />
                </Box>
                <Box px={1}>
                  <Typography className={classes.date} variant="caption" noWrap>
                    {moment(timestamp).utc().format('YYYY-MM-DD HH:mm:ss')}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails style={{ padding: 0 }}>
            <div
              style={{ width: '100%', maxHeight: '100vh', overflowY: 'auto' }}
            >
              <JSONPretty
                data={data}
                errorStyle="padding:50px"
                themeClassName={classes.theme}
              ></JSONPretty>
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      ))}
    </div>
  )
}

export default Operation
