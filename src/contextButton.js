import React from 'react'
import Button from '@material-ui/core/Button'
import BackIcon from '@material-ui/icons/ChevronLeft'
import Box from '@material-ui/core/Box'
import Chip from '@material-ui/core/Chip'
import Fade from '@material-ui/core/Fade'

const ContextButton = ({ icon, label }) => (
  <Button startIcon={<BackIcon />}>
    Back
    <Fade in={label} mountOnEnter>
      <Box paddingLeft={2}>
        <Chip
          label={label}
          color="primary"
          size="small"
          variant="outlined"
          icon={icon}
        />
      </Box>
    </Fade>
  </Button>
)

export default ContextButton
